import React from "react";
import {BrowserRouter} from 'react-router-dom';

//Route file
import Rout from "./Routes/Rout.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

//stylesheet
import './App.css';

//Fonts
import "./fonts/Provicali.ttf";
import "./fonts/Ranade-Regular.ttf";
import "./fonts/Chillax-Medium.ttf";
import "./fonts/GeneralSans-Regular.ttf";
import "./fonts/Satoshi-Regular.ttf";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Rout />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
