import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Installation =()=>{
    return (
        <div>
            <div style={{backgroundColor:'lightgrey', marginLeft:'55px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src= {require('./tame.jpg')}  id="tame" style={{width:'30%'}}/>
                    <p style={{marginLeft:'5px'}}>Le terrain de football américain est disponible à la location pour un prix plus qu'abordable. 
                        Vous pouver y inviter autant de personnes que vous voulez. Vouz devez néanmoins respecter les normes de propreté.
                        Vouz pouvez choisir entre trois jours, Lundi, Mardi, Jeudi. Peu importe le nombre de personnes sur le terrain, la location coutera 30$/heure.
                    </p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p style={{textAlign:'right', marginRight:'5px'}}>Le terrain de BasketBall est disponible à la location. Vous pouvez y inviter au maximum 15 personnes. 
                        Vouz devez cependant porter des baskets propre pour ne pas affecter le parquet. Il est interdit d'apporter de la nourriture sur le terrain.
                        Peu importe le nombre de personnes sur le terrain, la location coutera 30$/heure.
                    </p>
                    <img src= {require('./tbask.jpg')}  id="tbask" style={{width:'30%'}}/>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src= {require('./tfoot.jpg')}  id="tfoot" style={{width:'30%'}}/>
                    <p style={{marginLeft:'5px'}}>Le terrain de soccer est disponible à la location. 
                        Vous pouver y inviter autant de personnes que vous voulez. Nous vous suggérons d'apporter vos propres crampons.
                        Si non-réservé le terrain est disponible pendant tout les jours de la semaine.
                        Peu importe le nombre de personnes sur le terrain, la location coutera 545$/heure.
                    </p>
                </div>
            </div>
        </div> 
                   
    );
}



export default Installation