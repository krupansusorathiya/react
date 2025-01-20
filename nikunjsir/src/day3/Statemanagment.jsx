import React from "react";
class Statemanagment extends React.Component {
    state = {
        first:true,
        secound : 3.14,
        third : "hello world",
        fourth : "red",
        fifth : "green",
        
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({
                first:true,
                secound : 4.28,
                third : " world",
                fourth : "blue",
                fifth : "purple",
            });  
       
        }, 3000);
    }
    render() {
        const {first,secound,third, fourth,fifth} = this.state;
        return (
            <div>
                <button disabled={first}>my button</button>
                <p style={{color: fourth}}> value of float variable is <strong> {secound}</strong></p>
                <p style={{color : fifth}}>value of string variable is <strong> {third}</strong></p>
            </div>
        );
    }
}

export default Statemanagment;