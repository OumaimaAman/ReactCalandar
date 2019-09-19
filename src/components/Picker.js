import React, { Component} from 'react';
import Calendar from 'react-calendar';
import { reduxForm , Field} from 'redux-form';

import { connect } from 'react-redux';
import { compose } from 'redux';
import CalandarInput from './CustInput';

import * as actions from '../actions';

class Picker extends Component{

    constructor(props){
        super(props);
        this.props =props;
        this.onSubmit = this.onSubmit.bind(this);
      }
          
      async onSubmit(fromData){
        console.log('ok', this.props.errorMessage);
        console.log('fromData', fromData);
        // action 
     /*   await this.props.postCalndar(fromData);
        if (!this.props.errorMessage) {
            window.location.reload();
        }*/

    }
        

    state = {
        date : new Date(),
        showDate : false
    }

    onChange = date =>{
        this.setState({
            date : date      
        })
    }


    reset = () =>{
        this.setState({
            showDate : false      
        })

    }
    validation= ()=> {
        this.setState({
            showDate : true      
        })
        this.props.change('dateDebut',this.state.date[0].toLocaleDateString())
        this.props.change('dateFin',this.state.date[1].toLocaleDateString())
    }

    render(){
        const { handleSubmit } = this.props;
        return(
        <div>
           
            <div onClick= {this.reset}>
                <Calendar 
                onChange = { this.onChange }
                selectRange ={true}
                value = {this.state.date}
                /></div>
            <button  onClick={this.validation} className="btn btn-primary" > valider</button>

                {this.state.showDate ? (
                    <div>
                        <fieldset>
                            <Field
                                 name="dateDebut"
                                 type="text"
                                 label="Du :"
                                component= { CalandarInput }/>
                         </fieldset>
                         <fieldset>
                             <Field
                                 name="dateFin"
                                 type="text"
                                 label="A: "
                                component={ CalandarInput } /> 
                       </fieldset>
                       <fieldset>
                         <Field
                          name="libelle"
                          type="text"
                         label="Libelle "
                         placeholder="Libelle"
                        component={ CalandarInput } />
                     </fieldset>
                        {/*<p>Du : {this.state.date[0].toLocaleDateString()}</p>
                        <p>A : {this.state.date[1].toLocaleDateString()}</p>
                <p>libelle  <input type="text" name="libelle" /> </p>*/}
                <form onSubmit={handleSubmit(this.onSubmit)}>
                        <button  type="submit" className="btn btn-primary" > Ajouter</button>
                       
                        </form>
                    </div>
                ) : null }  
</div>
          

        )

}
}
 function mapStateToProps(state) {
    return {
      errorMessage: state.auth.errorMessage
    }
  }
  
  export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'calandar' })
  )(Picker)