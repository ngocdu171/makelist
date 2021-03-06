import React, { Component } from 'react'

class  Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            //
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    showElementLevel(level){
        let a = <span className="label label-default">Small</span>;
        if (level === 2){
            a = <span className="label label-danger">High</span>;
        }
        else if (level === 1){
            a = <span className="label label-info">Medium</span>;
        }
        return a;
    };

    handleEdit(item){
        this.props.onclickEdit(item);
    }

    handleDelete(item){
        this.props.onclickDelete(item);
    }

    render(){
        // let item = this.props.item;
        let {item} = this.props; // instead of let item = this.props.item
        let {index} = this.props;
        // let a = <span className="label label-default">Small</span>;  //above we write function
        // if (item.level === 2){
        //     a = <span className="label label-danger">High</span>;
        // }
        // else if (item.level === 1){
        //     a = <span className="label label-info">Medium</span>;
        // }                                                            //above we write function
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                    <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default Item;