import React , { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import CustomInput from './CustomInput';

import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions'; 
 

class Login extends Component{

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

    async onSubmit(fromData){
        console.log('ok', this.props.errorMessage);
        console.log('fromData', fromData);
        // action 
        await this.props.Login(fromData);
        if (!this.props.errorMessage) {
          this.props.history.push('/calandar');
        }

    }
    render(){

        const { handleSubmit } = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <div className ="col-md-6 col-md-offset-3">
            <form onSubmit={handleSubmit(this.onSubmit)}>
            
            <fieldset>
              <Field
                name="username"
                type="text"
                id="email"
                label="Enter votre username "
                placeholder="username"
                component={ CustomInput } />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter votre mot de passe "
                placeholder="mot de passe"
                component={ CustomInput } />
            </fieldset>
            
            { this.props.errorMessage ? 
            <div className="alert alert-danger">
              { this.props.errorMessage }
            </div> : null }

            <button type="submit" className="btn btn-primary">Se connecter</button>  

          </form>
          </div>
          </div>
        );
    };

}
  function mapStateToProps(state) {
    return {
      errorMessage: state.auth.errorMessage
    }
  }
  
  export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'login' })
  )(Login)