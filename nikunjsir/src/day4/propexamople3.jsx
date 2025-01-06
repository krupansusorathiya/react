import React from "react";
import Mylist from "./propexample2";
import Mybutton from "./propexample1";

class Propexample3 extends React.Component {
  state = {
    var1: true,
    var2: "btn1",
    var3: ["a", "b", "c", "d", "e"], 
  };
  constructor(){
    super();
    setTimeout(()=>{
        this.setState({
            var1: false,
            var2: "btn2",
            var3: ["f", "g", "h", "i", "j"]
        })
    },4000);
  }

  render() {
    // Destructure state variables
    const { var1, var2, var3 } = this.state;

    return (
      <div>
        {/* Pass state variables as props */}
        <Mybutton prop1={var1} xyz={var2} />
        <Mylist item={var3} />
      </div>
    );
  }
}

export default Propexample3;