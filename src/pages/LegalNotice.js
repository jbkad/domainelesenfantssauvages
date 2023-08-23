import React from "react";
import { useTranslation } from "react-i18next";
import '../styles/LegalNotice.css'

export default function LegalNotice(){
    const { t } = useTranslation('legalnotice');

    return (
        <div id="legal-notice">
            <h2 className="legal-notice-title">
                {t('legalnotice.heading')}
            </h2>   
            <div className="legal-notice-body">
                <bold>{t('legalnotice.rcs')}</bold>
                750 180 499 RCS Perpignan
                
                <span />

                <bold>{t('legalnotice.registrationdate')}</bold>
                12/03/2012

                <span />

                <bold>{t('legalnotice.companyname')}</bold>
                GAEC Domaine Les Enfants Sauvages

                <span />

                <bold>{t('legalnotice.legalform')}</bold>
                Agricultural group operating in common share

                <span />

                <bold>Capital</bold>
                149 650.00 Euro

                <span />

                <bold>{t('legalnotice.officeaddress')}</bold>
                Pla de l'Œil 66600 Salses le Château

                <span />

                <bold>{t('legalnotice.corebusiness')}</bold>
                Viticulture

                <span />

                <bold>Management</bold>
                Carolin Bantlin, Nikolaus Bantlin
                <br />
                10, rue Gilbert Salamo 11510 Fitou

                <span />

                <bold>{t('legalnotice.vat')}</bold>
                FR83 750 180 499

                <span />

                <bold>{t('legalnotice.siret')}</bold>
                750 180 499 00014

                <span />

            </div>
        </div>
    );
}