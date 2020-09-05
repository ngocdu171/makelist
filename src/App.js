import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                {/* TITLE */}
                <div className="page-header">
                    <h1>Project 01 - ToDo List<small>ReactJS</small></h1>
                </div>
                {/* SEARCH + SORT + ADD TASK */}
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/* SEARCH */}
                        <div className="input-group">
                            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Search" />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default">Go!</button>
                            </span>
                        </div>
                    </div>
                    {/* SORT */}
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sort by <span className="caret" />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a role="button" href="#">Name ASC</a></li>
                                <li><a role="button" href="#">Name DESC</a></li>
                                <li role="separator" className="divider" />
                                <li><a role="button" href="#">level ASC</a></li>
                                <li><a role="button" href="#">Level DESC</a></li>
                            </ul>
                            <span className="label label-success label-medium">NAME - DESC</span>
                        </div>
                    </div>
                    {/* ADD TASK */}
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-block btn-info">Add Task</button>
                    </div>
                </div>
                {/* FORM */}
                <div className="row">
                    <div className="col-md-offset-7 col-lg-5">
                        <form action method="POST" className="form-inline">
                            <div className="form-group">
                                <label className="sr-only" htmlFor>label</label>
                                <input type="text" className="form-control" id placeholder="Task Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input" className="sr-only">label</label>
                                <select name id="input" className="form-control" required="required">
                                    Small
                                    <option value={1}>Medium</option>
                                    <option value={2}>Large</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-default">Cancel</button>
                        </form>
                    </div>
                </div>
                {/* LIST TASK */}
                <div className="panel panel-success">
                    <div className="panel-heading">List Task</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{width: '10%'}} className="text-center">#</th>
                                <th>Task</th>
                                <th style={{width: '20%'}} className="text-center">Level</th>
                                <th style={{width: '20%'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>khong biet ghi gi nua</td>
                                <td className="text-center"><span className="label label-danger">High</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>khong biet ghi gi nua 2</td>
                                <td className="text-center"><span className="label label-default">Small</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>khong biet ghi gi nua 3</td>
                                <td className="text-center"><span className="label label-info">Medium</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
