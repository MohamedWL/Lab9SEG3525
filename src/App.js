import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Installation from './extracomponents/Installation'
import Equipe from './extracomponents/Equipe'
import Equipement from './extracomponents/Equipement'
import Home from './extracomponents/Home'
import Rinstall from './extracomponents/Rinstall'
import AEquipe from './extracomponents/AEquipe'
import {Link, NavLink} from 'react-router-dom'
import Inscription from './extracomponents/Inscription'






class App extends Component {

    render() {

        return (
            
                <BrowserRouter>
                    <div className="container " style={{backgroundColor:'white'}}>
                        <Basic/>
                        <Route path='/inscription' component={Inscription}/>
                        <Route path='/aequipe' component={AEquipe}/>
                        <Route path='/reservInstall' component={Rinstall}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/installation' component={Installation}/>
                        <Route path='/equipe' component={Equipe}/>
                        <Route path='/equipement' component={Equipement}/>
                    </div>  
                </BrowserRouter>
        
        );
    }
}

class Basic extends Component{
    render(){
        return(
            
                <nav className="menu">
                    
        
                    <div>
                        <ul className="divs">
                            
                            <img src={require('./logo.png')} id="logo" style={{width:'10%', height:'50%'}}/>
                            <button className="recherche1"><Link className="lien2" to="/home" style={{display:'inline'}}>Accueil</Link></button>
                            <button className="recherche"><Link className="lien" to="/installation" >Voir les installations disponibles</Link></button>
                            <button className="recherche"><Link className="lien" to="/equipement">Voir les equipements disponibles</Link></button>
                            <button className="recherche"><Link className="lien1" to="/equipe">Voir les equipes participantes</Link></button>
                            <button className="recherche1"><Link className="lien2" to="/reservInstall">Reserver une installation</Link></button>
                            <button className="recherche1"><Link className="lien2" to="/aequipe">Acheter des équipements</Link></button>
                            <button className="recherche1"><Link className="lien2" to="/inscription">Inscription dans une équipe</Link></button>
        
                        </ul> 
                        <Footer/>
                    </div>
                </nav>
        );
    }
}

class Footer extends Component{
    render(){
        return(
                    <div className="cmon" style={{background:'black', marginTop:'883px', marginLeft:'0px', height:'310px'}}>
                        <div className="SuivezNous" style={{color:'white'}}>
                            <ul >
                                <li style={{fontSize:'25px'}}>
                                    Suivez nous    
                                </li>
                                <br></br>
                                <li style={{fontSize:'15px'}}>
                                    Facebook :
                                </li>
                                <br></br>
                                <li>
                                    Instagram :
                                </li>
                                <br></br>
                                <li>
                                    Twitter :
                                </li>
                                
                            </ul>
                        </div>
                        <div className="Horaire" style={{color:'white'}}>
                            <ul >
                                <li style={{fontSize:'25px'}}>
                                    Horaire de Bureau
                                </li>
                                <br></br>
                                <li>
                                    -Lundi 11h30 - 19h
                                </li>
                                <br></br>
                                <li>
                                    -Mardi 12h - 21h
                                </li>
                                <br></br>
                                <li>
                                    -Mercredi 12h - 21h
                                </li>
                                <li>
                                    -Jeudi 12h - 20h
                                </li>
                                <br></br>
                                <li>
                                    -Vendredi 11h30 - 20h
                                </li>
                            </ul>
                        </div>
                        <div className="Infos" style={{color:'white'}}>
                            <ul>
                            
                                <li style={{fontSize:'25px'}}>
                                    Nous contacter
                                </li>
                                <br></br>
                                <li>
                                    Gatineau
                                </li>
                                <br></br>
                                <li>
                                    Telephone: 819-123-4567
                                </li>
                                <br></br>
                                <li>
                                    Courriel: info@fabriquesportive.ca
                                </li>
                            </ul>
                        </div>
                        <div className="communaute" style={{color:'white', width:'170px'}}>
                            <ul>
                                <li style={{fontSize:'25px'}}>
                                    À Propos
                                </li>
                                <br></br>
                                <li>
                                    Communauté
                                </li>
                                <br></br>
                                <li>
                                    Staff
                                </li>
                                <br></br>
                                
                            </ul>
                        </div>
                    </div>     
        );
    }
}

export default App;