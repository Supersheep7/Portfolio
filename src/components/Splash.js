import React from 'react';
import { easeOut, motion, spring } from "framer-motion"
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
                transition={{ duration: 0.4, ease: easeOut, type: spring }} 
                className='Splash big-wrapper'>
                    
                    <motion.div 
                    key="Splash"
                    initial={{opacity: 1 }} 
                    animate={{opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: easeOut, type: spring }} 
                    className='Splash big-wrapper'>
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