import React, { Component } from 'react';

class FormNote extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleInput(event) {
    //this.setState cambiamos el estado inicial que hay en el constructor    
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddNote(this.state)
    console.log('sendeing data...')
  }

  render(){
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="Responsible"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            New
          </button>
        </form>
      </div>
    )
  }
}

export default FormNote;