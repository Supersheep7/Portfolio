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
                    <p>Una web app fullstack per gestire schede di un gioco di ruolo homebrew con dice roller integrato, form per aggiornare il database e admin panel per il DM</p>
                    </div>
                    <div className={'Repo-child hover' + this.state.open.includes("caverne")}>
                        <img alt='caverne' src='/images/caverne.png'/>
                        <img alt='caverne-dice' src='/images/caverne-dice.png'/>
                        <img alt='caverne-mobile' src='/images/caverne-mobile.png'/>
                    </div>
                </div>
                <div className='Filemanager-wrapper wrapper' onMouseEnter={() => this.hoverOn("music")} onMouseLeave={() => this.hoverOff("music")}>
                <div className={"title hover" + this.state.open.includes("music")}>  
                    <div><h2>Music Manager</h2></div>
                    <div><p>Uno script programmato in python per organizzare i file musicali in cartelle Artist/Album</p></div>
                </div>
                    <div className={'Repo-child hover' + this.state.open.includes("music")}>
                        <img alt='pre-manager' src='/images/pre-manager.png'/>
                        <img alt='music-filter' src='/images/music-filter.png'/>
                        <img alt='post-manager' src='/images/post-manager.png'/>
                    </div>
                </div>
                <div className='Github-wrapper wrapper'>
                    <div className='Repo-child' style={{ opacity: 1 }}>
                    <h1>Puoi trovare i miei altri progetti su Github</h1>
                        <img alt='github' src='/images/github.png'/>
                    </div>
                </div>
                        

            </div>
        )
    }
}

export default Repo