import React, { useState, useEffect } from 'react';
import './products.module.css';
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';


function ProductTable() {

    const [result, setResult] = useState([]);
    const uri = "http://localhost:8080/get-products";
    let history = useHistory();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [source, setSource] = useState('');


    const nameChange = (event) => {
        setName(event.target.value);
    }

    const priceChange = (event) => {
        setPrice(event.target.value);
    }

    const amountChange = (event) => {
        setAmount(event.target.value);
    }

    const sourceChange = (event) => {
        setSource(event.target.value);
    }


    const [openModal, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'aliceblue',
        border: '2px solid #000',
        boxShadow: 24,
        p: 8,
    };
    const textFieldStyle = { margin: '8px 0' }
    const btnStyle = { margin: '10px auto', backgroundColor: 'SteelBlue', padding: "10px", textalign: "center", width: "100%" }

    useEffect(() => {
        fetch(`${uri}`)
            .then(response => response.json())
            .then((data) => {
                setResult(data.result)
            })
    }, [])

    const goBack = () => {
        history.push(`/AdminPage`);
    }

    const logout = () => {
        history.push("/");
        localStorage.removeItem("token");
    }


    const deleteProduct = (id) => {
        fetch(`http://localhost:8080/delete-product/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => setResult(previosState => {
                const newArr = previosState.filter(item => {

                    return item._id !== data._id;

                })
                return newArr;
            }));
    }

    const addProduct = (event) => {

        // event.preventDefault();

        fetch('http://localhost:8080/save-product', {
            method: 'POST',
            headers: { "Content-Type": "application/json", 'Authorization': 'token' },
            body: JSON.stringify({
                name: name,
                price: price,
                amount: amount,
                source: source
            })
        })
            .then(response => response.json())

            .then((response) => {

                history.push(`/products`);


            })
    }

    return (

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={goBack}> <KeyboardBackspaceOutlinedIcon /> back </Button>
                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            These are all products!
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}> <AddOutlinedIcon /> ADD PRODUCT </Button>
                        <Modal
                            open={openModal}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h6">
                                    Add PRODUCT
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                    Please, fill the form to add the product.
                                </Typography>

                                <TextField label='Product Name' type="text" placeholder='name..' fullWidth style={textFieldStyle} onChange={nameChange} required />
                                <TextField label='Product Price' type="number" placeholder='price..' fullWidth style={textFieldStyle} onChange={priceChange} required />
                                <TextField label='Amount' type="number" placeholder='amount.. ' fullWidth style={textFieldStyle} onChange={amountChange} required />

                                <TextField label='Image' type="string" placeholder='Set image source..' fullWidth style={textFieldStyle} onChange={sourceChange} required />

                                <Button color="inherit" onClick={addProduct} style={btnStyle}> <AddOutlinedIcon /> ADD </Button>
                            </Box>
                        </Modal>


                        <Button color="inherit" onClick={logout}> Log Out </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <div> <p> </p></div>

            <table>
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Amount </th>
                        <th> Image Source </th>
                        <th> Delete Product </th>
                    </tr>
                    {result.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.amount}</td>
                                <td>{data.source}</td>
                                <td> <button type="submit" onClick={() => deleteProduct(data._id)}> Delete </button> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ProductTable;
