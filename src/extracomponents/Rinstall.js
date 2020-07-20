import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

//Basee sur https://css-tricks.com/the-magic-of-react-based-multi-step-forms/

class Rinstall extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        firstname:'',
        lastname:'',
        address:'',
        city:'',
        province:'',
        country:'',
        postalcode:'',
        terrain:  '',
        quantite:'',
        cardtype:'',
        cardnumber:'',
        expirationdate:'',
        nameoncard:'',
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, terrain, quantite, firstname, lastname, address, city, province, country, postalcode, cardtype, cardnumber,expirationdate, nameoncard} = this.state
      alert(`Your registration detail: \n 
             Email: ${email} \n 
             Terrain: ${terrain} \n
             Nombre d'heure: ${quantite}\n
             Prenom: ${firstname}\n
             Nom de famille: ${lastname}\n
             Addresse: ${address}\n
             Ville: ${city}\n
             Province: ${province}\n
             Pays: ${country}\n
             Card type: ${cardtype}
             Card number: ${cardnumber}
             Expiration Date: ${expirationdate}
             Code Postal: ${postalcode}
             Name on the Card:${nameoncard}
             Solde Du: ${this.props.quantite}\n`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button style={{marginLeft:'80px',backgroundColor:'Tomato'}}
          className="btn btn-danger" 
          type="button" onClick={this._prev}>
        Étape précédente
        </button>
      )
    }
    return null;
  }
  submitButton() {
    let currentStep = this.state.currentStep;
    if(currentStep ==3){
      return (
        <button style={{marginLeft:'1015px', width:'250px', backgroundColor:'rgb(0,180,0)'}}
          className="btn btn-success" 
          type="button" onClick={this.handleSubmit}>
        Soumission de la demande
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button style={{marginLeft:'1189px',backgroundColor:'DodgerBlue'}}
          className="btn btn-primary float-right" x 
          type="button" onClick={this._next}>
        Suivant
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <h1 style={{marginLeft:'110px'}}>Réservation d'une installation sportive</h1>
        <p style={{marginLeft:'80px'}}>Étape {this.state.currentStep}/3 </p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            address={this.state.address}
            city={this.state.city}
            province={this.state.province}
            country={this.state.country}
            postalcode={this.state.postalcode}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            terrain={this.state.terrain}
            quantite={this.state.quantite}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            cardtype={this.state.cardtype}
            cardnumber={this.state.cardnumber}
            expirationdate={this.state.expirationdate}
            nameoncard={this.state.nameoncard}
          />
          {this.previousButton()}
          {this.nextButton()}
          {this.submitButton()}
  
        </form>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group" style={{marginLeft:'80px'}}>
        <label htmlFor="firstname">Prénom</label>
        <input
          required
          className="form-control"
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Entrez votre prénom"
          value={props.firstname}
          onChange={props.handleChange}
        />
        <label htmlFor="lastname">Nom de famille</label>
        <input
          className="form-control"
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Entrez votre nom de famille"
          value={props.lastname}
          onChange={props.handleChange}
        />
        <label htmlFor="email">Addresse courriel</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
        />
        <label htmlFor="address">Addresse</label>
        <input
          className="form-control"
          id="address"
          name="address"
          type="text"
          placeholder="Entrez votre addresse"
          value={props.address}
          onChange={props.handleChange}
        />
        <label htmlFor="city">Ville</label>
        <input
          className="form-control"
          id="city"
          name="city"
          type="text"
          placeholder="La ville ou vous habitez"
          value={props.city}
          onChange={props.handleChange}
        />
        <label htmlFor="province">Province</label>
        <input
          className="form-control"
          id="province"
          name="province"
          type="text"
          placeholder="La Province/État ou vous habitez"
          value={props.province}
          onChange={props.handleChange}
        />
        <label htmlFor="country">Pays</label>
        <input
          className="form-control"
          id="country"
          name="country"
          type="text"
          placeholder="Le pays ou vous habitez"
          value={props.country}
          onChange={props.handleChange}
        />
        <label htmlFor="postalcode">Code Postal</label>
        <input
          className="form-control"
          id="postalcode"
          name="postalcode"
          type="text"
          placeholder="Votre code postal"
          value={props.postalcode}
          onChange={props.handleChange}
        />

      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group" style={{marginLeft:'80px'}}>
        <label htmlFor="terrain">Terrain</label>
        <input
          className="form-control"
          id="terrain"
          name="terrain"
          type="text"
          placeholder="Entrez le terrain que vous voulez réserver."
          value={props.terrain}
          onChange={props.handleChange}
        />
        <label htmlFor="quantite">Nombre d'heure</label>
        <input
          className="form-control"
          id="quantite"
          name="quantite"
          type="text"
          placeholder="En heures, pendant combien de temps allez vous rester?."
          value={props.quantite}
          onChange={props.handleChange}
        />

      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <div className="form-group" style={{marginLeft:'80px'}}>
        <label htmlFor="cardtype">Type de Carte</label>
        <input
          className="form-control"
          id="cardtype"
          name="cardtype"
          type="text"
          placeholder="Entrez le terrain que vous voulez réserver."
          value={props.cardtype}
          onChange={props.handleChange}
        />
        <label htmlFor="cardnumber">Numero de carte</label>
        <input
          className="form-control"
          id="cardnumber"
          name="cardnumber"
          type="text"
          placeholder="En heures, pendar?"
          value={props.cardnumber}
          onChange={props.handleChange}
        />
        <label htmlFor="expirationdate">Expiration</label>
        <input
          className="form-control"
          id="expirationdate"
          name="expirationdate"
          type="text"
          placeholder="En heures, pendar?"
          value={props.expirationdate}
          onChange={props.handleChange}
        />
        <label htmlFor="nameoncard">Nom sur la carte</label>
        <input
          className="form-control"
          id="nameoncard"
          name="nameoncard"
          type="text"
          placeholder="En heures, pendar?"
          value={props.nameoncard}
          onChange={props.handleChange}
        />

      </div>

    );
  }
    
  
export default Rinstall