import React, { Component } from 'react';
import { withRouter, Route, Switch, BrowserRouter,} from 'react-router-dom';
import routes from './routes';
import './App.css';
import NonFiction from './components/Nonfiction/NonFiction';
import Fiction from './components/Fiction/Fiction';
import Children from './components/children/Children';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        {/* <Fiction></Fiction> */}
        <NonFiction></NonFiction>
        {/* <Children></Children> */}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
