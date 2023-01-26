import React from 'react';
import { useRef } from 'react';
import { easeOut, motion, spring } from "framer-motion"
import { Link } from "react-router-dom"
import "./Wordpress.scss"

class Wordpress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 2,
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


        if (this.props.previousPage > this.state.thisPage) return (
            <div
            onTouchStart={e => this.handleTouchStart(e)}
            onTouchMove={e => this.handleTouchMove(e)}>
                { !this.Touch() ?
                (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() } >
                    <div className='switch-wrapper switch-left'
                    onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                    <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>Repo</h1>
                    </div>
                </Link>) : (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() } ></Link>)
                }
                <motion.div 
                key="wordpress"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 2.5, type: "spring", bounce: 0.16, damping: 14}  }} 
                exit={{x: 0 }}
                className='Wordpress big-wrapper'>
                    <Content />
                </motion.div>
                { !this.Touch() ?
                (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                    <div className='switch-wrapper switch-right'
                    onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>            
                    <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>About</h1>
                    </div>
                </Link>) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }></Link>)
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
                <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>Repo</h1>
                </div>
            </Link>) : (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }></Link>)
            }
            <motion.div 
            key="wordpress"
            initial={{x: "100%" }} 
            animate={{x: 0 }} 
            transition={{ x: {duration: 2.5, type: "spring", bounce: 0.16, damping: 14}  }} 
            exit={{x: 0 }}
            className='Wordpress big-wrapper'>
                <Content />
            </motion.div>
            { !this.Touch() ?
            (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                <div className='switch-wrapper switch-right'
                onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>About</h1>
                </div>
            </Link>) : (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }> </Link>)
            }
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

    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
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

                {   this.Touch() &&

                <div className='swipe-wrapper'>
                <img className="swipe swipe-left" alt="swipe-left" src="/images/freccia1.png" style={{ width: 40}}/>
                        <img className="swipe swipe-right" alt="swipe-right" src="/images/freccia1.png" style={{ width: 40}}/>
                    </div>

                }
            </div>
        )
    }
    
    componentDidMount() {
        setTimeout(() => {this.setState({Ready: true})}, 800)
    }
}

export default Wordpress