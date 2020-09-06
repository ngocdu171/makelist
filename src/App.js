import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';
import items from './mocks/Task'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items
        }
    }
    render() {
        let items = this.state.items;
        return (
            <div>
                {/* TITLE */}
                <Title/>
                {/*CONTROL(SEARCH + SORT + ADD TASK) */}
                <Control/>
                {/* FORM */}
                <Form/>
                {/* LIST TASK (ITEM) */}
                <List items={items} />
            </div>
        );
    }
}

export default App;
