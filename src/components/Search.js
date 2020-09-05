import React, { Component } from 'react'

class  Search extends Component {
    render(){
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control" id="exampleInputAmount" placeholder="Search" />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default">Go!</button>
                    </span>
                </div>
            </div>
        );
    }
}
export default Search;