import React, { useState, useEffect } from 'react';
import './users.module.css';
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


function UserTable() {

    const [result, setResult] = useState([]);
    const uri = "http://localhost:8080/get-users";
    let history = useHistory();
    

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


    const deleteUser = (id) => {
        fetch(`http://localhost:8080/delete-user/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => setResult(previosState => {
                const newArr = previosState.filter(item => {
                   
                    return item._id !== data._id;
                    
                })
                console.log("stili andit", newArr)
                return newArr;
            }));
    }

    return (

        <div style={{ alignContent: "center" }}>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={goBack}> <KeyboardBackspaceOutlinedIcon /> back </Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        These are the registered users!
                        </Typography>
                        <Button color="inherit" onClick={logout}> LogOut </Button>
                    </Toolbar>
                </AppBar>
            </Box>

          <div> <p> </p></div>

            <table>
                <tbody>
                    <tr>
                        <th> ID </th>
                        <th> Username </th>
                        <th> Email </th>
                        <th> Password </th>
                        <th> Role </th>
                        <th> Delete USER </th>
                    </tr>
                    {result.map((data, index) => {

                        return (

                            <tr key={index}>
                                <td>{data._id}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <td>{data.role}</td>
                                <td> <button type="submit" onClick={() => deleteUser(data._id)}>  Delete </button> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default UserTable;
