import React from 'react'
import { connect } from 'react-redux'

const AddNewItem = ({onChange}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <h3 style={{margin:'5px',color:'green'}}>Enter the text to save?</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
)

export default AddNewItem
