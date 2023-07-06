import React, {useState} from 'react';
import { easeIn, motion } from "framer-motion"
import { Link } from "react-router-dom"
import "./Etc.scss"

const MAX_VISIBILITY = 3;

class Etc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 3,
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

        if (this.props.previousPage > this.state.thisPage ||
            this.props.previousPage === 0) return (
            <div
            onTouchStart={e => this.handleTouchStart(e)}
            onTouchMove={e => this.handleTouchMove(e)}>
                { !this.Touch() ?
                (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }>
                    <div className='switch-wrapper switch-left'
                    onMouseEnter={() => this.handleOpacity("left", 1)} onMouseLeave={() => this.handleOpacity("left", 0.3)}>  
                        <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>Wordpress</h1>
                    </div>
                </Link>) : (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }></Link>)
                }

                <motion.div 
                key="Etc"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 2.5, ease: easeIn, type: "spring", bounce: 0.16, damping: 14}  }} 
                exit={{x: 0 }}
                className='Etc big-wrapper'>
                    <Content language={this.props.language}/>
                </motion.div>

                { !this.Touch() ?
                (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                    <div className='switch-wrapper switch-right'
                    onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                        <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Home</h1>
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
                    <h1 className={'nav-text nav-text-left out' + this.state.out} style={{opacity: this.state.navLeftOpacity}}>Wordpress</h1>
                </div>
            </Link>) : (<Link id="link-left" to={`/${(this.state.thisPage - 1)}`} onClick={() => this.handleNavClick() }></Link>)
            }

            <motion.div 
            key="Etc"
            initial={{x: "100%" }} 
            animate={{x: 0 }} 
            transition={{ x: {duration: 2.5, ease: easeIn, type: "spring", bounce: 0.16, damping: 14}  }} 
            exit={{x: 0 }}
            className='Etc big-wrapper'>
                <Content language={this.props.language}/>
            </motion.div>

            { !this.Touch() ?
            (<Link id="link-right" to={`/${(this.state.thisPage + 1) % 4}`} onClick={() => this.handleNavClick() }>                    
                <div className='switch-wrapper switch-right'
                onMouseEnter={() => this.handleOpacity("right", 1)} onMouseLeave={() => this.handleOpacity("right", 0.3)}>
                    <h1 className={'nav-text nav-text-right out' + this.state.out} style={{opacity: this.state.navRightOpacity}}>Home</h1>
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
        this.state = {
            ingagas: false
        }
    }
    
    Touch() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    ingagasPeekabo(bool) {
        this.setState({ingagas: bool})
    }

    render() { 
        return (
            <div className='Etc-big-wrapper'>
                <div className='fade-in' style={{opacity: 0}}>
                    <Carousel language={this.props.language}>
                        <div className='card card1 glass'> 
                            <img className='cardimg' alt='formazione' src='/images/formazione.jpg' />
                            {this.props.language === "english" && <Eng str="formazione" />}
                            {this.props.language === "italiano" && <Ita str="formazione" />}
                        </div>
                        <div className='card card2 glass'> 
                            <img className='cardimg' alt='formazione' src='/images/professione.png' />
                            {this.props.language === "english" && <Eng str="professione" />}
                            {this.props.language === "italiano" && <Ita str="professione" />}
                        </div>
                        <div className='card card3 glass'> 
                            <img className='cardimg' alt='formazione' src='/images/associazione.png' />
                            {this.props.language === "english" && <Eng str="associazionismo" />}
                            {this.props.language === "italiano" && <Ita str="associazionismo" />}
                        </div>
                        <div className='card card4 glass'> 
                            <img className='cardimg' alt='altro' src='/images/altro.png' />
                            {this.props.language === "english" && <Eng str="altro" ingagasPeekabo={this.ingagasPeekabo.bind(this)} ingagas={this.state.ingagas} />}
                            {this.props.language === "italiano" && <Ita str="altro" ingagasPeekabo={this.ingagasPeekabo.bind(this)} ingagas={this.state.ingagas} />}
                        </div>
                    </Carousel>
                </div>
                    
                    {this.Touch() &&
                    
                    <div className='swipe-wrapper'>
                    <img className="swipe swipe-left" alt="swipe-left" src="/images/freccia1.png" style={{ width: 40}}/>
                        <img className="swipe swipe-right" alt="swipe-right" src="/images/freccia1.png" style={{ width: 40}}/>
                    </div>
                    
                    }
            </div>
        )
    }
}
  
const Carousel = ({children}) => {

const [active, setActive] = useState(0);
const count = React.Children.count(children);

return (
    <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><img className="chevron-left" alt="chevron-left" src="/images/chevron.png"/></button>}
        {React.Children.map(children, (child, i) => (
            <div className='card-container' style={{
                '--active': i === active ? 1 : 0,
                '--offset': (active - i) / 3,
                '--direction': Math.sign(active - i),
                '--absoffset': Math.abs(active - i) / 3,
                'pointer-events': active === i ? 'auto' : 'none',
                'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
            </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><img className="chevron-right" alt="chevron-right" src="/images/chevron.png"/></button>}
    </div>
);
};

function Eng(props) {
    
    if (props.str === "formazione")
    {
    return (
        <div>
            <h2>University</h2>
            <div>
                <p>I'm currently enrolled as a student in the Msc in <b>IT & COGNITION</b> at the <strong>University of Copenhagen</strong></p>
                <br />
                <p>I'm a <b>PHILOSOPHY</b> graduate from Bologna's <a target="_blank" rel="noreferrer" href="https://www.unibo.it/"><strong>Alma Mater Studiorum</strong></a>, focusing mainly on epistemology (philosophy of science, mind, knowledge, language and logic).</p> 
                <br />
                <p>I kept studying philosphy until 2020 and I'm still significantly passionate about the subject. As an Alma Mater alumnus I was a <b>SPEAKER</b> for many seminars concerning bibliographical research, political philosophy, industry 4.0 and musical journalism.</p> 
            </div>    
        </div>    
                            )
    }

    else if (props.str === "professione") {
        return (
            <div>
                <h2>Work</h2>
                <div>
                    <p> I worked as a <b>DIGITAL PROMOTER</b> in Bologna's <a target="_blank" rel="noreferrer" href="https://www.bo.camcom.gov.it/it/about-us/chamber-commerce-bologna"><strong>chamber of commerce</strong></a>. 
                    My team took care of assessments and support for european public tenders in the industry 4.0 framework.</p>
                    <br />
                    <p>During 2020 I worked as a freelance <b>EVENT ASSISTANT</b>, an IT consultant and video editor for Zoom/GTW webinars.</p>
                </div>
            </div>
            )
    }

    else if (props.str === "associazionismo") {
        return (
            <div>
                <h2>Network</h2>
                <div>
                    <p>Currently a <b>MEMBER</b> of Alma Mater Studiorum's Alumni network <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/vivat-academia/"><strong>'Vivat Academia'</strong></a>. I also worked in its 'Scholarships' team, a task force meant to collect funds for university students in need from various businesses</p>
                    <br />
                    <p>I was for 4 years the <b>LEADER</b> of Alma Mater's student society <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SVQFO/"><strong>S.V.Q.F.O.</strong></a> It was a complex and colourful growth experience, which taught me a lot about team management, public fund accountability, major event planning and PR with academia and local authorities.</p>  
                </div>
            </div>
        )
    }

    else if (props.str === "altro") {
        return (
            <div>
                <h2>Etc</h2>
                <div>
                    <p>I'm an independent <b>MUSICAL JOURNALIST</b> since 2011.</p>
                    <br />
                    <p>I'm <b>CHIEF EDITOR</b> and webmaster for <a target="_blank" rel="noreferrer" href="https://www.livore.it/"><strong>Livore</strong></a>. I'm also one of the top columnists of the webzine and, occasionally, a graphic designer.</p>
                    <p><a target="_blank" rel="noreferrer" href="https://www.livore.it/author/wp_13976739/"><strong>Here</strong></a> you can find all my writings as a journalist. Unfortunately, they're only in Italian.</p>
                    <br />
                    <p>I'm an <b>UI/UX design</b> enthusiast, especially in videogames. I'm a cat's human, his name is <strong className="ingagas" onMouseOver={() => props.ingagasPeekabo(true)} onMouseLeave={() => props.ingagasPeekabo(false)}>Ingagas</strong>, and he's basically my boss.</p>
                    <img alt="ingagas" className={"ingimg" + props.ingagas} src="/images/ingagas.jpg"/>
                </div>
            </div>
        )
    }

    else return null
}
function Ita(props) {
    
    if (props.str === "formazione")
    {
    return (
        <div>
            <h2>Formazione</h2>
            <div>
                <p>Mi sono laureato in <b>FILOSOFIA</b> all'<a target="_blank" rel="noreferrer" href="https://www.unibo.it/it"><strong>Alma Mater Studiorum</strong></a> nel 2016, con un orientamento curricolare di stampo epistemologico (Filosofia della scienza, della mente, della conoscenza, del linguaggio e logica).</p> 
                <br />
                <p>Ho continuato a studiare Filosofia fino al 2020 e la materia rimane tuttora uno dei miei principali interessi. Come ex studente Alma Mater ho avuto l'occasione di fare da <b>RELATORE</b> per svariati seminari sui temi della ricerca bibliografica, della filosofia politica, dell'impresa digitale e del giornalismo musicale. </p> 
            </div>
        </div>    
        )
    }

    else if (props.str === "professione") {
        return (
            <div>
                <h2>Professione</h2>
                <div>
                    <p>Dal 2019 al 2021 ho lavorato come <b>DIGITAL PROMOTER</b> in <a target="_blank" rel="noreferrer" href="https://www.bo.camcom.gov.it/"><strong>Camera di Commercio</strong></a> di Bologna nel team <a href="https://www.puntoimpresadigitale.camcom.it/"><strong>Punto Impresa Digitale</strong></a>. 
                    Il team si occupava di fornire valutazioni e assistenza per bandi europei nel quadro della transizione I4.0. Nello stesso periodo ho inoltre lavorato come RAO per emissione CNS.</p>
                    <br />
                    <p>Nel 2020 sono stato <b>EVENT ASSISTANT</b> freelance per webinar ECM in medicina, con un ruolo di assistenza tecnica, formazione e montaggio.</p>
                </div>
            </div>
            )
    }

    else if (props.str === "associazionismo") {
        return (
            <div>
            <h2>Associazionismo</h2>
                <div>
                    <p>Attualmente <strong>MEMBRO</strong> del network di Alumni dell'Alma Mater Studiorum <b><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/vivat-academia/">'Vivat Academia'</a></b>, di cui ho fatto parte del team 'Borse di Studio', che si occupa di costruire opportunità tra aziende e neolaureati</p>
                    <br />
                    <p>Dal 2017 al 2021 <strong>LEADER</strong> dell'associazione studentesca universitaria <b><a target="_blank" rel="noreferrer" href="https://www.facebook.com/SVQFO/">S.V.Q.F.O.</a></b> dell'Alma Mater Studiorum, esperienza formativa dalle infinite sfaccettature, riassumibili parzialmente nella sfera del team management, della gestione di fondi pubblici, della calendarizzazione di grandi eventi e delle PR con istituzioni cittadine e accademiche.  </p>  
                </div>
            </div>
        )
    }

    else if (props.str === "altro") {
        return (
            <div>
                <h2>Altro</h2>
                <div>
                    <p><b>GIORNALISTA MUSICALE</b> indipendente dal 2011.  </p>
                    <br />
                    <p>Dal 2022 sono <b>CAPOREDATTORE</b> e webmaster del magazine online <a target="_blank" rel="noreferrer" href="https://www.livore.it/"><strong>Livore</strong></a>, di cui sono anche articolista e occasionalmente grafico.</p>
                    <p><a target="_blank" rel="noreferrer" href="https://www.livore.it/author/wp_13976739/"><strong>Qui</strong></a> è possibile trovare l'elenco degli articoli che ho scritto nell'ultimo anno.</p>
                    <br />
                    <p>Sono un appassionato di <b>UI/UX design</b>, soprattutto nel contesto videoludico. Ho un gatto nero, si chiama <strong className="ingagas" onMouseOver={() => props.ingagasPeekabo(true)} onMouseLeave={() => props.ingagasPeekabo(false)}>Ingagas</strong>, e tendenzialmente comanda lui.</p>
                    <img alt="ingagas" className={"ingimg" + props.ingagas} src="/images/ingagas.jpg"/>
                </div>
            </div>
        )
    }

    else return null
}

export default Etc