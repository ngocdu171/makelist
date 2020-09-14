import React, { Component } from 'react'

class  Form extends Component {

    constructor(props){
        super(props);
        this.handleCancle = this.handleCancle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            taskname: '',
            level: 0
        };
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        let item = {
            name: this.state.taskname,
            level: this.state.level
        };
        this.props.onclickSubmit(item);
        event.preventDefault();
    }

    handleCancle(){
        // alert("testing button Cancel");
        this.props.onclickCancel();
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-offset-7 col-lg-5">
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <input name="taskname" value={this.state.taskname} onChange={this.handleChange}
                            type="text" className="form-control" placeholder="Task Name" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="input" className="sr-only">label</label>
                            <select name="level" value={this.state.level} onChange={this.handleChange}
                             className="form-control" required="required">
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.handleCancle} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Form;