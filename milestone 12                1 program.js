import React, { component} From ...'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends component {
    render(){
        return(
            <div className="App">
                <Greet name="Bruce" heroName="Batman"/>
                <Greet name="clark" heroName="superman"/>
                <Greet name="Diana" heroName="Wonder Woman"/>
                {/* <Welcome /> */}
                 {/* <Hello /> */}
            </div>
        );
    }
}
