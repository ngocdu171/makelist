import React, { Component } from 'react'
import Search from './Search';
import Sort from './Sort';

class  Control extends Component {
    render(){
        return (
            <div className="row">
                {/* SEARCH */}
                <Search/>
                {/* SORT */}
                <Sort/>
                {/* ADD TASK */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button type="button" className="btn btn-block btn-info">Add Task</button>
                </div>
            </div>
        );
    }
}
export default Control;