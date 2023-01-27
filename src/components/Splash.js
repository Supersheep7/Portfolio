import React from 'react';
import './Splash.css'
import { easeIn, easeOut, motion } from "framer-motion"
import { Link } from "react-router-dom"

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: -1,
            windowWidth: window.innerWidth
        }
        this.updateSize = this.updateSize.bind(this);
    }

    updateSize() {
        this.setState({windowWidth: window.innerWidth});
      }

    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    render() {

            return (
                <div>
                {this.Touch() === false ? 
                (<motion.div 
                key="Splash"
                initial={{opacity: 1 }} 
                animate={{opacity: 1 }} 
                exit={{ height: 0, bottom: "50%"}}
                transition={{ duration: 0.8, ease: easeOut,  delay: 1 }} 
                className='Splash big-wrapper'>
                    <motion.div 
                    key="Splash"
                    initial={{ opacity: [0, 1] }}
                    animate={{opacity: 1 }} 
                    exit={{  filter: ["blur(0px)", "blur(20px)"], opacity: [1, 0] }}
                    transition={{ duration: 0.6, ease: easeIn, delay: 0.3 }} 
                    className='Splash big-wrapper byebye'>
                            <Content langHandleClick={this.props.langHandleClick}/>
                    </motion.div>
                </motion.div>) :
                (<div className="Splash big-wrapper"><Content langHandleClick={this.props.langHandleClick} goHandleClick={this.props.goHandleClick}/></div>)
                }
                </div>
               )
     }

    componentDidMount() {
    window.addEventListener("resize", this.updateSize);
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        if (this.props.previousPage === -1) return null
        else {
        return (
            <div className='splash-wrapper'>
                <h1>Ciao!</h1>
                <motion.div 
                key="lang"
                initial={{ opacity: [0, 1] }}
                animate={{opacity: 1 }} 
                exit={{  filter: ["blur(0px)", "blur(20px)"], opacity: [1, 0] }}
                transition={{ duration: 0.6, ease: easeIn, delay: 0.3 }} 
                className='lang-wrapper'>
                    <div onClick={() => {this.props.langHandleClick("italiano"); this.props.goHandleClick(-1)}}>
                        <Link to="/0" className="first-link">
                            <img alt="ita" src="images/it.png"/>
                        </Link>
                    </div>
                    <div onClick={() => {this.props.langHandleClick("english"); this.props.goHandleClick(-1)}}>
                        <Link to="/0" className="first-link">
                            <img alt="eng" src="/images/uk.png"/>
                        </Link>
                    </div>
                </motion.div>
            </div>
        )
        }
    }
}

export default Splash