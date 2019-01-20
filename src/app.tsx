import * as React from "react";
import HomePage from './components/homePage';
import ConfirmationPage from './components/confirmationPage';
//import logo from './Logo.png';
//import title from './Picture1.png';
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
          <HomePage/>
        );
    }
}

(() => {

})()