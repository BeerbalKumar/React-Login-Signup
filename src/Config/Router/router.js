import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Login,Signup,Home,Varification} from '../../Containers'

export default class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/home" component={Home} />
                    <Route path="/verification" component={Varification} />
                   </div>
            </Router>
        )
    }
}