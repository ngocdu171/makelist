import React, { Component } from 'react'

class  Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearch: ''
        };        
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.props.tam
    }

    handleSearch(){
        // alert(this.state.strSearch); //read strSearch
        this.props.tam(this.state.strSearch);
    }
    handleClear(){
        this.setState({strSearch:''});
        this.props.tam('');
    }
    handleChange(event){
        this.setState({strSearch: event.target.value}); //update strSearch by value of input text
    }

    render(){
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control"
                    value={this.state.strSearch} onChange={this.handleChange}
                     placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleSearch} type="button" className="btn btn-info">Go!</button>
                        <button onClick={this.handleClear} type="button" className="btn btn-warning">Clear</button>
                    </span>
                </div>
            </div>
        );
    }
}
export default Search;