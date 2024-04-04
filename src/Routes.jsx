import { BrowserRouter , Routes , Route } from "react-router-dom";
import React from "react";
import HomePage from "./homepage";
import Browse1 from "./browse1";
import SignUp from "./signup";
import  ReactDOM  from "react";
import BigPage from "./BigPage.jsx";
import HomePageBig from "./HomePageBig.jsx";
import BigPage2 from "./Bigpage2.jsx"
import BigPage3 from "./BigPage3.jsx"
import SignIn from "./signin.jsx";
import Community1 from "./chat.js";
import MainPageInfo from "./mainpageinfo.jsx";


function Route1(){
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageBig/>}/>
            <Route index element={<HomePageBig/>} />
            <Route path="browse1" element={<BigPage/>} />
            <Route path="browse2" element={<BigPage2/>} />
            <Route path="browse3" element={<BigPage3/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="home" element={<HomePageBig/>} />
            <Route path="/chat" element={<Community1/>} /> 
            <Route path="/more1" element={<MainPageInfo/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default Route1;