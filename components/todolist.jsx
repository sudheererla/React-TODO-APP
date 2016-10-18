import React from 'react'
import { connect } from 'react-redux'

import AddNewItem from './AddNewItem'
import { addItem, deleteItem } from '../actions'

const style ={
    bsStyle:"primary",
    bsSize:"large",
    color:'red'
}


const Todos = ({q, dispatch}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
      <div>
          <h1 style={{display: 'flex', justifyContent: 'center', color: 'purple'}}>Sample To Do MVC App</h1>
          <AddNewItem onChange={e => {
      if(e.keyCode == 13){
        dispatch(addItem(e.target.value))
        e.target.value = ''
      }
    }}/>
          {q.map((p, q) => <p style={{display: 'flex', justifyContent: 'center', padding:'10px'}} key={q}>{p} &nbsp;&nbsp; <button style={style} onClick={e => {
      dispatch(deleteItem(q))
    }}>Delete</button></p>)}
      </div>
    
  </div>
)

function addState(q) {
  return {
    q
  }
}

export default connect(addState)(Todos)
