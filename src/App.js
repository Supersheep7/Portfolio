import AnimatedRoutes from './components/AnimatedRoutes';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousPage: null,
      thisPage: 0
    }
  }

  goHandleClick(i) {
    this.setState({
      previousPage: i
    })
  }

  whatPage(i) {
    this.setState({
      thisPage: i
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <AnimatedRoutes previousPage={this.state.previousPage} thisPage={this.state.thisPage} whatPage={this.whatPage.bind(this)} goHandleClick={this.goHandleClick.bind(this)}/>
        </Router>
  </div>
    );
  }
}

  

export default App;
