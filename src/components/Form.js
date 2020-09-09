import React, { Component } from 'react'

class  Form extends Component {

    constructor(props){
        super(props);
        this.handleCancle = this.handleCancle.bind(this);
    }

    handleCancle(){
        // alert("testing button Cancel");
        this.props.onClickCancel();
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-offset-7 col-lg-5">
                    <form method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <input type="text" className="form-control" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input" className="sr-only">label</label>
                            <select id="input" className="form-control" required="required">
                                Small
                                <option value={1}>Medium</option>
                                <option value={2}>Large</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button onClick={this.handleCancle} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Form;