import axios from 'axios';


//const jwtToken = localStorage.getItem('JWT_TOKEN');
var  UserToken ;
export const Login = data =>{

    return async dispatch => {

        try{
           const res =  await axios.post("http://localhost:5000/auth/login",data);
           UserToken = res.data.token;
           console.log('res',res);
            dispatch({
                   type: "AUTH_SIGN_IN",
                   payload : res.data.token
                  });
            localStorage.setItem('JWT_TOKEN', res.data.token);

         } catch(err) {
                 dispatch({
                     type: "AUTH_ERROR",
                      payload: 'username ou mot de passe invalide'
                     });
                    }

    }
}

export const Calandar = data =>{
    return async dispatch => {
        try{
            const AuthStr = 'Bearer '.concat(UserToken); 
            const res = await axios.get("http://localhost:5000/calandars", { headers: { Authorization: AuthStr } })
            console.log("ici",res.data);
            dispatch({
                type: "CALANDAR_DATA",
                payload : res.data
               });
        }catch(err){
            console.log("ici",err);
            dispatch({
                type: "AUTH_ERROR",
               payload: 'error'
              })
        }

    
    
}
}