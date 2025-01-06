import React from "react";
 
const Mycustbutton =({ var1, var2 }) => (
<button disabled={var1}>{var2}</button>);

Mycustbutton.defaultPorps ={
    var1:false,
    var2:"default button text"
}
export default Mycustbutton;