import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';
import {filter, includes, orderBy as functionorderBy, remove, reject} from 'lodash';
const { v4: uuidv4} = require('uuid');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'asc',
            itemselected: null
        };
        this.handleToggleForm   = this.handleToggleForm.bind(this);
        this.closeForm          = this.closeForm.bind(this);
        this.handleSearch       = this.handleSearch.bind(this);
        this.handleSort         = this.handleSort.bind(this);
        this.handleDelete       = this.handleDelete.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
        this.handleEdit         = this.handleEdit.bind(this);
    }

    UNSAFE_componentWillMount(){
        let items = JSON.parse(localStorage.getItem('task'));
            this.setState({
            items: items
        })
    }

    handleSubmit(item){
        let {items} = this.state;
        let id = null;
        if(item.id !== ''){
            items = reject(items, { id: item.id });
             id= item.id;
        }
        else{
                id= uuidv4()
            }
        items.push({
            id: id,
            name: item.name,
            level: +item.level
        })
        this.setState({
            items: items,
            isShowForm: false
        });
        localStorage.setItem('task', JSON.stringify(items));
    }

    handleEdit(item){
        this.setState({
            itemselected: item,
            isShowForm: true
        });
    }

    handleDelete(id){
        let items = this.state.items;
        remove(items, (item) => {
            return item.id === id;
        });
        this.setState({
            items: this.state.items
        });
        localStorage.setItem('task', JSON.stringify(items));
    }

    handleToggleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm,
            itemselected: null
        });
    }

    handleSearch(value){
        this.setState({
            strSearch: value
        });
    }

    handleSort(orderBy, orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    closeForm(){
        this.setState({
            isShowForm: false
        });
    }

    render() {
        let itemsOrigin = [...this.state.items]; // just copy value in array
        let items = [];
        let eleForm = null;
        const search = this.state.strSearch;
        let {orderBy, orderDir, itemselected} = this.state;

        //Search
        items = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase()); //check string contain
        });

        //Sort
        items = functionorderBy(items, [orderBy] , [orderDir]);

        if(this.state.isShowForm === true){
            eleForm = <Form itemselected={itemselected} 
                            onclickSubmit={this.handleSubmit} 
                            onclickCancel={this.closeForm}/>;
        }
        return (
            <div>
                {/* TITLE */}
                <Title/>
                {/*CONTROL(SEARCH + SORT + ADD TASK) */}
                <Control 
                    onclickSort ={this.handleSort}
                    orderBy = {orderBy}
                    orderDir = {orderDir}
                    onclickSearchGo={this.handleSearch}
                    onclickAdd={this.handleToggleForm}
                    isShowForm={this.state.isShowForm}/>
                {/* FORM */}
                {eleForm}
                {/* LIST TASK (ITEM) */}
                <List 
                    onclickEdit={this.handleEdit}
                    onclickDelete={this.handleDelete} items={items} />
            </div>
        );
    }
}

export default App;