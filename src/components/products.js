import React from "react";
import styles from "./products.module.css";
import {Link} from "react-router-dom"

function Produktet(props) {

    return (
        <>
            <div className="imagess" style={{
                backgroundImage: `url(${props.source})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxWidth: "30rem",
                height: "20rem",
                padding: "50px",
                marginLeft: "auto",
                marginRight: "auto",
                border: "10px solid darkgray",
                marginBottom: "57px"

            }}>

                <div className={styles.description}>
                    <p> {props.emri} </p>
                    <p> {props.cmimi} $ </p>
                    <button className="button1">
                        <Link to={`/konfirmo-blerjen/`}>
                            Konfrimo
                        </Link>
                    </button>

                </div>

            </div>
        </>
    );
}

export default Produktet;
