//create a react pure fuctional component
//that will take email address as an input and
//print whether it is a valid email address



import { useState } from "react";

const Problem2 = () => {
  const [email, setemail] = useState("");
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter the Email Address"
        onChange={(e) => setemail(e.target.value)}
      />
      <div>
        <span>
            {email.includes("@") && email.includes(".") && email.length >= 5
             ? "Valid Email"
              : "Invalid Email"}
        </span>
      </div>
    </div>
  );
};

export default Problem2;

