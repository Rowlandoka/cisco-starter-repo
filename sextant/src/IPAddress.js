import React, { useState, useEffect } from "react";

function IPAddress() {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Your IPv4 Address is</h1>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPAddress;
