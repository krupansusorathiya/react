import {usestate} from "react";
function Stateexample1 (){
    const [name] = usestate("rku");
    return <div>{name}</div>;
}
export default Stateexample1;