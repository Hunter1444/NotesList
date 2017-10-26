import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';

class Notes extends Component{
  render(){
    let NoteList = this.props.NoteList.map(function(item, index){
      return(
        <Note active={item.active} name={item.name} index={index + 1} key={index}/>
      )
    })
    return(
        <ul className='noteList'>
          {NoteList}
        </ul>
    )
  }
}

export default connect(
  state => ({
    NoteList: state
  }),
)(Notes)
