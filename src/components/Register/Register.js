import { useState } from "react";
import "./Register.css";
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, Button, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Image from '../LogIn/bcg.jpg'

const Register = () => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameChange = (event) => {
        setName(event.target.value);
    }

    const emailChange = (event) => {
        setEmail(event.target.value);
    }
    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const backgroundContainer = { backgroundImage: `url(${Image})`, padding: 5, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }
    const paperStyle = { align: 'center', padding: 57, height: '40vh', width: 400, margin: " 232px auto" }
    const avatarStyle = { backgroundColor: 'SteelBlue' }
    const textFieldStyle = { margin: '8px 0' }
    const btnStyle = { margin: '8px 0', backgroundColor: 'SteelBlue' }
    let history = useHistory();


    const submitHandler = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/register-user', {
            method: 'POST',
            headers: { "Content-Type": "application/json", 'Authorization': 'token' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        })
            .then((response) => {

                return response.json()
            })
            .then((response) => {

                history.push(`/`);


            })
    }

    return (

        <div style={backgroundContainer}>
            <Grid >
                <Paper elevation={5} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}> <LoginIcon /> </Avatar>
                        <h2> ---- SIGN UP ----</h2>
                    </Grid>
                    <Grid>
                        <TextField label='Username' placeholder='Enter username..' fullWidth onChange={nameChange} style={textFieldStyle} required />

                        <TextField label='Email' placeholder='Enter email..' fullWidth onChange={emailChange} style={textFieldStyle} required />

                        <TextField label='Password' placeholder='Enter password..' fullWidth onChange={passwordChange} type="password" style={textFieldStyle} required />
                        {password.length > 3 ? <div> Password is ok! </div> : <div> {null} </div>}

                        <Button type='submit' color='primary' fullWidth variant="contained" onClick={submitHandler} style={btnStyle}> SIGN UP </Button>

                    </Grid>
                </Paper>
            </Grid>

        </div>
    );
}

export default Register;