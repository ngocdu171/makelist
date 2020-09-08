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
            items: items,
            isShowForm: true
        }
        this.handleToggleForm = this.handleToggleForm.bind(this);
    }

    handleToggleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    render() {
        let items = this.state.items;
        let eleForm = null;
        if(this.state.isShowForm === true){
            eleForm = <Form/>;
        }
        return (
            <div>
                {/* TITLE */}
                <Title/>
                {/*CONTROL(SEARCH + SORT + ADD TASK) */}
                <Control onclickAdd={this.handleToggleForm}/>
                {/* FORM */}
                {eleForm}
                {/* LIST TASK (ITEM) */}
                <List items={items} />
            </div>
        );
    }
}

export default App;