import React from 'react'
import '../Css/Homescreen.css'
import Background from '../Components/Background'
import Logo from '../Assets/TextLogo.svg'
import Button from "../Components/Button";
import { useHistory } from 'react-router-dom';

const Homepage = () => {
    const history = useHistory();
    return (
        <>
            <Background/>
            <div id={"HomeScreen"}>
                <div id={"Container"}>
                    <div id={"Toolbar"}>
                        <img id={"Logo"} src={Logo} alt={"Mapit"}/>
                        <div className={"ButtonGroup"}>
                            <Button title={"About Us"} textColor={"white"} variant={"Text"}/>
                            <Button title={"Help"} textColor={"white"} variant={"Text"}/>
                            <Button title={"Login"} className={"ButtonEffect"} textColor={"white"} variant={"Outlined"}/>
                        </div>
                    </div>
                    <div id={"Slogan"}>
                        Let the route be our problem
                    </div>
                    <div id={"SubSlogan"}>
                        Build and distribute maps for buildings
                    </div>
                    <Button className={"ButtonEffect"} style={{margin: 'auto', marginTop: '230px'}}
                            title={"Start Building"} textColor={"#055EFF"}
                            color={"white"} variant={"Contained"} textSize={"22px"}
                            onClick={() => history.push("/build")}
                    />
                </div>
            </div>

        </>
    )
}

export default Homepage
