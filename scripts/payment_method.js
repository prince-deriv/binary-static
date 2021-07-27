const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const json = [];

const source_path = path.join(__dirname, "data", "payment-methods.csv");
const output_path = path.join(
  __dirname,
  "..",
  "src",
  "templates",
  "app",
  "cashier",
  "payment_methods.json"
);

const filters = {
  currencies: {
    delimeter: ",",
    type: "array",
  },
  withdrawal: {
    filter: "descriptionMinMax",
    type: "custom",
  },
  deposit: {
    filter: "descriptionMinMax",
    type: "custom",
  },
};

const replaceAll = (string, search, replacement) => {
  return string.split(search).join(replacement);
};

const cleanStr = (str) => {
  return replaceAll(str.toLowerCase(), " ", "");
};

const escapeStr = (str) => {
  return replaceAll(str.toLowerCase(), " ", "_");
};

const filterFunctions = {
  descriptionMinMax: (value) => {
    const data = value.split("|");

    let description, min, max;

    if (data.length) {
      description = data[0] ? data[0] : "";

      const min_max_parts = data[1] ? data[1].split("-") : [];

      if (min_max_parts.length) {
        min = cleanStr(replaceAll(min_max_parts[0], "min", ""));
        max = cleanStr(replaceAll(min_max_parts[1], "max", ""));
      }
    }

    return {
      description,
      min,
      max,
    };
  },
};

fs.createReadStream(source_path)
  .pipe(
    csv({
      mapHeaders: ({ header }) => {
        const headings = {
          "active/inactive": "status",
        };

        let header_text = escapeStr(header);

        header_text = headings[header_text]
          ? headings[header_text]
          : header_text;

        return header_text;
      },
      mapValues: ({ header, index, value }) => {
        let final_value = value;

        const filter_option = filters[header];

        if (filter_option) {
          const { delimeter, type, filter } = filter_option;

          switch (type) {
            case "array":
              {
                final_value = value.split(delimeter);
              }
              break;
            case "custom":
              {
                final_value = filterFunctions[filter](value);
              }
              break;
          }
        }

        return final_value;
      },
    })
  )
  .on("data", (data) => {
    json.push(data);
  })
  .on("end", () => {
    json.map(({ name }, i) => {
      json[i]["logo"] = `${escapeStr(name)}.svg`;
      json[i]["reference"] = `${escapeStr(name)}.pdf`;
    });

    const final_json = JSON.stringify(json, null, 2);

    fs.writeFile(output_path, final_json, "utf8", () => {
      console.log("Payment Methods JSON has been generated");
    });
  });
