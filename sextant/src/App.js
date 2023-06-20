import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPAddressDisplay from "./IPAddressDisplay";
import NetLatency from "./NetLatency";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Public IPv4 Address">
          <IPAddressDisplay url="https://api.ipify.org?format=json" />
        </Exhibit>
        <Exhibit name="Public IPv6 Address">
          <IPAddressDisplay url="https://api64.ipify.org?format=json" />
        </Exhibit>
        <Exhibit name="Network Packet Latency">
          <NetLatency />
        </Exhibit>
      </div>
    );
  }
}

export default App;
