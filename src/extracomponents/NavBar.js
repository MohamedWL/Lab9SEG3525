import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'


const NavBar = () =>{ 
    
    
    return(
        <nav className="menu">
            <img className="logoapp" style={{width : '310px',resize:'inherit'}}/>

            <div>
                <ul className="divs">
                    
                    <button className="recherche1"><Link className="lien2" to="/home">Accueil</Link></button>
                    <button className="recherche"><Link className="lien" to="/installation" >Voir les installations disponibles</Link></button>
                    <button className="recherche"><Link className="lien" to="/equipement">Voir les equipements disponibles</Link></button>
                    <button className="recherche"><Link className="lien1" to="/equipe">Voir les equipes participantes</Link></button>
                    <button className="recherche1"><a className="lien2" href="#">Reserver une installation</a></button>
                    <button className="recherche1"><a className="lien2" href="#">Acheter/Louer des équipements</a></button>
                    <button className="recherche1"><a className="lien2" href="#">Acheter/Louer des équipements</a></button>

                </ul> 
                <Footer1/>
            </div>
        </nav>
    );
}

class Footer1 extends Component{
    render(){
        return(
                    <div className="cmon" style={{background:'black'}}>
                        <div className="SuivezNous" style={{color:'white'}}>
                            <ul >
                                <li>
                                    Suivez nous    
                                </li>
                                <li>
                                    Facebook :
                                </li>
                                <li>
                                    Instagram :
                                </li>
                                <li>
                                    Twitter :
                                </li>
                                
                            </ul>
                        </div>
                        <div className="Horaire" style={{color:'white'}}>
                            <ul >
                                <li>
                                    Horaire de Bureau
                                </li>
                                <li>
                                    -Lundi 11h30 - 19h
                                </li>
                                <li>
                                    -Mardi 12h - 21h
                                </li>
                                <li>
                                    -Mercredi 12h - 21h
                                </li>
                                <li>
                                    -Jeudi 12h - 20h
                                </li>
                                <li>
                                    -Vendredi 11h30 - 20h
                                </li>
                            </ul>
                        </div>
                        <div className="Infos" style={{color:'white'}}>
                            <ul>
                                <li>
                                    Gatineau
                                </li>
                                <li>
                                    Telephone: 819-123-4567
                                </li>
                                <li>
                                    Courriel: info@fabriquesportive.ca
                                </li>
                            </ul>
                        </div>
                        <div className="communaute" style={{color:'white'}}>
                            <ul>
                                <li>
                                    Communauté
                                </li>
                                <li>
                                    Staff
                                </li>
                                <li>
                                    À Propos
                                </li>
                            </ul>
                        </div>
                    </div>     
        );
    }
}



export default NavBar
