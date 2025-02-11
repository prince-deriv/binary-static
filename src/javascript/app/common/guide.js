const Cookies   = require('js-cookie');
const EnjoyHint = require('../../_common/lib/guide.enjoyhint');
const localize  = require('../../_common/localize').localize;

/*
 *  This is developed to simplify the usage of enjoyhint (https://github.com/xbsoftware/enjoyhint)
 *
 *  How to Implement in a page:
 *  1. Add the button element to the template: <div id="guideBtn"></div>
 *  2. Add the js initialization call, having the customized parameters: Guide.init({script : 'trading'});
 *  3. Add the script data to getScript() method
 */

const Guide = (() => {
    let opt,
        cookie_name,
        btn_next,
        btn_finish;

    const init = (options) => {
        opt = {
            script               : '',      // the script name in scripts
            autoStart            : false,   // false: start by button click
            guide_btn_id         : '#guideBtn',
            btnText              : localize('Guide'),  // guide start button's text
            blink_class          : 'highlight',
            blink_inDelay        : 1000,
            blink_outDelay       : 1000,
            blink_interval       : 3000,    // 0: continous blinking (blink_inDelay + blink_outDelay)
            blink_count          : 0,        // 0: infinite
            contract_list_id     : '#contracts_list',
            close_confirmation_id: '#close_confirmation_container',
        };
        $.extend(true, opt, options);

        cookie_name = 'hide_guide';
        btn_next    = { className: 'button', html: $('<span/>', { text: localize('Next') }) };
        btn_finish  = { className: 'button btnFinish', html: $('<span/>', { text: localize('Finish') }) };

        if ($(opt.guide_btn_id).length === 0 || opt.script.length === 0) {
            return;
        }

        if (isDisabled()) {
            $(opt.guide_btn_id).remove();
            return;
        }

        makeButton();
    };
    /*
     *  do not show the guide button if its close (X) has been clicked before
     */
    const isDisabled = () => {
        const disabled = Cookies.get(cookie_name);
        return !!disabled && $.inArray(opt.script, disabled.split(',')) >= 0;
    };

    /*
     *  handle the guide button appearance using a cookie for all scripts
     */
    const setDisabled = () => {
        if (!isDisabled()) {
            const disabled = Cookies.get(cookie_name);
            Cookies.set(cookie_name, (!disabled ? opt.script : `${disabled},${opt.script}`), { sameSite: 'strict', secure: true });
        }
    };

    /*
     *  generate the button's html
     */
    const makeButton = () => {
        if ($(opt.guide_btn_id).children().length > 0) {
            return;
        }

        $(opt.guide_btn_id)
            .addClass('gr-hide-m pulser')
            .append($('<span/>', { class: 'close', text: 'X' }))
            .append($('<strong/>'));
        $(`${opt.guide_btn_id} strong`).html(`<span></span>${opt.btnText}`);

        setEvents();
    };

    /*
     *  both buttons' click event
     */
    const setEvents = () => {
        $(`${opt.guide_btn_id} strong`).click(() => {
            const enjoyhint_instance = new EnjoyHint({});
            enjoyhint_instance.setScript(getScript(opt.script));
            enjoyhint_instance.runScript();
            if ($(opt.contract_list_id).css('display') === 'none') {
                $(opt.close_confirmation_id).click();
            }
        });

        if (opt.autoStart) {
            $(opt.guide_btn_id).click();
        }

        // Hide button
        $(`${opt.guide_btn_id} span.close`).click(() => {
            setDisabled();
            $(opt.guide_btn_id).remove();
        });
    };

    /*
     *  each page's script
     */
    const getScript = (script_name) => {
        if (script_name !== 'trading') {
            return null;
        }
        return [
            {
                selector   : '#underlying_component',
                description: `<h1>${localize('Step')} 1</h1>${localize('Select your market and underlying asset')}`,
                event_type : 'next',
                nextButton : btn_next,
            },
            {
                selector   : '#contract_component',
                description: `<h1>${localize('Step')} 2</h1>${localize('Select your trade type')}`,
                event_type : 'next',
                nextButton : btn_next,
            },
            {
                selector   : '#websocket_form',
                description: `<h1>${localize('Step')} 3</h1>${localize('Adjust trade parameters')}`,
                event_type : 'next',
                nextButton : btn_next,
            },
            {
                selector   : '#contract_prices_container',
                description: `<h1>${localize('Step')} 4</h1>${localize('Predict the direction<br />and purchase')}`,
                event_type : 'next',
                nextButton : btn_finish,
            },
        ];
    };

    return {
        init,
    };
})();

module.exports = Guide;
