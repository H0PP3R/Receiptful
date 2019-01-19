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
  async onImage(event) {
    await this.setState({
      loading: true
    });
    event.preventDefault();
    const input = event.currentTarget;
    console.log(input.files);
    let file = input.files[0];
    this.processImage(file);
  }
  async processImage(file) {
    const req = request
    .post('TBC')
    .set("Accept", "application/json")
    .set("Content-type", "multipart/form-data");
    const res = await req.send(file);
    const response = JSON.parse(res.text);
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

          <div>
              <h2>Upload your photo:</h2>
          </div>

          <div>
            <input onChange={this.onImage}
                className="hidden"
                id="camera"
                type="file"
                accept="image/*"
                capture
                ref="fileInput"/>
          </div>
        </div>
        <div>
          {
            (this.state.loading)?
              <Spinner name="ball-beat" color="steelblue"/>            :
              null
          }
        </div>
      </div>
    );
  }
}