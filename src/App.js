import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* TITLE */}
                <Title/>
                {/*CONTROL(SEARCH + SORT + ADD TASK) */}
                <Control/>
                {/* FORM */}
                <Form/>
                {/* LIST TASK (ITEM) */}
                <List/>
            </div>
        );
    }
}

export default App;
