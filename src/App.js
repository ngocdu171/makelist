import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';
import items from './mocks/Task';
import {filter, includes} from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
            isShowForm: false,
            strSearch: ''
        }
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleToggleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    handleSearch(value){
        this.setState({
            strSearch: value
        });
    }

    closeForm(){
        this.setState({
            isShowForm: false
        });
    }

    render() {
        let itemsOrigin = this.state.items;
        let items = [];
        let eleForm = null;
        const search = this.state.strSearch;

        items = filter(itemsOrigin, (item) => {
            return includes(item.name, search);
        });

        // if(search.length > 0){
        //     itemsOrigin.forEach((item) =>{
        //         if(item.name.toLowerCase().indexOf(search) !== -1){
        //             items.push(item);
        //         }
        //     });
        // }

        // else{
        //     items = itemsOrigin;
        // }

        if(this.state.isShowForm === true){
            eleForm = <Form onClickCancel={this.closeForm}/>;
        }
        return (
            <div>
                {/* TITLE */}
                <Title/>
                {/*CONTROL(SEARCH + SORT + ADD TASK) */}
                <Control 
                    onclickSearchGo={this.handleSearch}
                    onclickAdd={this.handleToggleForm}
                    isShowForm={this.state.isShowForm}/>
                {/* FORM */}
                {eleForm}
                {/* LIST TASK (ITEM) */}
                <List items={items} />
            </div>
        );
    }
}

export default App;