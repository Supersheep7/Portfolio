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
            key="Etc"
            initial={{x: "100%" }} 
            animate={{x: 0 }} 
            transition={{ x: {duration: 0.8, ease: easeOut, type: spring} }} 
            exit={{x: 0 }}
            className='Etc big-wrapper'>
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
            ingagas: false
        }
    }

    ingagas(bool) {
        this.setState({ingagas: bool})
    }

    render() { 
        return (
            <div className='Etc-big-wrapper'>
                <div className='fade-in' style={{opacity: 0}}>
                <Carousel>
                        <div className='card card1 glass'> 
                            <img className='cardimg' alt='formazione' src='/images/formazione.jpg' />
                            <h2>Formazione</h2>
                            <p>Mi sono laureato in Filosofia all'Alma Mater Studiorum nel 2016, con un orientamento curricolare di stampo epistemologico (Filosofia della scienza, della mente, della conoscenza, del linguaggio e logica).</p> 
                                <br />
                                <p>Ho continuato a studiare Filosofia fino al 2020 e la materia rimane tuttora uno dei miei principali interessi. Come ex studente Alma Mater ho avuto l'occasione di fare da relatore per svariati seminari sui temi della ricerca bibliografica, della filosofia politica, dell'impresa digitale e del giornalismo musicale. </p> 
                        </div>
                        <div className='card card2 glass'> 
                        <img className='cardimg' alt='formazione' src='/images/professione.png' />
                        <h2>Professione</h2>
                            <p> Dal 2019 al 2021 ho lavorato come <strong>DIGITAL PROMOTER</strong> in Camera di Commercio di Bologna nel team Punto Impresa Digitale. 
                            Il team si occupava di fornire valutazioni e assistenza per bandi europei nel quadro della transizione I4.0. Nello stesso periodo ho inoltre lavorato come RAO per emissione CNS.</p>
                            <br />
                            <p>Nel 2020 sono stato <strong>EVENT ASSISTANT</strong> freelance per webinar ECM in medicina, con un ruolo di assistenza tecnica, formazione e montaggio.</p>
                        </div>
                        <div className='card card3 glass'> 
                        <img className='cardimg' alt='formazione' src='/images/associazione.png' />
                        <h2>Associazionismo</h2>
                            <p>Attualmente membro del network di Alumni dell'Alma Mater Studiorum 'Vivat Academia', di cui ho fatto parte del team 'Borse di Studio', che si occupa di costruire opportunità tra aziende e neolaureati</p>
                            <br />
                            <p>Dal 2017 al 2021 <strong>Leader</strong> dell'associazione studentesca universitaria S.V.Q.F.O. dell'Alma Mater Studiorum, esperienza formativa dalle infinite sfaccettature, riassumibili parzialmente nella sfera del team management, della gestione di fondi pubblici, della calendarizzazione di grandi eventi e delle PR con istituzioni cittadine e accademiche.  </p>  
                        </div>
                        <div className='card card4 glass'> 
                        <img className='cardimg' alt='altro' src='/images/altro.png' />
                        <h2>Altro</h2>
                            <p> <strong>Giornalista musicale</strong> indipendente dal 2011. 
                            <br />
                            <p>Dal 2022 sono caporedattore e webmaster del magazine online <strong>Livore</strong>, di cui sono anche articolista e occasionalmente grafico.</p>
                            <p><strong>Qui</strong> è possibile trovare l'elenco degli articoli che ho scritto nell'ultimo anno.</p>
                            <br />
                            <p>Sono un appassionato di <strong>UI/UX design</strong>, soprattutto nel contesto videoludico.</p>
                            <br />
                            <p>Ho un gatto nero, si chiama <strong className="ingagas" onMouseOver={() => this.ingagas(true)} onMouseLeave={() => this.ingagas(false)}>Ingagas</strong>, e tendenzialmente comanda lui.</p>
                            <img className={"ingimg" + this.state.ingagas} src="/images/ingagas.jpg"/>
                            </p>  
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

export default Etc