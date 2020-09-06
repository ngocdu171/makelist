import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    name: "Abc",
                    level: 0 // Small
                },
                {
                    name: "Def",
                    level: 1 // Medium
                },
                {
                    name: "Ghj",
                    level: 2 // High
                }
            ]
        }
    }
    render() {
        // console.log(this.state.items);
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
                <List items={items}/>
            </div>
        );
    }
}

export default App;
