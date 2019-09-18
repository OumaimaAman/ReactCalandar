import React , { Component } from 'react';
import { connect } from 'react-redux';

export default ( OriginalCompement ) =>{

        class MixedCompoment extends Component {

            chekAuth(){
                if ( !this.props.isAuth && !this.props.jwbToken)
                this.props.history.push('/');
            }

            componentDidMount(){
               this.chekAuth();
            }
            componentDidUpdate(){
               this.chekAuth();
                
            }

            render(){
                return<OriginalCompement />
            }

        }

        function mapStateToProps(state){
            return {
                isAuth : state.auth.isAuthenticated,
                jwbToken : state.auth.token
            }
        }
        return connect(mapStateToProps)(MixedCompoment);
};