import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Equipe =()=>{
    return (
        <div>
            <div style={{backgroundColor:'lightgrey', marginLeft:'55px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src= {require('./u10.jpg')}  id="u10" style={{width:'30%'}}/>
                    <p style={{marginLeft:'5px'}}>Équipes U10 filles ou garcons. Un entrainement par semaine. Un tournoi en été sur tiers de terrain.
                    </p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p style={{textAlign:'right', marginRight:'5px'}}>
                        Équipes U13 filles ou garcons. Deux entrainements par semaine. Un match par semaine. Un tournoi en été sur moitié de terrain.
                    </p>
                    <img src= {require('./u13w.jpg')}  id="u13w" style={{width:'30%'}}/>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src= {require('./u16.jpg')}  id="u16" style={{width:'30%'}}/>
                    <p style={{marginLeft:'5px'}}>
                        Équipes U16 filles ou garcons. Trois entrainements par semaine. Un match par semaine. Deux tournois, un au printemps, un en été sur moitié de terrain.
                    </p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p style={{marginLeft:'5px'}}>
                        Équipes U20 filles ou garcons. Quatre entrainements par semaine. Un match par semaine. Championnat et deux tournois, un tournoi au printemps et un en été.
                    </p>
                    <img src= {require('./esoccer.jpg')}  id="esoccer" style={{width:'22%'}}/>
                </div>
            </div> 
        </div>
    );
}

export default Equipe