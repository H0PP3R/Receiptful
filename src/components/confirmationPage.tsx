import * as React from "react";
import HomePage from "./homePage";
const request = require('superagent');

export default class ConfirmationPage extends React.Component<any,any> {
  constructor(props) {
  super(props);
  this.state = {
  }
  this.send = this.send.bind(this);
  }
  async send(value : boolean) {
    const req = request
    .post('TBC')
    .set("Accept", "application/json")
    .set("Content-type", "application/json");
    const res = await req.send(value.toString());
  }
  render() {
    return (
      <div>
        <div>
            <h2>Results:</h2>
        </div>

        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg"/>
        </div>
        <div>
          <h2>Is this accurate?</h2>
        </div>

        <div>
          <div>
          <button onClick={() => this.send(true)}>Yes</button>

          </div>
          <div>
            <button onClick={() => this.send(false)}>No</button>
          </div>
        </div>

        <div>
          For processing the yes or no thing.
        </div>
      </div>
    );
  }
}