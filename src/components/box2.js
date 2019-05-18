import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box2 extends Component {
    render() {
        const name={
            zIndex:"1",
            position:"relative",
            fontSize:"1.5em",
            color:"white"
        }
        const desc={
            zIndex:"1",
            position:"absolute",
            fontSize:"1.5em",
            color:"white"
        }
        return (
            <div className="box2">
                <p style={name}>{this.props.name}</p>
                <p style={desc}>{this.props.desc}</p>
            </div>);
    }
}

export default Box2;