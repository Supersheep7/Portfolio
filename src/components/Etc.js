import React, {useState} from 'react';
import { ReactDOM } from 'react';
import { easeOut, motion, spring } from "framer-motion"
import { Link } from "react-router-dom"
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import "./Etc.scss"

const CARDS = 4;
const MAX_VISIBILITY = 3;

class Etc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisPage: 3
        }
    }

    render() {

        if (this.props.previousPage > this.state.thisPage ||
            this.props.previousPage === 0) return (
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
                key="Etc"
                initial={{x: "-100%" }} 
                animate={{x: 0 }} 
                transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
                exit={{x: 0 }}
                className='Etc big-wrapper'>
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
            key="Etc"
            initial={{x: "100%" }} 
            animate={{x: 0 }} 
            transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
            exit={{x: 0 }}
            className='Etc big-wrapper'>
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
            ingagas: false
        }
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
                </div>
        )
    }
}
  
const Carousel = ({children}) => {
const [active, setActive] = useState(0);
const count = React.Children.count(children);

return (
    <div className='carousel'>
    {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
    {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
        {child}
        </div>
    ))}
    {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
);
};

function Eng(props) {
    
    if (props.str === "formazione")
    {
    return (
        <div>
            <h2>College</h2>
            <div>
            <p>I'm a <strong>PHILOSOPHY</strong> graduate from Bologna's <b><a target="_blank" href="https://www.unibo.it/">Alma Mater Studiorum</a></b>, focusing mainly on epistemology (philosophy of science, mind, knowledge, language and logic).</p> 
                <br />
                    <p>I kept studying philosphy until 2020 and I'm still significantly passionate about the subject. As an Alma Mater alumnus I was a <strong>SPEAKER</strong> for many seminars concerning bibliographical research, political philosophy, industry 4.0 and musical journalism.</p> 
            </div>    
        </div>    
                            )
    }

    else if (props.str === "professione") {
        return (
            <div>
                <h2>Work</h2>
                    <div>
                        <p> I worked as a <strong>DIGITAL PROMOTER</strong> in Bologna's <b><a target="_blank" href="https://www.bo.camcom.gov.it/it/about-us/chamber-commerce-bologna">chamber of commerce</a></b>. 
                        My team took care of assessments and support for european public tenders in the industry 4.0 framework.</p>
                        <br />
                        <p>During 2020 I worked as a freelance <strong>EVENT ASSISTANT</strong>, an IT consultant and video editor for Zoom/GTW webinars.</p>
                    </div>
            </div>
            )
    }

    else if (props.str === "associazionismo") {
        return (
            <div>
                <h2>Network</h2>
                    <div>
                        <p>Currently a <strong>MEMBER</strong> of Alma Mater Studiorum's Alumni network <b><a target="_blank" href="https://www.linkedin.com/company/vivat-academia/">'Vivat Academia'</a></b>. I also worked in its 'Scholarships' team, a task force meant to collect company funds for university students in need.</p>
                        <br />
                        <p>I was for 4 years the <strong>LEADER</strong> of Alma Mater's student society <b><a target="_blank" href="https://www.facebook.com/SVQFO/">S.V.Q.F.O.</a></b> It was a complex and colourful growth experience, which taught me a lot about team management, public fund accountability, major event planning and PR with academia and local authorities.</p>  
                    </div>
            </div>
        )
    }

    else if (props.str === "altro") {
        return (
            <div>
                <h2>Etc</h2>
                    <div>
                        <p>I'm an independent <strong>MUSICAL JOURNALIST</strong> since 2011.</p>
                        <br />
                        <p>I'm <strong>CHIEF EDITOR</strong> and webmaster for <b><a target="_blank" href="https://www.livore.it/">Livore</a></b>. I'm also a top columnist of the webzine and, occasionally, a graphic designer.</p>
                        <p><b><a target="_blank" href="https://www.livore.it/author/wp_13976739/">Here</a></b> you can find all my writings as a journalist. Unfortunately, they're only in Italian.</p>
                        <br />
                        <p>I'm an <b>UI/UX design</b> enthusiast, especially in videogames. I'm a cat's human, his name is <strong className="ingagas" onMouseOver={() => props.ingagasPeekabo(true)} onMouseLeave={() => props.ingagasPeekabo(false)}>INGAGAS</strong>, and he's basically my boss.</p>
                        <img className={"ingimg" + props.ingagas} src="/images/ingagas.jpg"/>
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
                            <p>Mi sono laureato in <strong>FILOSOFIA</strong> all'<b><a target="_blank" href="https://www.unibo.it/it">Alma Mater Studiorum</a></b> nel 2016, con un orientamento curricolare di stampo epistemologico (Filosofia della scienza, della mente, della conoscenza, del linguaggio e logica).</p> 
                                <br />
                                <p>Ho continuato a studiare Filosofia fino al 2020 e la materia rimane tuttora uno dei miei principali interessi. Come ex studente Alma Mater ho avuto l'occasione di fare da <strong>RELATORE</strong> per svariati seminari sui temi della ricerca bibliografica, della filosofia politica, dell'impresa digitale e del giornalismo musicale. </p> 
                            </div>
 
        </div>    
                            )
    }

    else if (props.str === "professione") {
        return (
            <div>
 <h2>Professione</h2>
                        <div>
                            <p> Dal 2019 al 2021 ho lavorato come <strong>DIGITAL PROMOTER</strong> in <b><a target="_blank" href="https://www.bo.camcom.gov.it/">Camera di Commercio</a></b> di Bologna nel team <b><a href="https://www.puntoimpresadigitale.camcom.it/">Punto Impresa Digitale</a></b>. 
                            Il team si occupava di fornire valutazioni e assistenza per bandi europei nel quadro della transizione I4.0. Nello stesso periodo ho inoltre lavorato come RAO per emissione CNS.</p>
                            <br />
                            <p>Nel 2020 sono stato <strong>EVENT ASSISTANT</strong> freelance per webinar ECM in medicina, con un ruolo di assistenza tecnica, formazione e montaggio.</p>
                        </div>
            </div>
            )
    }

    else if (props.str === "associazionismo") {
        return (
            <div>
                   <h2>Associazionismo</h2>
                        <div>
                            <p>Attualmente <strong>MEMBRO</strong> del network di Alumni dell'Alma Mater Studiorum <b><a target="_blank" href="https://www.linkedin.com/company/vivat-academia/">'Vivat Academia'</a></b>, di cui ho fatto parte del team 'Borse di Studio', che si occupa di costruire opportunità tra aziende e neolaureati</p>
                            <br />
                            <p>Dal 2017 al 2021 <strong>LEADER</strong> dell'associazione studentesca universitaria <b><a target="_blank" href="https://www.facebook.com/SVQFO/">S.V.Q.F.O.</a></b> dell'Alma Mater Studiorum, esperienza formativa dalle infinite sfaccettature, riassumibili parzialmente nella sfera del team management, della gestione di fondi pubblici, della calendarizzazione di grandi eventi e delle PR con istituzioni cittadine e accademiche.  </p>  
                        </div>
            </div>
        )
    }

    else if (props.str === "altro") {
        return (
            <div>
                        <h2>Altro</h2>
                        <div>
                            <p> <strong>GIORNALISTA MUSICALE</strong> indipendente dal 2011.  </p>
                            <br />
                            <p>Dal 2022 sono <strong>CAPOREDATTORE</strong> e webmaster del magazine online <b><a target="_blank" href="https://www.livore.it/">Livore</a></b>, di cui sono anche articolista e occasionalmente grafico.</p>
                            <p><b><a target="_blank" href="https://www.livore.it/author/wp_13976739/">Qui</a></b> è possibile trovare l'elenco degli articoli che ho scritto nell'ultimo anno.</p>
                            <br />
                            <p>Sono un appassionato di <b>UI/UX design</b>, soprattutto nel contesto videoludico. Ho un gatto nero, si chiama <strong className="ingagas" onMouseOver={() => props.ingagasPeekabo(true)} onMouseLeave={() => props.ingagasPeekabo(false)}>INGAGAS</strong>, e tendenzialmente comanda lui.</p>
                            <img className={"ingimg" + props.ingagas} src="/images/ingagas.jpg"/>
                        </div>
            </div>
        )
    }

    else return null
}

export default Etc