import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuOpened: false
    };
  }
  menuOpenHandler(){
    this.setState({
      menuOpened: true
    })
  }
  menuCloseHandler(){
    this.setState({
      menuOpened: false
    })
  }
  addNote(){
    this.props.createNote()
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.menuOpenHandler.bind(this)}>Открыть меню</button>
        <div className='Notes' data-active={this.state.menuOpened}>
          <button onClick={this.addNote.bind(this)}>Добавить заметку</button>
          <button onClick={this.menuCloseHandler.bind(this)}>Закрыть меню</button>
          <Notes/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    NoteList: state
  }),
  dispatch => ({
    createNote: (note) =>{
      dispatch({ type: 'CREATE_NOTE', payload: note});
    }
}))(App)
