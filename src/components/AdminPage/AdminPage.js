import React from "react";
import styles from "./AdminPage.module.css";
import { useEffect } from "react";
// import { decode } from "jsonwebtoken";
import { useHistory } from 'react-router-dom';
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const AdminPage = () => {


    let history = useHistory();


    useEffect(() => {
        
        const token = localStorage.getItem("token");
        // const decodedToken = decode(token); 

        if (!token) {
           logout();
        }
        // else if (decodedToken.exp * 1000 < Date.now()) {
        //     console.log("decoded token----------", decodedToken);
        //     localStorage.removeItem("token");
        //     history.push("/");
        //     console.log("Seasson expired!!!!!!!!");
        // }

    });

    const homepage = () => {

        history.push(`/mainPage`);

       
    }
    const userTable = () => {
        history.push(`/users`);
    }

    const salesTable = () => {

        history.push(`/products`);
    }

    const logout = () => {
        history.push("/");
        localStorage.removeItem("token");
    }

    return (

        <div className="product-form">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Button color="inherit" onClick={homepage}> HomePage </Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome to AdminPage!
                        </Typography>
                        <Button color="inherit" onClick={logout}> LogOut </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <div> <p> </p> </div>

            <div className={styles.tabelat}>

                <div className={styles.container}>
                    <img src="/assets/homepage.png" className={styles.image} alt="products" />
                    <div className={styles.middle}>
                        <button type="button" className={styles.button} onClick={homepage}> HomePage </button>
                    </div>
                </div>
                <div className={styles.container}>
                    <img src="/assets/users.png" className={styles.image} alt="products" />
                    <div className={styles.middle}>
                        <button type="button" className={styles.button} onClick={userTable}> Users </button>
                    </div>
                </div>
            

                <div className={styles.container}>
                    <img src="/assets/products.png" className={styles.image} alt="products" />
                    <div className={styles.middle}>
                        <button type="button" className={styles.button} onClick={salesTable}> Products </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminPage;