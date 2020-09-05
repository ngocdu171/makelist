import React, { Component } from 'react'

class  Form extends Component {
    render(){
        return (
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
        );
    }
}
export default Form;