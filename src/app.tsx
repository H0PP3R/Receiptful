import * as React from "react";
import HomePage from './components/homePage';
<<<<<<< Updated upstream
import ConfirmationPage from './components/confirmationPage';
=======
>>>>>>> Stashed changes
const logo = require("../dist/logo.png");
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
      <div id="content">
        <div>
          <img src={logo} id="App-logo" alt="logo" />
	        </div>
      	<HomePage/>
    	</div>
    );
  }
}
