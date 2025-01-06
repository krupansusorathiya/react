import { useState } from "react";

function hookexample() {
    const {name} = useState("hello");
    return <h1>{name}</h1>
}

export default hookexample;