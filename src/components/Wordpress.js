import React from 'react';
import { useRef } from 'react';
import { easeOut, motion, spring } from "framer-motion"
import { Link } from "react-router-dom"
import "./Wordpress.scss"

class Wordpress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 2
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
                key="wordpress"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
                exit={{x: 0 }}
                className='Wordpress big-wrapper'>
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
            key="wordpress"
            initial={{x: "100%" }} 
            animate={{x: 0 }} 
            transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
            exit={{x: 0 }}
            className='Wordpress big-wrapper'>
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

function HoverWrapper(props) {
    return (
        <div className="Wordpress-small-wrapper perspective">
                        <div className="livore-images" style={{ 
                            transform: `rotateY(${props.e}deg) rotateX(${props.n}deg)` 
                            }}>
                            <img className="livore-mobile" alt="livore-mobile" src="/images/livoremobile.png"/>
                            <img className="livore-desktop" alt="livore-desktop" src="/images/livoredesktop.png"/>
                            <img className="livore-logo" alt="livore-logo" src="/images/livorelogo.png"/>
                        </div>
                            <div className="livore-title">
                            <h2><strong>Wordpress Webmaster</strong></h2>
                            </div>
                            <div className="small-none Livore-text tablet-none">
                                <p>Analytics</p>
                                <p>Yoast SEO</p>
                                <p>GDPR/Cookie consent</p>
                                <p>Blocksy</p>
                                <p>Elementor</p>
                                <p>Stackable/Getwid/Spectra</p>
                                <p>Woocommerce</p>
                            </div>    
                            <div className='small-yes tablet-yes'>
                                <p>Analytics / SEO / GDPR / Themes / Elementor / Getwid / Woocommerce</p>
                            </div>
                    </div>
    )
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            e: 0,
            n: 0,
            windowWidth: 0,
            windowHeight: 0,
            Ready: false
        }
    }

    tilt(t) {
        var e = -(20 + (this.state.windowWidth / 30) - (t.pageX / 25))
        var n = ( 20 + (this.state.windowHeight / 2) - (t.pageY / 15))
        this.setState({e: e, n: n})
    }    

    render() { 
        return (
            <div className="Wordpress-page-wrapper">
                { this.state.Ready ? 
                ( <div>
                    <div className='Wordpress-big-wrapper top mobile-none' onMouseMove={event => this.tilt(event)}>
                    <HoverWrapper e={this.state.e} n={this.state.n}/>
                    </div>
                    <div className='Wordpress-big-wrapper top mobile-yes'>
                    <HoverWrapper e={0} n={0}/>
                    </div>
                </div>
                ) 
                : 
                ( <div className='Wordpress-big-wrapper top'>
                <HoverWrapper e={this.state.e} n={this.state.n}/>
                </div> )
                }  
                <div className='Wordpress-img-wrapper tablet-none'>
                    <img className="Wordpress-img fade-in-fwd" src="images/sun.png" style={{ animationDelay: "0.8s" }}/>
                    <img className="Wordpress-img fade-in-fwd" src="images/twins.png" style={{ animationDelay: "1.2s" }}/>
                    <img className="Wordpress-img fade-in-fwd" src="images/timber.png" style={{ animationDelay: "1.6s" }}/>
                    <img className="Wordpress-img fade-in-fwd" src="images/brittle.png" style={{ animationDelay: "2s" }}/>
                    <img className="Wordpress-img fade-in-fwd" src="images/giant.png" style={{ animationDelay: "2.4s" }}/>
                    <img className="Wordpress-img fade-in-fwd" src="images/bramble.png" style={{ animationDelay: "2.8s" }}/>
                </div>
                <div className="tablet-yes small-none">
                                <p>Plugin per Analytics</p>
                                    <p>Yoast SEO</p>
                                    <p>GDPR e Cookie consent</p>
                                    <p>Blocksy</p>
                                    <p>Elementor</p>
                                    <p>Stackable/Getwid/Spectra</p>
                                    <p>Woocommerce</p>
                </div>
            </div>
        )
    }
    
    componentDidMount() {
        setTimeout(() => {this.setState({Ready: true})}, 800)
    }
}

export default Wordpress