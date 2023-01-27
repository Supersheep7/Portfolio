import React from 'react';
import "./Repo.scss"
import { easeIn, motion } from "framer-motion"
import { Link } from "react-router-dom"

class Repo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 1,
            out: false,
            navLeftOpacity: 0.3,
            navRightOpacity: 0.3,
            touchPosition: null,
            windowWidth: window.innerWidth
        }
        this.updateSize = this.updateSize.bind(this);
    }

    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    updateSize() {
        this.setState({windowWidth: window.innerWidth});
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

        if (this.props.previousPage > this.state.thisPage) return (
            <div
            onTouchStart={e => this.handleTouchStart(e)}
            onTouchMove={e => this.handleTouchMove(e)}>

                { !this.Touch() ?
                (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }>
                    <div className='switch-wrapper switch-left'
                    onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                        <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>Home</h1>
                    </div>
                </Link>) : (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }></Link>)
                }

                <motion.div 
                key="Repo"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 2.5, ease: easeIn, type: "spring", bounce: 0.16, damping: 14} }} 
                exit={{x: 0 }}
                className='Repo big-wrapper'>
                    <Content language={this.props.language} windowWidth={this.state.windowWidth}/>
                </motion.div>

                { !this.Touch() ?
                (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                    <div className='switch-wrapper switch-right'
                    onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                        <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Wordpress</h1>
                    </div>
                </Link>) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }> </Link>)
                }

            </div>
        )

    else return (
        <div
        onTouchStart={e => this.handleTouchStart(e)}
        onTouchMove={e => this.handleTouchMove(e)}>

            { !this.Touch() ?
            (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }>
                <div className='switch-wrapper switch-left'
                onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                    <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>Home</h1>
                </div>
            </Link>) : (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }></Link>)
            }

            <motion.div 
                key="Repo"
                initial={{x: "100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 2.5, ease: easeIn, type: "spring", bounce: 0.16, damping: 14}}} 
                exit={{x: 0 }}
                className='Repo big-wrapper'>
                    <Content language={this.props.language} windowWidth={this.state.windowWidth}/>
            </motion.div>

            { !this.Touch() ?
            (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                <div className='switch-wrapper switch-right' 
                onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                    <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Wordpress</h1>
                </div>
            </Link>) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }> </Link>)
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
        this.state = {
            open: []
        }
    }

    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    hoverOn(x) {
        this.setState({ open: [...this.state.open, x] })
    }

    hoverOff(x) {
        this.setState({
            open: this.state.open.filter((x, i) => i !== this.state.open.indexOf(x))
          });
    }

    render() { 

        return (
            <div className='Repo-content-wrapper'>
                <div className='Caverne-wrapper wrapper' onTouchStart={() => this.hoverOn("caverne")} onMouseEnter={() => this.hoverOn("caverne")} onMouseLeave={() => this.hoverOff("caverne")}>
                    <div className={"title hover" + this.state.open.includes("caverne")}  >
                        <h2>Caverne &amp; Viverne</h2>
                        {this.props.language === "english" && Eng("caverne")}
                        {this.props.language === "italiano" && Ita("caverne")}
                    </div>
                    {!this.Touch() ? 
                    (<a target="_blank" rel="noreferrer" href="https://caverne-viverne.onrender.com/">
                    <div className={'Repo-child hover' + this.state.open.includes("caverne")}>
                        <img className='mobile-none' alt='caverne' src='/images/caverne.png'/>
                        <img className="tablet-none" alt='caverne-dice' src='/images/caverne-dice.png'/>
                        <img className="aruhara mobile-yes small-none" alt='caverne-mobile' src='/images/caverne-mobile.png'/>
                    </div>
                    </a>) :
                    (<a>
                    <div className={'Repo-child hover' + this.state.open.includes("caverne")}>
                        <img className="aruhara mobile-yes small-none" alt='caverne-mobile' src='/images/caverne-mobile.png'/>
                        <a target="_blank" rel="noreferrer" href="https://caverne-viverne.onrender.com/"><h2>Vai al sito</h2></a>
                    </div>
                    </a>)
                    }
                </div>
                <div className='Filemanager-wrapper wrapper' onTouchStart={() => this.hoverOn("music")} onMouseEnter={() => this.hoverOn("music")} onMouseLeave={() => this.hoverOff("music")}>
                    <div className={"title hover" + this.state.open.includes("music")}>  
                        <div><h2>Music Manager</h2></div>
                        {this.props.language === "english" && Eng("music")}
                        {this.props.language === "italiano" && Ita("music")}
                    </div>
                    {!this.Touch() ? (   
                    <a target="_blank" rel="noreferrer" href="https://github.com/Supersheep7/Music-Management">
                    <div className={'Repo-child hover' + this.state.open.includes("music")}>
                        <img className="tablet-none" alt='pre-manager' src='/images/pre-manager.png'/>
                        <img className="mobile-none" alt='music-filter' src='/images/music-filter.png'/>
                        <img className="post-manager tablet-none mobile-yes" alt='post-manager' src='/images/post-manager.png'/>
                    </div>
                    </a>
                )
                : (
                    <a>
                    <div className={'Repo-child hover' + this.state.open.includes("music")}>
                        <img className="post-manager tablet-none mobile-yes" alt='post-manager' src='/images/post-manager.png'/>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Supersheep7/Music-Management"><h2>Vai alla repo</h2></a>
                    </div>
                    </a>
                )}
                </div>
                <div className='Github-wrapper wrapper'>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Supersheep7/">
                    <div className='Repo-child' style={{ opacity: 1 }}>
                        <img alt='github' src='/images/github.png'/>
                        {this.props.language === "english" && Eng("github")}
                        {this.props.language === "italiano" && Ita("github")}
                    </div>
                    </a>
                </div>
                        
                { this.Touch() && 
                <div className='swipe-wrapper' style={{bottom: 60 }}>
                    <img className="swipe swipe-left" alt="swipe-left" src="/images/freccia1.png" style={{ width: 40}}/>
                    <img className="swipe swipe-right" alt="swipe-right" src="/images/freccia1.png" style={{ width: 40}}/>
                </div>
                }

            </div>
        )
    }

}

function Eng(str) {
    
    if (str === "caverne")
    {
    return (
            <p>A full stack web app built to manage character sheets on a homebrew RPG campaign. <span className='mobile-none'>It has a built-in roller, form elements linked with the database and an admin panel for the DM</span></p>
    )
    }

    else if (str === "music") {
        return (
            <div><p>A python script. It's a useful little app for managing music files<span className='mobile-none'> in Artist/Album folders</span></p></div>
        )
    }

    else if (str === "github") {
        return (
            <h1><span className="small-none">Check my other projects on </span>Github</h1>
        )
    }

    else return null
}

function Ita(str) {
    
    if (str === "caverne")
    {
    return (
            <p>Una web app fullstack per gestire schede di un gioco di ruolo homebrew <span className='mobile-none'>con dice roller integrato, form per aggiornare il database e admin panel per il DM </span></p>
        )
    }

    else if (str === "music") {
        return (
            <div><p>Uno script <span className='mobile-none'>programmato in</span> python per organizzare i file musicali <span className='mobile-none'>in cartelle Artist/Album</span></p></div>
            )
    }

    else if (str === "github") {
        return (
            <h1><span className="small-none">Puoi trovare i miei altri progetti su </span>Github</h1>
            )
    }

    else return null
}

export default Repo