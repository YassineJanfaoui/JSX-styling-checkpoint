import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box extends Component {
    render() {
        const name = {
            textAlign:'center',
            color: 'white'
         }
         const des = {
            marginLeft:"15px",
            textAlign:"center",
            color:"white"
         }
         const button={
            marginLeft:"85px"
         }
        return (
            <div className="box">
                <p style={name}>{this.props.name}</p><br/>
                <p style={des}>  {this.props.des}</p><br/>
                <button style={button}>Savoir plus</button>
            </div>);
    }
}

export default Box;