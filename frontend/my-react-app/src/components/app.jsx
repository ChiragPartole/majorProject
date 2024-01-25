import React from "react";
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import HomeOfficials from "./Home_officials.jsx";
import Map from "./MapComponent/Map.jsx";
import CitizenVer from "./CitizenVerifiction/CitizenVer.jsx";
import DisplayInfo from "./CitizenVerifiction/DisplayInfo.jsx";
import Login from "./Login/Login.jsx";
import OfficialNavbar from "./OfficialNavbar.jsx";

function App() {
    return (
        <div>
            <HomeOfficials/>            
            

            {/* 
            <DisplayInfo citizenInfo={true}/>
            <Map />
            <Header />
            <h1>Hello</h1>
            <Footer />
            */}
        </div>
    );
}

export default App;
