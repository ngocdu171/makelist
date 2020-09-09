import React, { Component } from 'react'
import Search from './Search';
import Sort from './Sort';

class  Control extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(){
        this.props.onclickAdd();
    }

    render(){
        let Elebutton = <button onClick={this.handleAdd} type="button" className="btn btn-block btn-info">Add Task</button>
        if (this.props.isShowForm === true) {
            Elebutton = <button onClick={this.handleAdd} type="button" className="btn btn-block btn-success">Close Task</button>
        }
        return (
            <div className="row">
                {/* SEARCH */}
                <Search tam ={this.props.onclickSearchGo}/>
                {/* SORT */}
                <Sort/>
                {/* ADD TASK */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {Elebutton}
                </div>
            </div>
        );
    }
}
export default Control;