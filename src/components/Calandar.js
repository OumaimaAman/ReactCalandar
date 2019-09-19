import React ,{ Component }from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Picker from './Picker';
import './calandar.css';
var data = [];
var ind; 
class Clandar extends Component {
  constructor(props){
    super(props);
    this.props= props;
  }
  componentDidMount() {
    this.props.getCalandar()  
  }

  onClickHandler = (event) => {
     ind = event.target.id
    // this.props.
    console.log('idSupprimer',ind);
    }

  renderTableData() {
    let id =0;
     data = Object.values(this.props.calandars)
    return data.map((calandars, index) => {
       const { dateDebut, dateFin, libelle } = calandars 
       return (
          <tr key = {id++ } >
             <td>{dateDebut}</td>
             <td>{dateFin}</td>
             <td>{libelle}</td>
             <td><button>Supprimer</button></td>
          </tr>
       )
    })
 }
   
render(){

    return(       <div className="row">
                  <div className="col">
            <h2> Votre calendrier </h2>
            <br />
            <Picker />
        
                </div>
                <div className="col" onClick={this.onClickHandler} >
                 <h1 id='title'>Liste de vos congés</h1>
                <table id='calendar'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        </div>
    )
}

}
    
function mapStateToProps(state) {
    return {
      calandars : state.cal.data
    }
  }
  
export default compose(
    connect(mapStateToProps, actions))(Clandar)