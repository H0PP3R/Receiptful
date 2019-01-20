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
    if (value) {
      const req = request
      .post('http://172.20.3.203:3000/api/monzo/receipt')
      .set("Accept", "application/json")
      .set("Content-type", "application/json");
      const res = await req.send(JSON.stringify(this.props.receiptData));
      location.reload();
    } else {
      if (confirm("Do you want to try again?")) {
        location.reload();
      }
    }
  }
  tryAgain() {

  }
  render() {
    return (
      <div>
        <div>
          {
            this.props.receiptData.map((item, key) => {
              return <p key={key}>{item.name}&nbsp;&nbsp;{item.price}</p>
            })
          }
        </div>
        <h2>Is this accurate?</h2>
        <div>
          <div>
            <button onClick={() => this.send(true)}>Yes</button>
          </div>
          <div>
            <button onClick={() => this.send(false)}>No</button>
          </div>
        </div>
      </div>
    );
  }
}