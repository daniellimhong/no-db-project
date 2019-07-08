import React, { Component } from 'react';
// import Youtube from 'react-youtube';
import ReactPlayer from 'react-player';
import "./Display.css"
import DeleteIcon from "./Update&Delete/Icons/DeleteIcon.png"



export default class Display extends Component {

    render(){
    const { deleteVideoFn, changeHandlerNewTitleFn, updateVideoFn } = this.props;
    const { videos } = this.props;
    
        let mappedVideos = videos.map( (video, id) => {
            console.log(video)
            return (
            <div className="Display-container" key={id}>
                
                <div className="Video-title">{video.title}</div>  
                
                <ReactPlayer
                className = 'React-player'
                key = {video.id}
                url = {video.vidId}
                width = "500px"
                height = "250px"
                controls = "true"/> 

                <div className="Update-div">
                    <input 
                    classId="update-input"
                    className="Update-input"
                    onChange={ (event) => changeHandlerNewTitleFn(event) } 
                    value={ this.props.title }
                    placeholder="New Title"
                    /> 
                    <button
                    onClick={() => updateVideoFn(this.props.title, video.id, video.vidId)}
                    >Change Title</button>

                    <img 
                    src={DeleteIcon} 
                    alt="boo" 
                    onClick={ () => deleteVideoFn(id) } 
                    className="Delete"/>
                </div>

                </div>           
            )        
        })

        return (
        <div>
        <div>{mappedVideos}</div>
        </div>
        )
    }
    }




