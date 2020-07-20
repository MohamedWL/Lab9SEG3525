import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

//Basee sur https://css-tricks.com/the-magic-of-react-based-multi-step-forms/

class AEquipe extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:'',
        firstname:'',
        lastname:'',
        address:'',
        city:'',
        province:'',
        country:'',
        postalcode:'',
        option1:  '',
        option2:  '',
        option3:  '',
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
      const { email, quantite, firstname, lastname, address, city, province, country, postalcode, cardtype, cardnumber,expirationdate, nameoncard, option1, option2, option3} = this.state
      alert(`Votre demande a été envoyée: \n 
             Email: ${email} 
             Nombre d'heure: ${quantite}
             Prenom: ${firstname}
             Nom de famille: ${lastname}
             Addresse: ${address}
             Ville: ${city}
             Province: ${province}
             Pays: ${country}
             Card type: ${cardtype}
             Card number: ${cardnumber}
             Equipement 1: ${option1}
             Equipement 2: ${option2}
             Equipement 3: ${option3}
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
        Étape Précédente
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
          className="btn btn-primary float-right" 
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
        <div style={{marginLeft:'0px',border:'1px solid black',borderRadius:'5px'}}> 
          <h1 style={{marginLeft:'0px', textAlign:'center'}}>Réservation d'équipement</h1>
          <p style={{marginLeft:'10px'}}>Étape {this.state.currentStep}/3 </p> 
        </div>
  
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
            option1={this.state.option1}
            option2={this.state.option2}
            option3={this.state.option3}
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
      <div className="form-group" style={{marginLeft:'0px',color:'black', border:'1px solid black',borderRadius:'5px'}}>
        <div style={{padding:'10px'}}>
          <label htmlFor="firstname">Prénom</label>
          <input
            className="form-control"
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Entrez votre prénom"
            value={props.firstname}
            onChange={props.handleChange}
          />
          <label htmlFor="lastname" >Nom de famille</label>
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

      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group" style={{marginLeft:'80px'}}>
        <label htmlFor="option1">Equipement desire</label>
        <input
          className="form-control"
          id="option1"
          name="option1"
          type="text"
          placeholder="Entrez l'equipement que vous voulez acheter et la quantite."
          value={props.option1}
          onChange={props.handleChange}
        />
        <label htmlFor="option2">Autre equipement (facultatif)</label>
        <input
          className="form-control"
          id="option2"
          name="option2"
          type="text"
          placeholder="Si vous desirez autre chose"
          value={props.option2}
          onChange={props.handleChange}
        />
        <label htmlFor="option3">Autre equipement (facultatif)</label>
        <input
          className="form-control"
          id="option3"
          name="option3"
          type="text"
          placeholder="Si vous desirez autre chose."
          value={props.option3}
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
    
  
export default AEquipe