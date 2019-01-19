import * as React from "react";
const request = require('superagent');

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
    this.toggleLoading();
    const req = request
    .post('TBC')
    .set("Accept", "application/json")
    .set("Content-type", "multipart/form-data");
    const res = await req.send(file);
  }
  toggleLoading() {
    this.setState({loading : !this.state.loading});
  }
  render() {
    return (
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

        <div>
          {
            (this.state.loading)?
              <img src="http://chittagongit.com//images/loading-icon-transparent-background/loading-icon-transparent-background-19.jpg"/>
            :
              null
          }
        </div>
      </div>
    );
  }
}