import * as React from "react";
import HomePage from './components/homePage';
//import logo from './Logo.png';
//import title from './Picture1.png';
const request = require('superagent');
export class Index extends React.Component {
  render() {
    return (
      
        <div className="container">
          <div id="header">
            <div className="App-Logo">
            </div>
          </div>
        </div>
    )
  }
}
export default class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			currentPage : "homePage"
		}
		this.changeCurrentPage = this.changeCurrentPage.bind(this);
	}

	changeCurrentPage(newPage : string) {
		this.setState({currentPage : newPage});
	}
    render() {
    	const {currentPage} = this.state;
        return (
        	<div>
        		<div>
		            <h1>Logo & Slogan</h1>
		        </div>
		        <div>
		        	<HomePage/>
		        </div>
        	</div>
        );
    }
}
