import React from "react";
import '../styles/LegalNotice.css'

export default function LegalNotice(){
    return (
        <div id="legal-notice">
            <h2 className="legal-notice-title">Legal Notice</h2>   
            <p className="legal-notice-body">
                Registration with the RCS, number:
                750 180 499 RCS Perpignan
                <br/>
                Date of registration:
                12/03/2012
                <br/>
                Name or company name:
                GAEC Domaine Les Enfants Sauvages
                <br/>
                Legal form:
                Agricultural group operating in common Share
                <br/>
                capital:
                149 650.00 Euro
                <br/>
                Head office address :
                Pla de l'Œil 66600 Salses le Château
                <br/>
                Main activity:
                viticulture
                <br/>
                Management:
                Carolin Bantlin, Nikolaus Bantlin
                10, rue Gilbert Salamo 11510 Fitou
                <br/>
                VAT No:
                FR83 750 180 499
                <br/>
                SIRET No:
                750 180 499 00014
            </p>
            {/* <br /> */}
        </div>
    );
}