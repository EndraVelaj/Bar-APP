import React from "react";
import {  useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
// import { decode } from "jsonwebtoken";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";


import water from '../MainPage/water.jpg';
import burger from '../MainPage/burger.jpg';
import beers from '../MainPage/beers.jpg';
import coffee from '../MainPage/coffee.jpg';
import vodka from '../MainPage/vodka.webp';
import cola from '../MainPage/cola.jpg';

const MainPage = () => {

    let history = useHistory();
    const uri = "http://localhost:8080/get-products";
    const [result, setResult] = useState([]); 
    const itemData = [  { img: water,  }, { img: vodka, }, {  img: burger, }, { img: beers, }, {  img: coffee,  }, {  img: cola, } ];

    const token = localStorage.getItem("token");
    console.log("this is token-----", token)

    if(!token) {
       history.push("/");
   }

    // const decodedToken = decode(token); 
    // else if (decodedToken.exp * 1000 < Date.now()) {
    //     console.log("decoded token----------", decodedToken);
    //     localStorage.removeItem("token");
    //     history.push("/");
    //     console.log("Seasson expired!!!!!!!!");
    // }

   useEffect(()=> {
            fetch(`${uri}`)
            .then (response => response.json())
            .then ((data) => {
                setResult(data.result)
            })
    }, [])

    const logout = () => {
        localStorage.removeItem("token");
        history.push("/");
        console.log("User is logged OUT!");
    }

    const buyProduct = () => {
    }

    const adminPage = () => {

        history.push(`/adminPage`);
    }


    return (
            <div>
                 <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Button color="inherit" onClick={adminPage}> Admin Page </Button> 
                    {}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            Welcome to HomePage!
                        </Typography>
                        <Button color="inherit" onClick={logout}> LogOut </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <div> <p> </p> </div>

                <ImageList sx={{ margin:'auto' ,width: "50%", height: "auto" , alignContent:"center"}}>
                    <ImageListItem key="Subheader" cols={2}>
                    </ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${result.source}`}
                                srcSet={`${result.source}`}
                                alt={result.name}
                                loading="lazy"
                            />
                            <ImageListItemBar 
                                name={result.name}
                                price={result.price}
                                actionIcon={
                                    <IconButton onClick={buyProduct}
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${result.name}`}
                                    >
                                        <ShoppingCartIcon  />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </div>
    );
}



export default MainPage;