import React, {Component} from 'react';

class NoteDetails extends Component{

  handleClick = (event) => {
    this.props.removeNote(this.props.title)
    console.log(this.props.title)
  }

  render(){
    return(      
      <div className="col-md-4 mt-4" >
        <div className="card mt-4">
          <div className="card-header text-center">
            <h3>{this.props.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              { this.props.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{this.props.description}</p>                           
          <small><strong>{this.props.responsible}</strong></small>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={this.handleClick}>
              Delete
            </button> 
          </div>
        </div>
      </div>
    )
  }
}

  export default NoteDetails;