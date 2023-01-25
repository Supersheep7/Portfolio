import React from 'react';
import './Splash.css'
import { easeIn, easeInOut, easeOut, motion, spring, transform } from "framer-motion"
import { Link } from "react-router-dom"

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: -1
        }
    }


    render() {

            return (
                
                    
                <motion.div 
                key="Splash"
                initial={{opacity: 1 }} 
                animate={{opacity: 1 }} 
                exit={{ height: 0, bottom: "50%"}}
                transition={{ duration: 0.8, ease: easeOut, type: spring, delay: 1 }} 
                className='Splash big-wrapper'>
                    
                    <motion.div 
                    key="Splash"
                    initial={{opacity: 1 }} 
                    exit={{  filter: ["blur(0px)", "blur(20px)"], opacity: [1, 0] }}
                    transition={{ duration: 0.6, ease: easeIn, type: spring, delay: 0.3 }} 
                    className='Splash big-wrapper byebye'>
                            <Content langHandleClick={this.props.langHandleClick}/>
                        
                    </motion.div>
                </motion.div>
                
               )
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
                <div className='lang-wrapper'>
                    <div onClick={() => {console.log("click"); this.props.langHandleClick("italiano"); this.props.goHandleClick(this.state.thisPage)}}>
                    <Link to="/0" className="first-link">
                    <img alt="ita" src="images/it.png"/>
                    </Link>
                    </div>
                    <div onClick={() => {this.props.langHandleClick("english"); this.props.goHandleClick(this.state.thisPage)}}>
                    <Link to="/0" className="first-link">
                    <img alt="eng" src="/images/uk.png"/>
                    </Link>
                    </div>
                </div>
            </div>
        )
        }
    }
}

export default Splash