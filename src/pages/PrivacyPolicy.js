import React from "react";
import { useTranslation } from "react-i18next";
import '../styles/PrivacyPolicy.css';

export default function PrivacyPolicy(){
    const { t } = useTranslation('privacypolicy');

    return (
        <div id="privacy-policy">
                <h2 className="privacy-policy-title">
                    {t("privacypolicy.heading")}
                </h2>   
                <div className="privacy-policy-body">
                    {t("privacypolicy.generalnote")}

                    <span />

                    <bold>{t("privacypolicy.designation-of-responsible-organisation-heading")}</bold>
                    
                    {t("privacypolicy.designation-of-responsible-organisation-1")}
                    <br />
                    Domaine Les Enfants Sauvages
                    <br />
                    Nikolaus {t("privacypolicy.designation-of-responsible-organisation-2")} Carolin Bantlin
                    <br/>
                    10 - 12, rue Gilbert Salamo
                    <br/>
                    11510 Fitou
                    <br/>
                    France

                    <span />

                        {t("privacypolicy.designation-of-responsible-organisation-3")}
                    
                    <span />

                    <bold>{t("privacypolicy.recovation-of-consent-heading")}</bold>
                        {t("privacypolicy.recovation-of-consent-1")}
                    
                    <span />

                    <bold>{t("privacypolicy.right-to-compliant-heading")}</bold>
                        {t("privacypolicy.right-to-compliant-1")}
                        <a className="privacy-policy-link" href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="blank">
                            {t("privacypolicy.right-to-compliant-2")}
                        </a>.
                    
                    <span />

                    <bold>{t("privacypolicy.data-portability-heading")}</bold>
                        {t("privacypolicy.data-portability-1")}
                        <span />
                        {t("privacypolicy.data-portability-2")}
                        <br />
                        {t("privacypolicy.data-portability-3")}
                    
                    <span />

                    <bold>{t("privacypolicy.data-protection-officer-heading")}</bold>
                        Carolin Bantlin
                        <br/>
                        10 - 12, rue Gilbert Salamo
                        <br/>
                        11510 Fitou
                        <br/>
                        France
                        <br/>
                        <a className="privacy-policy-link" href="mailto:carolinbantlin@gmx.de" target="blank">
                            carolinbantlin@gmx.de
                        </a>
                        <br/>
                        <a className="privacy-policy-link" href="+33 624918925" target="blank">
                            +33 624918925
                        </a>
                    
                    <span />

                    <bold>{t("privacypolicy.server-log-files-heading")}</bold>
                        {t("privacypolicy.server-log-files-1")}                    <ul className="privacy-policy-server-list">
                        <li>{t("privacypolicy.server-log-files-li-1")}</li>
                        <li>{t("privacypolicy.server-log-files-li-2")}</li>
                        <li>{t("privacypolicy.server-log-files-li-3")}</li>
                        <li>{t("privacypolicy.server-log-files-li-4")}</li>
                        <li>{t("privacypolicy.server-log-files-li-5")}</li>
                        <li>{t("privacypolicy.server-log-files-li-6")}</li>
                    </ul>
                        {t("privacypolicy.server-log-files-2")}
                    
                    <span />

                    <bold>Contact</bold>
                    {t("privacypolicy.contact-1")}
                    <br />
                    {t("privacypolicy.contact-2")}
                    
                    <span />

                    <bold>Source</bold>
                    {t("privacypolicy.privacy-configurator")} 
                        <a className="privacy-policy-link" href="https://mein-datenschutzbeauftragter.de/" target="blank">
                            mein-datenschutzbeauftragter
                        </a>.
                    <span />
                </div>
        </div>
    );
}