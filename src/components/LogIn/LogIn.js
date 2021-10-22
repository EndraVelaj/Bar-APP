import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, Button, TextField } from "@mui/material";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography } from "@mui/material";
import Image from '../LogIn/bcg.jpg';

const LogIn = () => {

    let history = useHistory();
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    // const [role, setRole] = useState();

    const backgroundContainer = { backgroundImage: `url(${Image})`, padding: 5, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }
    const paperStyle = { align: 'center', padding: 57, height: '40vh', width: 400, margin: " 232px auto" }
    const avatarStyle = { backgroundColor: 'SteelBlue' }
    const textFieldStyle = { margin: '8px 0' }
    const btnStyle = { margin: '8px 0', backgroundColor: 'SteelBlue' } 
    const linkStyle = { margin: '50px 0' }


    const EmailChange = (event) => {
        setEmail(event.target.value);
    };

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const SubmitHandler = (event) => {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'token'
            },
            body: JSON.stringify({
                email: email,
                password: password

            })
        }

        fetch('http://localhost:8080/login-user', options)
            .then(response => response.json())
            .then((response) => {
                console.log("Be response-----", response);

                if (response.data.adminUser) {

                        console.log("Admin is logged in!");
                        setIsAuth(true);
                        // setRole("admin");

                        localStorage.setItem("token", `${response.adminToken}`);

                    history.push("/adminPage")
                    console.log("Is auth: =============", isAuth);


                }
                     else if (response.data.loginUser) {
                        console.log("User is successfuly logged in!");
                        setIsAuth(true);
                        // setRole("user");

                        localStorage.setItem("token", `${response.userToken}`);
                        history.push("/mainPage")
                        console.log("Is auth: =============", isAuth);

                    }

                else {
                    setIsAuth(false);
                    alert("You are not registered! Please SIGN UP !");
                    console.log("Is auth: =============", isAuth);
                }

            })
            .catch((error) => {
                return (error);
            });
    }


    return (
        <div style={backgroundContainer}>
            <Grid >
                <Paper elevation={5} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}> <LockOutlinedIcon /> </Avatar>
                        <h2> ---- LogIN ----</h2>
                    </Grid>
                    <Grid>
                        <TextField label='Email' placeholder='Enter email..' fullWidth onChange={EmailChange} value={email} style={textFieldStyle} required />

                        <TextField label='Password' placeholder='Enter password..' fullWidth onChange={PasswordChange} value={password} type="password" style={textFieldStyle} required />
                        {password.length > 3 ? <div> Password is ok! </div> : <div> {null} </div>}

                        <Button type='submit' color='primary' fullWidth variant="contained" onClick={SubmitHandler} disabled={!email || !password} style={btnStyle}> Log IN </Button>

                        <Typography style={linkStyle}> If you don't have an account, please
                            <Link to="/register"> SIGN UP </Link> !
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>

        </div>

    );

}

export default LogIn;