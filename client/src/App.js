import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stations: []
    };
  }

  getDivvyBikes = () => {
    axios.get("/divvy").then(res => this.setState({ stations: res.data }));
  };

  componentDidMount() {
    this.getDivvyBikes();
    setInterval(this.getDivvyBikes, 5000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TEAM GO HOME PRESENTS!</h1>
          <h2>Divvy Bikes No One Takes</h2>
          <p>But seriously...these updates are faster than the Divvy web app</p>
          <table>
            <tbody>
              {this.state.stations.map((station, idx) => (
                <tr key={idx} style={{ borderBottom: "4px solid white" }}>
                  <td style={{ textAlign: "left", paddingRight: "500px" }}>
                    {station.name}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {station.available_bikes} bikes
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
