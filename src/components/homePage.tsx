import * as React from "react";
const request = require('superagent');
import './homePage.css';
const Spinner = require('react-spinkit');
import ConfirmationPage from './confirmationPage';

export default class HomePage extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      file : "",
      loading : false,
    }
    this.onImage = this.onImage.bind(this);
  }
  onImage(event) {
    event.preventDefault();
    const input = event.currentTarget;
    console.log(input.files);
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
    console.log(response);
    // if (!!response) {
    //   this.setState({
    //     loading : false
    //   });
    //   <ConfirmationPage/>;
    // }
  }
  render() {
    return (
      <div>
        <div>
          <input onChange={this.onImage}
              className="hidden"
              id="camera"
              type="file"
              accept="image/*"
              capture
              ref="fileInput"/>
        </div>
        {
          (this.state.loading)?
            <Spinner name="ball-beat" color="steelblue"/>
           :
            null
        }
      </div>
    );
  }
}