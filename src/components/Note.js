import React, { Component } from 'react';

export default class Note extends Component{
  constructor(props){
    super(props)
    this.state = {
      noteActive: this.props.active,
      inputValue: this.props.name
    }
  }
  inputChangeHandler(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  reestablisheNote(){
    this.setState({
      noteActive: true
    })
  }
  removeNote(){
    this.setState({
      noteActive: false
    })
  }
  render(){
    let bottomBtn;
    let styles;
    let that = this;
    if(this.state.noteActive){
      bottomBtn = <button onClick={that.removeNote.bind(that)}>Удалить заметку</button>
      styles = {}
    } else{
      bottomBtn = <button onClick={that.reestablisheNote.bind(that)}>Восстановить заметку</button>
      styles = {color: 'transparent'}
    }
    return(
      <li className="note">
        <span>{this.props.index}</span>
        <input style={ styles } disabled={!this.state.noteActive} onChange={this.inputChangeHandler.bind(this)} value={this.state.inputValue} type='text'/>
        {bottomBtn}
      </li>
    )
  }
}
