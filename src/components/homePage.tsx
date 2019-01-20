import * as React from "react";
const request = require('superagent');
import './homePage.css';
const Spinner = require('react-spinkit');
import App from '../app';
import ConfirmationPage from './confirmationPage';

export default class HomePage extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      file : "",
      loading : false,
      confirm : false,
    }
    this.onImage = this.onImage.bind(this);
  }
  onImage(event) {
    event.preventDefault();
    const input = event.currentTarget;
    let file = input.files[0];
    this.processImage(file);
  }
  async processImage(file) {
    const req = request
    .post('http://172.20.3.203:3000/api/image')
    .set("Content-Type", "application/octet-stream")
    .set("Access-Control-Allow-Origin", "*");
    const res = await req.send(file);
    const response = JSON.parse(res.text);
    this.setState({
      loading : false,
      confirm : true,
      receiptData : response,
    });
  }
  render() {
    return (
      <div>
      {
        (this.state.confirm)?
          <ConfirmationPage receiptData={this.state.receiptData}/>
         :
          <div className="container">
            <div>
              <label htmlFor={"camera"}>
              <div className = "btn">
                <h1> Upload a photo 
                </h1>
               </div>
             </label>
            </div>
              {
                (this.state.loading)?
                  <Spinner name="ball-beat" color="steelblue"/>            :
                  null
              }
              <input onChange={this.onImage}
                  className="hidden"
                  id="camera"
                  type="file"
                  accept="image/*"
                  capture
                  ref="fileInput"/>
          </div>
      }
    </div>
    );
  }
}