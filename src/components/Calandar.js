import React ,{ Component }from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Clandar extends Component {

    constructor(props){
        super(props)
        this.props.Calandar();
    }
render(){

    return(
        <div>
            <h2>Calandar</h2>
            <h3> data : { this.props.calandars.length }</h3>
        </div>
    );
}

}
    
function mapStateToProps(state) {
    return {
      calandars : state.cal.data
    }
  }
  
export default compose(
    connect(mapStateToProps, actions))(Clandar)