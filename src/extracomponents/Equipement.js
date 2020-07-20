import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Equipement =()=>{
    return (
        <div>
            <div style={{backgroundColor:'lightgrey', marginLeft:'55px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src= {require('./eame.jpg')}  id="eame" style={{width:'30%'}}/>
                    <p style={{marginLeft:'5px'}}>Épaulette de football américain disponible en deux tailles: Adulte et enfant qui coûtent respectivement 159$ et 50$.
                    </p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p style={{textAlign:'right', marginRight:'5px'}}>Ces basket sont disponibles pour toutes les tailles entre 6 et 14. Si vous voulez économiser, 
                    vous pouver aussi acheter des paires usagers remis à neuf par nos experts
                    </p>
                    <img src= {require('./ebasket.jpeg')}  id="ebasket" style={{width:'30%'}}/>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src= {require('./esoccer.jpg')}  id="esoccer" style={{width:'30%'}}/>
                    <p style={{marginLeft:'5px'}}>
                        Variété d'équipements de soccer disponibles à l'achat. Le ballon et le protège-tibi coûtent 50$ chacun. Les crampons coûtent 110$.
                        Vous pouvez acheter le tout à 160$ dans le cas pour des équipements usagers remis à neuf ou 190$.
                    </p>
                </div>
            </div>            
        </div>
     
    );
}

export default Equipement