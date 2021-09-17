import Produktet from "./products";
import products from "../produktet.json";
import React from "react";

const MainPage = () => {


    return (
        <>

            <h2> Zgjidh nje produkt </h2>

            <div>
                {products.map((product, index) => {
                    return (

                        <Produktet
                            key={index}
                            id={product.id}
                            emri={product.emri}
                            cmimi={product.cmimi}
                            source={product.source}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default MainPage;