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
                    <Content language={this.props.language} delayed="0"/>
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
                        <Content language={this.props.language} delayed="1"/>
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
                <Content language={this.props.language} delayed="0"/>
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
                        <a target="_blank" href="https://goo.gl/maps/CNXmcxY2PKg13dMW6"><p>Bologna, via dei Bibiena 6</p></a>
                        <a target="_blank" href="tel:+39-339-545-2982"><p>+39 339 545 2982</p></a>
                        <a target="_blank" href="mailto:alessandro.corona.m@gmail.com"><p>alessandro.corona.m@gmail.com</p></a>
                        <p>22/12/1993</p>
                        <div className='social'>
                            <a target="_blank" href="https://www.facebook.com/alessandrocoronam/"><img alt='facebook' src="/images/facebook.png"/></a>
                            <a target="_blank" href="https://www.instagram.com/blindflotnr/"><img alt='instagram' src="/images/instagram.png"/></a>
                            <a target="_blank" href="https://t.me/panarchico"><img alt='telegram' src="/images/telegram.png"/></a>
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
                    <a target="_blank" href="https://www.facebook.com/alessandrocoronam/"><img alt='facebook' src="/images/facebook.png"/></a>
                    <a target="_blank" href="https://www.instagram.com/blindflotnr/"><img alt='instagram' src="/images/instagram.png"/></a>
                    <a target="_blank" href="mailto:alessandro.corona.m@gmail.com"><img alt='mail' src="/images/mail.png"/></a>
                    <a target="_blank" href="tel:+39-339-545-2982"><img alt='phone' src="/images/telephone.png"/></a>
                    </div>
                </div>
                </div>
                <div className="Landing-big-content glass swing-in-top-fwd" style={{ animationDelay: this.props.delayed*1000 + 500 + "ms" }}>
                    <div className="about-wrapper">
                    {this.props.language === "english" && Eng()}
                    {this.props.language === "italiano" && Ita()}
                    </div>
                </div> 
                <div className="Competences-wrapper"> 
                    <div className="Stack glass swing-in-top-fwd" style={{ animationDelay: this.props.delayed*1000 + 2500 + "ms" }}>
                        <a target="_blank" href="https://www.mongodb.com/"><img className='mongodb' alt='mongodb' src="/images/mongodb.png"/></a>   
                        <a target="_blank" href="https://expressjs.com/"><img className='express' alt='express' src="/images/express.png"/></a>
                        <a target="_blank" href="https://reactjs.org/"><img className='react' alt='react' src="/images/react.png"/></a>    
                        <a target="_blank" href="https://nodejs.org/en/"><img className='node' alt='node' src="/images/node.png"/></a>       
                    </div> 
                    <div className="Small-competences-wrapper"> 
                        <a target="_blank" href="https://www.javascript.com/"><Glass n="1" delayed={this.props.delayed} className='js'/></a>
                        <a target="_blank" href="https://jquery.com/"><Glass n="2" delayed={this.props.delayed} className='jquery'/></a>
                        <a target="_blank" href="https://redux.js.org/"><Glass n="3" delayed={this.props.delayed} className='redux'/></a>
                        <a target="_blank" href="https://sass-lang.com/"><Glass n="4" delayed={this.props.delayed} className='sass'/></a>
                        <a target="_blank" href="https://www.python.org/"><Glass n="5" delayed={this.props.delayed} className='python'/></a>
                        <a target="_blank" href="https://www.djangoproject.com/"><Glass n="6" delayed={this.props.delayed} className='django'/></a>
                        <a target="_blank" href="https://www.postgresql.org/"><Glass n="7" delayed={this.props.delayed} className='postgresql'/></a>
                        <a target="_blank" href="https://www.mysql.com/"><Glass n="8" delayed={this.props.delayed} className='mysql'/></a>
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

function Eng() {
    return (
        <div>
            <p>Hello, I'm Alessandro, a self-taught <strong>web developer</strong>.</p>
            <p>My current expertise stems from the online classes at <a target="_blank" href="https://www.w3schools.com/"><strong>W3</strong></a>, <a href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&amp;queryID=95a3a09fb915fb3aad078e940337c9a3&amp;position=3"><strong>CS50</strong></a>, <a target="_blank" href="https://www.freecodecamp.org/"><strong>freecodecamp</strong></a>, <a target="_blank" href="https://www.theodinproject.com/"><strong>The Odin Project</strong></a>.</p>
            <p>So far I worked with a <strong>MERN</strong> stack. I think it's a good choice for building scalable web apps on a lightweight framework consistent with React, which is my main tool on the front end.</p>
            <span className='tablet-none'><p>I can work with vanillaJS and jQuery (if required) and develop apps via python in a django/flask environment. I've got a good grasp on relational databases, yet I never used one in a personal project.</p></span>
        </div>
    )
}
function Ita() {
    return (
        <div>
          <p>Ciao, sono Alessandro, uno <strong>sviluppatore web</strong> autodidatta. </p>
                       <p>Per maturare le mie prime competenze ho studiato i curriculum online di <a target="_blank" href="https://www.w3schools.com/"><strong>W3</strong></a>, <a href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&amp;queryID=95a3a09fb915fb3aad078e940337c9a3&amp;position=3"><strong>CS50</strong></a>, <a target="_blank" href="https://www.freecodecamp.org/"><strong>freecodecamp</strong></a>, <a target="_blank" href="https://www.theodinproject.com/"><strong>The Odin Project</strong></a>.</p>
                       <p>Finora ho lavorato in <strong>MERN</strong> stack per costruire web app scalabili con framework leggeri senza rinunciare ad usare React, la mia scelta per il frontend.</p>
                       <span className='tablet-none'><p>Implemento vanillaJS e jQuery laddove necessario; so scrivere in python e realizzare app su django/flask. Ho una buona comprensione generale dei database relazionali, anche se non li ho mai usati in un progetto personale.</p>
                    </span>
        </div>        
    )
}

function Glass(props) {
    return (
        <div className='glass swing-in-top-fwd' style={{ animationDelay: `${props.delayed*1000 + 1000 + props.n*150}ms` }}>
            <img className={props.className} alt={props.className} src={`/images/${props.className}.png`}/>
        </div>
    )
}

export default Landing