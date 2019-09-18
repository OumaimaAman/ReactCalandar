import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions' 

 class Heardr extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '30px' }}>
            <Link className="navbar-brand" to="/">ONE CLICK FLARE</Link>
    
            <div className="collapse navbar-collapse">
    
              <ul className="nav navbar-nav ml-auto">
                { !this.props.isAuth ?
                  [<li className="nav-item" key="signup">
                    <Link className="nav-link" to="/login">SE CONNECTER </Link>
                  </li>] : null }
                
              </ul>
            </div>
          </nav>

    );
    }
}
function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated
    };
  }
  
  export default connect(mapStateToProps, actions)(Heardr);