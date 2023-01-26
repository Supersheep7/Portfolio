import AnimatedRoutes from './components/AnimatedRoutes';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousPage: null,
      thisPage: 0,
      language: "english"
    }
  }

  langHandleClick(lang) {
    this.setState({
      language: lang
    })
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
          <AnimatedRoutes langHandleClick={this.langHandleClick.bind(this)} language={this.state.language} previousPage={this.state.previousPage} thisPage={this.state.thisPage} whatPage={this.whatPage.bind(this)} goHandleClick={this.goHandleClick.bind(this)}/>
        </Router>
  </div>
    );
  }

}

  

export default App;
