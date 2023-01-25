import React from 'react';
import "./Landing.scss"
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
                    <Content delayed="0"/>
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
                        <Content delayed="1"/>
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
                <Content delayed="0"/>
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
            transition={{ duration: this.props.delayed + 0.8, ease: easeOut, type: spring }} 
            exit={{opacity  : 1 }}
            className="Landing-content-wrapper">
                <div className="picandbio fade-in-top small-none" style={{ animationDelay: this.props.delayed*1000 + 1000 + "ms" }}>
                        <div className='Propic-wrapper'>
                            <div className="clipping-mask">
                                <img className="Propic" src="images/propic.jpg"/>
                            </div>
                        </div>
                    <div className='Bio glass'>
                        <p>Alessandro Corona Mendozza</p>
                        <p>Bologna, via dei Bibiena 6</p>
                        <p>+39 339 545 2982</p>
                        <p>alessandro.corona.m@gmail.com</p>
                        <p>22/12/1993</p>
                        <div className='social'>
                            <img alt='facebook' src="/images/facebook.png"/>
                            <img alt='instagram' src="/images/instagram.png"/>
                            <img alt='telegram' src="/images/telegram.png"/>
                        </div>
                    </div>
                </div>
                <div className='Landing-right'>
                <div className='Bio small-yes'>
                <div className='Propic-wrapper'>
                            <div className="clipping-mask">
                                <img className="Propic" src="images/propic.jpg"/>
                            </div>
                        </div>
                <div className="name-and-social">
                    <h1>Alessandro Corona M<span className="mobile-none">endozza</span></h1>
                    <div className='social'>
                        <img alt='facebook' src="/images/facebook.png"/>
                        <img alt='instagram' src="/images/instagram.png"/>
                        <img alt='mail' src="/images/mail.png"/>
                        <img alt='phone' src="/images/telephone.png"/>
                    </div>
                </div>
                </div>
                <div className="Landing-big-content glass swing-in-top-fwd" style={{ animationDelay: this.props.delayed*1000 + 500 + "ms" }}>
                    <div className="about-wrapper">
                    <p>Ciao, sono Alessandro, uno <strong>sviluppatore web</strong> autodidatta. </p>
                       <p>Per maturare le mie prime competenze ho studiato i curriculum online di <strong>W3</strong>, <strong>CS50</strong>, <strong>freecodecamp</strong>, <strong>The Odin Project</strong>.</p>
                       <p>Finora ho lavorato in <strong>MERN</strong> stack per costruire web app scalabili con framework leggeri senza rinunciare ad usare React, la mia scelta per il frontend.</p>
                       <span className='tablet-none'><p>Implemento vanillaJS e jQuery laddove necessario; so scrivere in python e realizzare app su django/flask. Ho una buona comprensione generale dei database relazionali, anche se non li ho mai usati in un progetto personale.</p>
                    </span></div>
                    </div> 
                <div className="Competences-wrapper"> 
                    <div className="Stack glass swing-in-top-fwd" style={{ animationDelay: this.props.delayed*1000 + 2500 + "ms" }}>
                        <img className='mongodb' alt='mongodb' src="/images/mongodb.png"/>    
                        <img className='express' alt='express' src="/images/express.png"/>    
                        <img className='react' alt='react' src="/images/react.png"/>    
                        <img className='node' alt='node' src="/images/node.png"/>        
                    </div> 
                    <div className="Small-competences-wrapper"> 
                        <Glass n="1" delayed={this.props.delayed} className='js'/>
                        <Glass n="2" delayed={this.props.delayed} className='jquery'/>
                        <Glass n="3" delayed={this.props.delayed} className='redux'/>
                        <Glass n="4" delayed={this.props.delayed} className='sass'/>
                        <Glass n="5" delayed={this.props.delayed} className='python'/>
                        <Glass n="6" delayed={this.props.delayed} className='django'/>
                        <Glass n="7" delayed={this.props.delayed} className='postgresql'/>
                        <Glass n="8" delayed={this.props.delayed} className='mysql'/>
                    </div> 
                </div> 
            </div>
                <div className="Landing-bg-img-wrapper small-none">
                    <img className="Landing-bg-img" src="./images/linesmooth.png" />
                </div>
            </motion.div>
        )
    }
}

function Glass(props) {
    return (
        <div className='glass swing-in-top-fwd' style={{ animationDelay: `${props.delayed*1000 + 1000 + props.n*150}ms` }}>
            <img className={props.className} alt={props.className} src={`/images/${props.className}.png`}/>
        </div>
    )
}

export default Landing