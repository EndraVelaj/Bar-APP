import React, { useState } from "react";
import './Form.css';


const ConfirmPage = (props) => {


    console.log("This is the location of the page:", props.match);

    const [data, setData] = useState(null)
    function getData (val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }


    return (

        <div>
         
            <h1> Konfirmo Blerjen!  </h1>
            <div className="imaginee">
                
                <form className="form" >

                    <div className="form-inputs">
                        <label htmlFor='emri' className="form-label"> Emri i produktit </label>
                        <input type="text" name="emri" className="form-input" placeholder={props.match.params.emri} />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor='sasia' className="form-label"> Sasia </label>
                        <input type="text" name="sasia" className="form-input" placeholder="" onChange={getData} />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor='cmimi' className="form-label"> Cmimi </label>
                        <label htmlFor='cmimi' className="form-input"> {data*props.match.params.cmimi}   </label>
                    </div>

                    <div className="form-inputs">
                        <button className='form-button' type='submit' > Konfirmo </button>
                    </div>

                </form>

            </div>
           

        </div>

    );
};


export default ConfirmPage;