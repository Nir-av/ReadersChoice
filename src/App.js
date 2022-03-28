import React, { Component } from 'react';
import { withRouter, Route, Switch, BrowserRouter,} from 'react-router-dom';
import routes from './routes';
import './App.css';
import BookUpload from './components/BookUpload/BookUpload';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <BookUpload></BookUpload>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
