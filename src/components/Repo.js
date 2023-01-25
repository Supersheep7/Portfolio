import React from 'react';
import "./Repo.scss"
import { easeOut, motion, spring } from "framer-motion"
import { Link } from "react-router-dom"

class Repo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 1
        }
    }

    render() {

        if (this.props.previousPage > this.state.thisPage) return (
            <div>
                <Link to={`/${(this.state.thisPage - 1)}`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>
                    <div className='switch-wrapper switch-left'>  
                        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                        fill="currentColor"/>
                        </svg>
                    </div>
                </Link>
                <motion.div 
                key="Repo"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
                exit={{x: 0 }}
                className='Repo big-wrapper'>
                    <Content language={this.props.language}/>
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

    else return (
        <div>
            <Link to={`/${(this.state.thisPage - 1)}`} onClick={() => this.props.goHandleClick(this.state.thisPage)}>
                <div className='switch-wrapper switch-left'>  
                    <svg width="84" height="84" viewBox="0 0 24 24" fill="none" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" 
                    fill="currentColor"/>
                    </svg>
                </div>
            </Link>
            <motion.div 
                key="Repo"
                initial={{x: "100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
                exit={{x: 0 }}
                className='Repo big-wrapper'>
                    <Content language={this.props.language}/>
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
        this.state = {
            open: []
        }
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
                <div className='Caverne-wrapper wrapper' onMouseEnter={() => this.hoverOn("caverne")} onMouseLeave={() => this.hoverOff("caverne")}>
                    <div className={"title hover" + this.state.open.includes("caverne")}  >
                    <h2>Caverne &amp; Viverne</h2>
                    {this.props.language === "english" && Eng("caverne")}
                    {this.props.language === "italiano" && Ita("caverne")}
                    </div>
                    <a target="_blank" href="https://caverne-viverne.onrender.com/"><div className={'Repo-child hover' + this.state.open.includes("caverne")}>
                        <img className='mobile-none' alt='caverne' src='/images/caverne.png'/>
                        <img className="tablet-none" alt='caverne-dice' src='/images/caverne-dice.png'/>
                        <img className="aruhara mobile-yes small-none" alt='caverne-mobile' src='/images/caverne-mobile.png'/>
                    </div>
                    </a>
                </div>
                <div className='Filemanager-wrapper wrapper' onMouseEnter={() => this.hoverOn("music")} onMouseLeave={() => this.hoverOff("music")}>
                <div className={"title hover" + this.state.open.includes("music")}>  
                    <div><h2>Music Manager</h2></div>
                    {this.props.language === "english" && Eng("music")}
                    {this.props.language === "italiano" && Ita("music")}
                </div>
                    <a target="_blank" href="https://github.com/Supersheep7/Music-Management"><div className={'Repo-child hover' + this.state.open.includes("music")}>
                        <img className="tablet-none" alt='pre-manager' src='/images/pre-manager.png'/>
                        <img className="mobile-none" alt='music-filter' src='/images/music-filter.png'/>
                        <img className="post-manager tablet-none mobile-yes" alt='post-manager' src='/images/post-manager.png'/>
                    </div>
                    </a>
                </div>
                
                
                <div className='Github-wrapper wrapper'>
                    
                <a target="_blank" href="https://github.com/Supersheep7/">
                    <div className='Repo-child' style={{ opacity: 1 }}>
                        <img alt='github' src='/images/github.png'/>
                        {this.props.language === "english" && Eng("github")}
                    {this.props.language === "italiano" && Ita("github")}
                    </div>
                    </a>
                </div>
                        

            </div>
        )
    }

}

function Eng(str) {
    
    if (str === "caverne")
    {
    return (
        <p>A full stack web app built to manage character sheets on a homebrew RPG. <span className='mobile-none'>It has a built-in roller, form elements linked with the database and an admin panel for the DM</span></p>
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