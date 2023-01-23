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
                <Link to="/0" onClick={() => this.props.goHandleClick(this.state.thisPage)} className="first-link">
                    
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
                    animate={{opacity: 1 }} 
                    exit={{ opacity: 0, transform: "translateY(50%)" }}
                    transition={{ duration: 0.6, ease: easeIn, type: spring, delay: 0.3 }} 
                    className='Splash big-wrapper byebye'>
                            <Content />
                        
                    </motion.div>
                </motion.div>
                
                </Link>
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
            <h1>Hello, World!</h1>
        )
        }
    }
}

export default Splash