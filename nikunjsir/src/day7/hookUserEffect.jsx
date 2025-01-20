import * as React from 'react';

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Krupansu", age: 20 });
    }, 5000);
  });
}

function ApiSimulation() {
  const [name, setName] = React.useState('loading...');
  const [age, setAge] = React.useState('loading...');
  const [x, setx] = React.useState(300);
  const [mm, setMM] = React.useState(0);
  const [ss, setss] = React.useState(0);
  

  React.useEffect(() => {
    fetchUserData().then((data) => {
      setName(data.name);
      setAge(data.age);
    });
  }, []); 

  setInterval(() => {
    setx(x-1);
    if(x==0) setx(300);
    setMM(Math.trunc(x/60));
    setss(x%60);
  }, 1000);


  return (
    <div>
      <h1>Name: {name}</h1>
      <br />
      <h1>Age: {age}</h1>
      <br />
      {mm} : {ss}
    </div>
  );
}

export default ApiSimulation;
