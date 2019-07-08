import React, { Component } from 'react'
import "./UpdateBox.css";

  

export default class UpdateBox extends Component {

  render(){
    const { vidId, title } = this.props
    const { changeHandlerTitleFn, changeHandlerVidIdFn, addVidFn, } = this.props 

    return(
    <div>
        <div
    className="Popup">

    <div className="Model-content">
    
    <form>
    <a className="In-input"> Add</a>
    <br/>

    {/* Add */}
    <input 
    onChange={ changeHandlerTitleFn } 
    value={title} 
    placeholder="Title"/>

    <input 
    onChange={ changeHandlerVidIdFn } 
    value={vidId} 
    placeholder="URL"/>

    <button onClick={ addVidFn }>Add New Video</button>     
    </form>
    </div>
</div>
        
    </div>
    
    )
    }
}