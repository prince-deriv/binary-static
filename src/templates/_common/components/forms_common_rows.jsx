import React from 'react';
import { Fieldset, FormRow } from './forms.jsx';

export const Salutation = ({ className, row_class, row_id }) => (
    <FormRow
        type='select'
        className={`${className}`}
        id='salutation'
        label={it.L('Title')}
        row_class={row_class}
        row_id={row_id}
    >
        <option value='Mr'>{it.L('Mr')}</option>
        <option value='Ms'>{it.L('Ms')}</option>
    </FormRow>
);

export const FirstName = ({ className, hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='first_name'
        label={it.L('First name')}
        attributes={{ maxLength: '50', className: `center-text-m ${className || ''}`, 'data-lpignore': true }}
        row_class={row_class}
        row_id={row_id}
        hint={hint}
    />
);

export const LastName = ({ className, hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='last_name'
        label={it.L('Last name')}
        attributes={{ maxLength: '50', className: `center-text-m ${className || ''}`, 'data-lpignore': true }}
        hint={hint}
        row_id={row_id}
        row_class={row_class}
    />
);

export const DateOfBirth = ({ className, row_class, row_id }) => (
    <FormRow
        type='text'
        id='date_of_birth'
        className='center-text-m'
        label={it.L('Date of birth')}
        row_class={row_class}
        row_id={row_id}
        attributes={{ size: '12', readOnly: true, className: `center-text-m ${className || ''}`, 'data-lpignore': true }}
    />
);

export const PlaceOfBirth = ({ className, row_class, row_id }) => (
    <FormRow
        type='select'
        id='place_of_birth'
        label={it.L('Place of birth')}
        className={className}
        row_class={row_class}
        row_id={row_id || 'place_of_birth_row'}
        attributes={{ single: 'single' }}
    />
);

export const Citizenship = ({ className, row_class, row_id }) => (
    <FormRow
        type='select'
        id='citizen'
        label={it.L('Citizenship')}
        className={className}
        row_class={row_class}
        row_id={row_id || 'citizen_row'}
        attributes={{ single: 'single' }}
    />
);

export const Residence = ({ className, row_class, row_id }) => (
    <FormRow
        type='custom'
        id='residence'
        row_class={row_class}
        row_id={row_id}
        className={className || ''}
        label={it.L('Country of residence')}
    >
        <div id='residence_container'>
            <label id='lbl_residence' />
        </div>
    </FormRow>
);

export const AccountOpeningReason = ({ row_id, row_class }) => (
    <FormRow
        type='select'
        id='account_opening_reason'
        label={it.L('Account opening reason')}
        row_id={row_id}
        row_class={row_class}
    >
        <option value=''>{it.L('Please select')}</option>
        <option value='Speculative'>{it.L('Speculative')}</option>
        <option value='Income Earning'>{it.L('Income earning')}</option>
        <option value='Hedging'>{it.L('Hedging')}</option>
    </FormRow>
);

export const TaxResidence = ({ className, row_class, row_id }) => (
    <FormRow
        type='select'
        id='tax_residence'
        label={it.L('Tax residence')}
        className={className}
        row_class={row_class}
        row_id={row_id || 'tax_residence_row'}
        attributes={{ single: 'single' }}
    />
);

export const TaxIdentificationNumber = ({ className, hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='tax_identification_number'
        label={it.L('Tax identification number')}
        attributes={{ maxLength: '50', className: `center-text-m ${className || ''}`, 'data-lpignore': true }}
        hint={hint}
        row_id={row_id}
        row_class={row_class}
    />
);

export const TaxIdentificationConfirm = ({ row_class, row_id }) => (
    <div id={row_id} className={row_class}>
        <div className='gr-12 gr-padding-10'>
            <input type='checkbox' id='tax_identification_confirm' />
            <label htmlFor='tax_identification_confirm'>
                {it.L('I hereby confirm that the tax information I provided is true and complete. I will also inform Deriv Investments (Europe) Limited about any changes to this information.')}
            </label>
        </div>
    </div>
);

export const AddressLine1 = ({ hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='address_line_1'
        className='center-text-m'
        label={it.L('First line of address')}
        attributes={{ maxLength: '70', 'data-lpignore': true }}
        hint={hint}
        row_class={row_class}
        row_id={row_id}
    />
);

export const AddressLine2 = ({ hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='address_line_2'
        className='center-text-m'
        label={it.L('Second line of address')}
        attributes={{ maxLength: '70', 'data-lpignore': true }}
        hint={hint}
        row_class={row_class}
        row_id={row_id}
    />
);

export const AddressCity = ({ hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='address_city'
        className='center-text-m'
        label={it.L('Town/city')}
        attributes={{ maxLength: 35, 'data-lpignore': true }}
        hint={hint}
        row_class={row_class}
        row_id={row_id}
    />
);

export const AddressState = (row_class, row_id) => (
    <FormRow
        type='select'
        id='address_state'
        label={it.L('State/province')}
        attributes={{ single: 'single' }}
        row_class={row_class}
        row_id={row_id}
    />
);

export const AddressPostcode = ({ children, hint, row_class, row_id, is_full_width }) => (
    <FormRow
        type='text'
        id='address_postcode'
        className='center-text-m'
        label={it.L('Postal/ZIP code')}
        attributes={{ maxLength: '20', 'data-lpignore': true }}
        hint={hint}
        row_class={`postcode-form-row ${row_class || ''}`}
        has_geovalidator={!is_full_width}
        row_id={row_id}
    >
        {children}
    </FormRow>
);

export const Phone = ({ hint, row_class, row_id }) => (
    <FormRow
        type='text'
        id='phone'
        className='center-text-m'
        label={it.L('Phone number')}
        attributes={{ 'data-lpignore': true }}
        hint={hint}
        row_class={row_class}
        row_id={row_id}
    />
);

export const SecretQuestion = () => (
    <FormRow type='select' id='secret_question' className='center-select-m' label={it.L('Secret question')}>
        <option value='Favourite dish'>{it.L('Favourite dish')}</option>
        <option value="Mother's maiden name">{it.L('Mother\'s maiden name')}</option>
        <option value='Name of your pet'>{it.L('Name of your pet')}</option>
        <option value='Name of first love'>{it.L('Name of first love')}</option>
        <option value='Memorable town/city'>{it.L('Memorable town/city')}</option>
        <option value='Memorable date'>{it.L('Memorable date')}</option>
        <option value='Brand of first car'>{it.L('Brand of first car')}</option>
        <option value='Favourite artist'>{it.L('Favourite artist')}</option>
    </FormRow>
);

export const SecretAnswer = () => (
    <FormRow
        type='text'
        id='secret_answer'
        label={it.L('Answer to secret question')}
        attributes={{ maxLength: '50', autoComplete: 'off', 'data-lpignore': true }}
    />
);

export const Tnc = ({ className, row_id }) => (
    <div className={`gr-row fieldset_margin_top ${className}`} id={row_id}>
        <div className='gr-12-m gr-padding-10 add-account-tnc'>
            <input type='checkbox' name='tnc' id='tnc' />
            <label htmlFor='tnc'>
                {it.L(
                    'I agree to the [_1]terms and conditions[_2].',
                    `<a target="_blank" href="${it.url_for('terms-and-conditions')}">`,
                    '</a>'
                )}
            </label>
        </div>
    </div>
);

export const TncWithSubmitButton = () => (
    <div className='center-text'>
        <div className='gr-row'>
            <div className='gr-12-m gr-padding-10 gr-centered'>
                <input type='checkbox' name='tnc' id='tnc' />
                <label htmlFor='tnc'>
                    {it.L(
                        'I have read and agree to the [_1]terms and conditions[_2] of the site.',
                        `<a target="_blank" href="${it.url_for('terms-and-conditions')}">`,
                        '</a>'
                    )}
                </label>
                <span className='required_field_asterisk'>*</span>
            </div>
        </div>

        <button className='button' type='submit'>{it.L('Open account')}</button>
    </div>
);

export const Jurisdiction = ({ row_id, className }) => (
    <Fieldset legend={it.L('Jurisdiction and choice of law')} id={row_id} className={className}>
        <div className='gr-12'>
            <p>{it.L('Your account will be opened with [_1], [_2] and will be subject to the laws of [_3].', '<span id="lc-name"></span>', '<span id="lc-regulator"></span>', '<span id="lc-country"></span>')}</p>
        </div>
    </Fieldset>
);

export const RiskDisclaimer = ({ className, row_id }) => (
    <Fieldset legend={it.L('Risk warning')} className={`fieldset_margin_top ${className}`} id={row_id} >
        <div className='gr-12'>
            <p>{it.L('The financial trading services offered on this site are only suitable for customers who accept the possibility of losing all the money they invest and who understand and have experience of the risk involved in the purchase of financial contracts. Transactions in financial contracts carry a high degree of risk. If the contracts you purchased expire as worthless, you will lose all your investment, which includes the contract premium.')}</p>
        </div>
    </Fieldset>
);

export const ClientMessage = () => (
    <div className='errorbox rbox invisible' id='client_message'>
        <div className='rbox-wrap'>
            <div className='gr-12 rbox-content' id='client_message_content'>
                <p className='center-text notice-msg' />
            </div>
        </div>
    </div>
);

export const TaxInformationForm = () => (
    <React.Fragment>
        <div id='tax_information_info' className='gr-12 gr-padding-10'>
            <label>{it.L('Deriv Investments (Europe) Limited is required to collect your tax information.')}&nbsp;
                <span id='tax_information_note_toggle' className='toggle-arrow'>{it.L('Read more.')}</span>
            </label>
            <span className='required_field_asterisk'>*</span>

            <div id='tax_information_note' style={{ display: 'none' }}>
                <p>{it.L('This requirement is mandated by the Common Reporting Standard (CRS) and the Foreign Account Tax Compliance Act (FATCA).')}</p>
                <p>{it.L('Please enter your [_1]tax information[_2] below to continue.', '<a href="https://ec.europa.eu/taxation_customs/tin/tinByCountry.html" target="_blank">', '</a>')}</p>
                <p>{it.L('Rest assured that your information will only be used for CRS/FATCA reporting purposes and will be kept safe.')}</p>
                <p>{it.L('If we have reason to believe that your tax information is incomplete, we may contact you for clarification.')}</p>
            </div>
        </div>

        <FormRow
            type='label'
            label={it.L('Tax residence')}
            id='lbl_tax_residence'
            row_id='row_lbl_tax_residence'
            row_class='invisible'
        />
        <FormRow
            type='select'
            label={it.L('Tax residence')}
            tooltip={it.L('Please select the country where you are a tax resident. If you have any doubts, kindly consult your tax advisor.')}
            id='tax_residence'
            row_id='row_tax_residence'
            row_class='invisible'
            attributes={{ single: 'single' }}
        />

        <FormRow
            type='label'
            label={it.L('Tax identification number')}
            id='lbl_tax_identification_number'
            row_id='row_lbl_tax_identification_number'
            row_class='invisible'
        />
        <FormRow
            type='text'
            label={it.L('Tax identification number')}
            tooltip={it.L('Please provide the tax identification number for the country where you are a tax resident. If you cannot provide this information, kindly contact our customer support team.')}
            id='tax_identification_number'
            className='center-text-m'
            row_id='row_tax_identification_number'
            row_class='invisible'
            attributes={{ maxLength: 20, 'data-lpignore': true }}
        />

        <p id='tax_id_warning' className='notice-msg invisible gr-9 gr-centered'>
            {it.L('This Tax Identification Number (TIN) is invalid. You may continue, but to facilitate future payment processes, valid tax information will be required.')}
        </p>

        <div id='tax_information_declaration'>
            <div className='gr-12 gr-padding-10'>
                <input type='checkbox' id='chk_tax_id' />
                <label htmlFor='chk_tax_id'>
                    {it.L('I hereby confirm that the tax information I provided is true and complete. I will also inform Deriv Investments (Europe) Limited about any changes to this information.')}
                </label>
                <span className='required_field_asterisk'>*</span>
            </div>
        </div>
    </React.Fragment>
);
