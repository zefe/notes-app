import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation';
import { notes } from './notes-data.json'

import FormNote from './components/form-note';
import NoteDetails from './components/note-details';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      notes,
      title: 'Aplicacion de Notas'
    }
    this.handleAddNote = this.handleAddNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }
  handleAddNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }  
  removeNote(title){
    console.log(title);
    this.setState({
      notes: this.state.notes.filter(
        (item, i) => { return item.title !== title }
      )
    })
  }

  render() {
    const listNotes = this.state.notes;
    return (
      <div className="App">
        <Navigation  title={this.state.title} length={this.state.notes.length}/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <FormNote onAddNote={ this.handleAddNote }/>
            </div>
            <div className="col-md-8">
              <div className="row">
              {
                listNotes.map((item, index)=>{       
                  return <NoteDetails {...item} key={index} removeNote={this.removeNote}  />
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
