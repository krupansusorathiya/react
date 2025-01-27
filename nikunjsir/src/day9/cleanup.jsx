import { useEffect, useState } from "react";
import { Promise } from "bluebird";
Promise.config({cancellation: true});
const fetchuser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 35,
        name: "krupansh",
      });
    }, 5000);
  });
};
const Cleanup = () => {
  const [id, setid] = useState("loading....");
  const [name, setname] = useState("loading....");
  useEffect(() => {
    const promise = fetchuser().then((var1) => {
      setid(var1.id);
      setname(var1.name);
    });
    return () => {
      promise.cancel(); // Cancel the promise when cleanup function is called
    };
  }, []);

  return (
    <div>
      <h1>User Id : {id}</h1>
      <h1>User Name : {name}</h1>
    </div>
  );
};

export default Cleanup;