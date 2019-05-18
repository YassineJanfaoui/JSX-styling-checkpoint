import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photo from "./photo.png";
import yahya from "./yahyabouhlel.jpg"
import amine from "./aminebouhlel.jpg"
import Box from './components/box';
import Box2 from './components/box2';
import picture from "./blackbackground.jpg";
import sfax from "./sfax.jpg";
import tunis from"./tunis.jpg";
import sousse from "./Sousse.JPG";


class App extends Component {
  render() {
    return (

      <div>
        <h2>Nos Programmes</h2><br/>
        <div className="programmes" style={{marginRight: "25px", marginLeft:"25px",zIndex:"1",position:"relative"}}>
        <img src={picture} style={{position:"absolute",marginTop:"50px",zIndex:"-1",width:"100%",height:"650px"}}/>
        <div style={{backgroundColor : "grey",width:"25%",height:"450px"}}>
          <Box name="FULL TIME PROGRAM" des="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque dolor esse repellat, quos maxime totam quam ipsa deserunt.
          loremloremloremloremloremloremloremloremloremloremloremloremloremlor" />
          </div>
          <div style={{backgroundColor : "blue",width:"25%",height:"450px"}}>
          <Box name="PART TIME PROGRAM" des="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Itaque dolor esse repellat, quos maxime totam quam ipsa deserunt.
          loremloremloremloremloremloremloremloremloremloremloremloremloremlo" />
          </div>
          <div style={{backgroundColor : "tomato",width:"25%",height:"450px"}}>
          <Box name="KIDS CODING PROGRAM" des="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque dolor esse repellat, quos maxime totam quam ipsa deserunt.
          loremloremloremloremloremloremloremloremloremloremloremloremloremlor" />
          </div>
          <div style={{backgroundColor : "darkblue",width:"25%",height:"450px"}}>
          <Box name="SUMMER ACADEMY" des="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque dolor esse repellat, quos maxime totam quam ipsa deserunt.
          loremloremloremloremloremloremloremloremloremloremloremloremloremlore" />
       </div>
      
       </div>
       <div style={{marginLeft:"50px"}}>
         <h1 style={{zIndex:"1",position:"absolute",color:"white"}}>Quelques Chiffres:</h1><br/><br/>
         <div style={{display:"flex",justifyContent:"space-between"}}>
         <div style={{width:"25%"}}>
         <Box2 name="+20,000 " desc="passiones du digital"/>
         </div>
         <div style={{width:"25%"}}>
         <Box2 name="+50 " desc="speakers"/>
         </div>
         <div style={{width:"25%"}}>
         <Box2 name="+3 " desc="instructeurs game et mobile"/>
         </div>
         <div style={{width:"25%"}}>
         <Box2 name="+300 " desc="produits developpes"/>
         </div>
         </div>
       </div>
       <div className="lieux">
       <h1 style={{marginTop:"150px",marginLeft:"450px"}}>Ou se passent les sessions?</h1><br/>
       <p style={{fontSize:"2em",marginLeft:"50px",color:"grey"}}>Les sessions se passent dans les Hackerspaces de GoMyCode dans les villes suivantes:</p>
       <div className="Images">
         <div>
         <img src={tunis} style={{width:"350px",height:"250px"}}/>
         <p style={{textAlign:"center",fontWeight:"bold",fontSize:"1.5em"}}>Tunis</p>
         </div>
         <div>
         <img src={sfax} style={{width:"350px",height:"250px"}}/>
         <p style={{textAlign:"center",fontWeight:"bold",fontSize:"1.5em"}}>Sfax</p>
         </div>
         <div>
         <img src={sousse} style={{width:"350px",height:"250px"}}/>
         <p style={{textAlign:"center",fontWeight:"bold",fontSize:"1.5em"}}>Sousse</p>
         </div>
       </div>
       </div>
       
      </div>

    );
  }
}

export default App;
