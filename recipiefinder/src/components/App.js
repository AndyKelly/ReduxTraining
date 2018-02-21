import React, {Component} from 'react';
import SearchRecipies from './SearchRecipies';
import '../styles/index.css'

class App extends Component{
    render(){
        return (
            <div>
                <h2>Recipie Finder</h2>
                <SearchRecipies/>
            </div>
        )
    }
}

export default App;