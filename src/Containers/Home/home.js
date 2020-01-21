import React from 'react'
import Appbar from '../../Components/Appbar/appBar'
import {FirebaseApp} from './../../Config/Firebase/firebase'

class Home extends React.Component{

    

    componentDidMount=()=>{
        FirebaseApp.auth().onAuthStateChanged((user)=> {
          if (user) {
            if(user.emailVerified){
              this.props.history.push("/home")
            }
            else{
              this.props.history.push("/verification")
            }
            
          } else {
            this.props.history.push("/")
          }
        });
      }



    render(){
        return(
           
            <Appbar/>
    
        )
    }
}
export default Home