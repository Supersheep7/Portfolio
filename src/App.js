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

  preloadImages() {
    var img1 = new Image()
    var img2 = new Image()
    var img3 = new Image()
    var img4 = new Image()
    img1.src = "/images/Landing.jpg"
    img2.src = "/images/elk.jpg"
    img3.src = "/images/Wordpress.jpg"
    img4.src = "/images/night.jpg"
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
  
  componentDidMount() {
    this.preloadImages()
}

}

  

export default App;
