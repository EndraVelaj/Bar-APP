
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./routes";

ReactDOM.render(<Router> <Routes /> </Router> , document.getElementById('root'));
