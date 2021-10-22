import React, { useState } from "react";
import './Form.css';

const ConfirmPage = () => {
    const [data, setData] = useState(0)

    function getData(val) {
        setData(val.target.value)
        console.log(`this is sasia ${data} `);
    }
    var sasia = [data];
    var totali = data * props.match.params.cmimi;
    var emriIProduktit = props.match.params.emri;
    var cmimiP = props.match.params.cmimi;

    console.log(`this is sasia ${sasia} `);
    console.log(`this is cmimi ${totali} `);

    function addtoTable() {

        const shitjet = [
            { emriSH: emriIProduktit }, { cmimiSH: cmimiP }, { sasiaSH: sasia }, { totaliSH: totali }]

            console.log(shitjet);

        // const fileData = JSON.stringify(shitjet);
        // const blob = new Blob([fileData], { type: "text/plain" });
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.download = 'shitjet.json';
        // link.href = url;
        // link.click();

        
        // const fs = require('fs')
        // const toJSon = JSON.stringify(shitjet)show 
        // fs.writeFileSync('new.json', toJSon)
    }

            // 1- Gjenerohet nje file
            // 2- Kontroll nese ka te pakten nje shitje per produktin
            // 2.1- Nese ka te pakten nje shitje per produktin e zgjedhur do behet update fusha e shitjes
            // 2.2- Nese nuk ka nje shitje do shtohet shitja

    return (
        <div>
            <h1> Konfirmo Blerjen!  </h1>
            <div className="imaginee">

                <form className="form" >

                    <div className="form-inputs">
                        <label htmlFor='emri' className="form-label"> Emri i produktit </label>
                        <input type="text" name="emri" className="form-input" placeholder={emriIProduktit} />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor='sasia' className="form-label"> Sasia </label>
                        <input type="text" name="sasia" className="form-input" placeholder="" onChange={getData} />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor='cmimi' className="form-label"> Totali </label>
                        <label htmlFor='cmimi' className="form-input"> {totali}   </label>
                    </div>

                    <div className="form-inputs">
                        <button className='form-button' type='submit' onClick={addtoTable}> Konfirmo </button>
                    </div>

                </form>

            </div>


        </div>

    );
}

export default ConfirmPage;