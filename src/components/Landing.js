import React from 'react';
import "./Landing.css"
import { easeOut, motion, spring } from "framer-motion"
import { Link } from "react-router-dom"

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 0
        }
    }

    render() {
  
        if (this.props.previousPage > this.state.thisPage &&
            this.props.previousPage !== 3) return (
            <div>
                <Link to={`/3`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>
                    <div className='switch-wrapper switch-left'>  
                        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                        fill="currentColor"/>
                        </svg>
                    </div>
                </Link>
                <motion.div 
                key="Landing"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
                exit={{x: 0 }}
                className='Landing big-wrapper'>
                    <Content />
                </motion.div>
                <Link to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>                    
                    <div className='switch-wrapper switch-right'>
                            <svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                            fill="currentColor"/>
                            </svg>
                    </div>
                </Link>
            </div>
        )

        else if (this.props.previousPage === -1) {
            return (
                <div>
                    <Link to={`/3`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>
                        <div className='switch-wrapper switch-left'>  
                            <svg width="84" height="84" viewBox="0 0 24 24" fill="none" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                            fill="currentColor"/>
                            </svg>
                        </div>
                    </Link>
                    <motion.div 
                    key="Landing" 
                    initial={{x: 0 }} 
                    animate={{x: 0 }} 
                    transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
                    exit={{x: 0 }}
                    className='Landing big-wrapper'>
                        <Content />
                    </motion.div>
                    <Link to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>                    
                        <div className='switch-wrapper switch-right'>
                                <svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                                fill="currentColor"/>
                                </svg>
                        </div>
                    </Link>
                </div>
            )
        }

    else return (
        <div>
            <Link to={`/3`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>
                <div className='switch-wrapper switch-left'>  
                    <svg width="84" height="84" viewBox="0 0 24 24" fill="none" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                    fill="currentColor"/>
                    </svg>
                </div>
            </Link>
            <motion.div 
            key="Landing"
            initial={{x: "100%" }} 
            animate={{x: 0 }} 
            transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
            exit={{x: 0 }}
            className='Landing big-wrapper'>
                <Content />
            </motion.div>
            <Link to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>                    
                <div className='switch-wrapper switch-right'>
                    <svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                    fill="currentColor"/>
                    </svg>
                </div>
            </Link>
        </div>
    )
    }

}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return (
            <motion.div 
            key="Landing-content-wrapper" 
            initial={{opacity: 1 }} 
            animate={{opacity: 1 }} 
            transition={{ duration: 0.8, ease: easeOut, type: spring }} 
            exit={{opacity  : 1 }}
            className="Landing-content-wrapper">
                <div className="picandbio fade-in-top">
                    <div className='Propic-wrapper'>
                        <div className="clipping-mask">
                            <img className="Propic" src="images/propic.jpg"/>
                        </div>
                    </div> 
                    <div className='Bio glass'></div>
                </div>
                <div className='Landing-right'>
                <div className="Landing-big-content glass swing-in-top-fwd">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div> 
                <div className="Competences-wrapper"> 
                    <div className="Stack glass swing-in-top-fwd" style={{ animationDelay: "2.5s" }}>
                        <img className='mongodb' alt='mongodb' src="/images/mongodb.png"/>    
                        <img className='express' alt='express' src="/images/express.png"/>    
                        <img className='react' alt='react' src="/images/react.png"/>    
                        <img className='node' alt='node' src="/images/node.png"/>        
                    </div> 
                    <div className="Small-competences-wrapper"> 
                        <Glass n="1"  className='js'/>
                        <Glass n="2"  className='jquery'/>
                        <Glass n="3"  className='redux'/>
                        <Glass n="4"  className='sass'/>
                        <Glass n="5"  className='python'/>
                        <Glass n="6"  className='django'/>
                        <Glass n="7"  className='postgresql'/>
                        <Glass n="8"  className='mysql'/>
                    </div> 
                </div> 
            </div>
                <div className="Landing-bg-img-wrapper">
                    <img className="Landing-bg-img" src="./images/linesmooth.png" />
                </div>
            </motion.div>
        )
    }
}

function Glass(props) {
    return (
        <div className='glass swing-in-top-fwd' style={{ animationDelay: `${1000 + props.n*150}ms` }}>
            <img className={props.className} alt={props.className} src={`/images/${props.className}.png`}/>
        </div>
    )
}

export default Landing