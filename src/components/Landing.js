import React from 'react';
import "./Landing.scss"
import { easeIn, motion } from "framer-motion"
import { Link } from "react-router-dom"

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 0,
            out: false,
            navLeftOpacity: 0.3,
            navRightOpacity: 0.3,
            touchPosition: null
        }
    }

    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        this.setState({touchPosition: touchDown})
    }

    handleTouchMove = (e) => {
        const touchDown = this.state.touchPosition
        const linkRight = document.getElementById("link-right")
        const linkLeft = document.getElementById("link-left")
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            linkRight.click()
        }
    
        if (diff < -5) {
            linkLeft.click()
        }
    
        this.setState({touchPosition: null})
    }

    handleNavClick() {
        this.props.goHandleClick(this.state.thisPage);
        this.setState({out: true})
    }

    handleOpacity(direction, n) {
        if (direction === "left") {
            this.setState({navLeftOpacity: n})
        }
        else if (direction === "right") {
            this.setState({navRightOpacity: n})
        }
        else return null
    }

    render() {
  
        if (this.props.previousPage > this.state.thisPage &&
            this.props.previousPage !== 3) return (
            <div
            onTouchStart={e => this.handleTouchStart(e)}
            onTouchMove={e => this.handleTouchMove(e)}>

                { !this.Touch() ?
                (<Link id="link-left" to={`/3`} onClick={() => this.handleNavClick() }>
                    <div className='switch-wrapper switch-left'
                    onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                        <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>About</h1>
                    </div>
                </Link>)
                : (<Link id="link-left" to={`/3`} onClick={() => this.handleNavClick() }></Link>)
                }
                
                <motion.div 
                key="Landing"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 2.5, ease: easeIn, type: "spring", bounce: 0.16, damping: 14}  }} 
                exit={{x: 0 }}
                className='Landing big-wrapper'>
                    <Content language={this.props.language} delayed="0"/>
                </motion.div>

                { !this.Touch() ?
                (
                <Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                    <div className='switch-wrapper switch-right'
                    onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                        <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Repo</h1>
                    </div>
                </Link>
                ) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }></Link>)
                }
            </div>
        )

        else if (this.props.previousPage === -1) {
            return (
                <div
                onTouchStart={e => this.handleTouchStart(e)}
                onTouchMove={e => this.handleTouchMove(e)}>

                    { !this.Touch() ?
                        (
                        <Link id="link-left" to={`/3`} onClick={() => this.handleNavClick()} >
                            <div className='switch-wrapper switch-left'
                            onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                                <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>About</h1>
                            </div>
                        </Link>
                        ) : (<Link id="link-left" to={`/3`} onClick={() => this.handleNavClick() }></Link>)
                    }

                        <motion.div 
                        key="Landing" 
                        initial={{x: "1%" }} 
                        animate={{x: 0 }} 
                        transition={{ x: {duration: 0.1, ease: easeIn, type: "spring", bounce: 0.16, damping: 14}  }} 
                        exit={{x: 0 }}
                        className='Landing big-wrapper'>
                            <Content language={this.props.language} delayed="1"/>
                        </motion.div>

                        { !this.Touch() ?
                        (
                        <Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                            <div className='switch-wrapper switch-right'
                            onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                                <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Repo</h1>
                            </div>
                        </Link>
                        ) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }></Link>)
                        }
                </div>
            )
        }

        else return (
            <div
            onTouchStart={e => this.handleTouchStart(e)}
            onTouchMove={e => this.handleTouchMove(e)}>

                { !this.Touch() ?
                (<Link id="link-left" to={`/3`} onClick={() => this.handleNavClick() }>
                    <div className='switch-wrapper switch-left'
                    onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                        <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>About</h1>
                    </div>
                </Link>) : (<Link id="link-left" to={`/3`} onClick={() => this.handleNavClick() }></Link>)
                }

                <motion.div 
                key="Landing"
                initial={{x: "100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 2.5, ease: easeIn, type: "spring", bounce: 0.16, damping: 14}  }} 
                exit={{x: 0 }}
                className='Landing big-wrapper'>
                    <Content language={this.props.language} delayed="0"/>
                </motion.div>

                { !this.Touch() ?
                (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                    <div className='switch-wrapper switch-right'
                    onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                        <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Repo</h1>
                    </div>
                </Link>) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }></Link>)
                }
                
            </div>
        )
    }

}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    render() { 
        return (
            <motion.div 
            key="Landing-content-wrapper" 
            className="Landing-content-wrapper">
                <div className="picandbio fade-in-top small-none" style={{ animationDelay: this.props.delayed*1000 + 1000 + "ms" }}>
                        <div className='Propic-wrapper'>
                            <div className="clipping-mask">
                                <img className="Propic" alt="propic" src="images/alessandro.jpg"/>
                            </div>
                        </div>
                    <div className='Bio glass'>
                        <p>Alessandro Corona Mendozza</p>
                        <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/CNXmcxY2PKg13dMW6"><p>Dieselvej 40, 2450 København SV</p></a>
                        <a target="_blank" rel="noreferrer" href="tel:+39-339-545-2982"><p>+45 91 82 70 50</p></a>
                        <a target="_blank" rel="noreferrer" href="mailto:alessandro.corona.m@gmail.com"><p>alessandro.corona.m@gmail.com</p></a>
                        <p>22/12/1993</p>
                        <div className='social'>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/alessandrocoronam/"><img alt='facebook' src="/images/facebook.png"/></a>
                            <a target="_blank" rel="noreferrer" href="/CV.pdf"><img alt='cv' src="/images/cv.png"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/blindflotnr/"><img alt='instagram' src="/images/instagram.png"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alessandro-corona-mendozza-9533b6188/"><img alt='linkedin' src="/images/linkedin.png"/></a>
                        </div>
                    </div>
                </div>
                <div className='Landing-right'>
                    <div className='Bio small-yes'>
                        <div className='Propic-wrapper'>
                            <div className="clipping-mask">
                                <img className="Propic" alt="Propic" src="images/alessandro.jpg"/>
                            </div>
                        </div>
                    <div className="name-and-social">
                        <h1>Alessandro Corona M<span className="mobile-none">endozza</span></h1>
                        <div className='social'>
                        <a target="_blank" rel="noreferrer" href="/CV.pdf"><img alt='cv' src="/images/cv.png"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alessandro-corona-mendozza-9533b6188/"><img alt='linkedin' src="/images/linkedin.png"/></a>
                            <a target="_blank" rel="noreferrer" href="mailto:alessandro.corona.m@gmail.com"><img alt='mail' src="/images/mail.png"/></a>
                            <a target="_blank" rel="noreferrer" href="tel:+39-339-545-2982"><img alt='phone' src="/images/telephone.png"/></a>
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
                        <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/"><img className='mongodb' alt='mongodb' src="/images/mongodb.png"/></a>   
                        <a target="_blank" rel="noreferrer" href="https://expressjs.com/"><img className='express' alt='express' src="/images/express.png"/></a>
                        <a target="_blank" rel="noreferrer" href="https://reactjs.org/"><img className='react' alt='react' src="/images/react.png"/></a>    
                        <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/"><img className='node' alt='node' src="/images/node.png"/></a>       
                    </div> 
                    <div className="Small-competences-wrapper"> 
                        <a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/"><Glass n="1" delayed={this.props.delayed} className='ts'/></a>
                        <a target="_blank" rel="noreferrer" href="https://jquery.com/"><Glass n="2" delayed={this.props.delayed} className='jquery'/></a>
                        <a target="_blank" rel="noreferrer" href="https://redux.js.org/"><Glass n="3" delayed={this.props.delayed} className='redux'/></a>
                        <a target="_blank" rel="noreferrer" href="https://sass-lang.com/"><Glass n="4" delayed={this.props.delayed} className='sass'/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.python.org/"><Glass n="5" delayed={this.props.delayed} className='python'/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.djangoproject.com/"><Glass n="6" delayed={this.props.delayed} className='django'/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.postgresql.org/"><Glass n="7" delayed={this.props.delayed} className='postgresql'/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.mysql.com/"><Glass n="8" delayed={this.props.delayed} className='mysql'/></a>
                    </div> 
                </div> 
            </div>
            <div className="Landing-bg-img-wrapper small-none">
                <img className="Landing-bg-img" alt="" src="./images/linesmooth.png" />
            </div>
            
            { this.Touch() === true &&
            <div className='swipe-wrapper' style={{bottom: 40}}>
                    <img className="swipe swipe-left" alt="swipe-left" src="/images/freccia1.png" style={{ width: 40}}/>
                    <img className="swipe swipe-right" alt="swipe-right" src="/images/freccia1.png" style={{ width: 40}}/>
            </div>
            }

            </motion.div>
        )
    }
}

function Eng() {
    return (
        <div>
            <p>Hello, I'm Alessandro, a self-taught <strong>web developer</strong>.</p>
            <p>My current expertise stems from the online classes at <a target="_blank" rel="noreferrer" href="https://www.w3schools.com/"><strong>W3</strong></a>, <a target="_blank" rel="noreferrer" href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&amp;queryID=95a3a09fb915fb3aad078e940337c9a3&amp;position=3"><strong>CS50</strong></a>, <a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/"><strong>freecodecamp</strong></a>, <a target="_blank" rel="noreferrer" href="https://www.theodinproject.com/"><strong>The Odin Project</strong></a>.</p>
            <p>So far I worked with a <strong>MERN</strong> stack. I think it's a good choice for building scalable web apps on a lightweight framework consistent with React, which is my main tool on the front end. <span className='tablet-none'>I can work with TypeScript and jQuery (if required) and develop apps via python in a django/flask environment. I've got a good grasp on relational databases, yet I never used one in a personal project.</span></p>
        </div>
    )
}
function Ita() {
    return (
        <div>
            <p>Ciao, sono Alessandro, uno <strong>sviluppatore web</strong> autodidatta. </p>
            <p>Per maturare le mie prime competenze ho studiato i curriculum online di <a target="_blank" rel="noreferrer" href="https://www.w3schools.com/"><strong>W3</strong></a>, <a href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&amp;queryID=95a3a09fb915fb3aad078e940337c9a3&amp;position=3"><strong>CS50</strong></a>, <a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/"><strong>freecodecamp</strong></a>, <a target="_blank" rel="noreferrer" href="https://www.theodinproject.com/"><strong>The Odin Project</strong></a>.</p>
            <p>Finora ho lavorato in <strong>MERN</strong> stack per costruire web app scalabili con framework leggeri senza rinunciare ad usare React, la mia scelta per il frontend.</p>
            <span className='tablet-none'><p>Implemento TypeScript e jQuery laddove necessario; so scrivere in python e realizzare app su django/flask. Ho una buona comprensione generale dei database relazionali, anche se non li ho mai usati in un progetto personale.</p></span>
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