import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

//Basee sur https://css-tricks.com/the-magic-of-react-based-multi-step-forms/

class Inscription extends React.Component {
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
        sport:  '',
        equipe:  '',
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
      const { email, quantite, firstname, lastname, address, city, province, country, postalcode, sport, equipe} = this.state
      alert(`Votre demande a été envoyée: \n 
             Email: ${email} 
             Nombre d'heure: ${quantite}
             Prenom: ${firstname}
             Nom de famille: ${lastname}
             Addresse: ${address}
             Ville: ${city}
             Province: ${province}
             Pays: ${country}
             Sport:${sport}
             Equipe: ${equipe}
             Code Postal: ${postalcode}
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
    if(currentStep ==2){
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
    if(currentStep <2){
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
        <h1 style={{marginLeft:'250px'}}>Inscription dans une équipe</h1>
        <p style={{marginLeft:'80px'}}>Étape {this.state.currentStep}/2 </p> 
  
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
        <label htmlFor="sport">Equipement desire</label>
        <input
          className="form-control"
          id="sport"
          name="sport"
          type="text"
          placeholder="Entrer le sport dans lequel vous voulez vous inscrire vous ou votre enfant."
          value={props.sport}
          onChange={props.handleChange}
        />
        <label htmlFor="equipe">Autre equipement (facultatif)</label>
        <input
          className="form-control"
          id="equipe"
          name="equipe"
          type="text"
          placeholder="Entrez le niveau dans lequel votre enfant va participer"
          value={props.equipe}
          onChange={props.handleChange}
        />
      </div>
    );
  }
  
  
  
    
  
export default Inscription