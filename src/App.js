import React, { Component } from 'react';
import './App.css';
import './index.css';
import axios from 'axios';

import Display from "./components/Display"
import Header from "./components/stateless/Header"
import Background1 from './components/stateless/Background1';
import UpdateBox from './components/UpdateBox';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      newTitle: ""
    }
    this.getAllVids = this.getAllVids.bind(this);
    this.addVid = this.addVid.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
    this.changeHandlerTitle = this.changeHandlerTitle.bind(this);
    this.changeHandlerVidId = this.changeHandlerVidId.bind(this);
    this.changeHandlerNewTitle = this.changeHandlerNewTitle.bind(this);
    
  }
// Get/Post
  componentDidMount(){
    this.getAllVids()
  }

  getAllVids(){
    axios.get("/api/home")
    .then (response => {
      this.setState({
        videos: response.data
      })
    })
    .catch(err => console.log(err))
  }

  addVid(){
    const newVid = {
      id: this.state.id,
      title: this.state.title,
      vidId: this.state.vidId
    }

    axios.post("/api/home", newVid)
    .then (response => {
      this.setState({
        videos: response.data
      })
    })
    .catch(err => console.log(err))
  }

//PUT or UPDATE
  updateVideo(title, id, vidId){
    console.log(title, id, vidId)
    axios.put(`/api/home/${id}`, {title, vidId})
    .then(response => {
      console.log(response)
      this.setState({
        videos: response.data
      })
    })
    .catch(err => console.log(err))
  }

// DeleteHandler
deleteVideo(id){
  axios.delete(`/api/home/${id}`)
  .then(response => {
    this.setState({
      videos: response.data
    })
  })
  .catch(err => console.log(err))
}

//Change Handlers
  changeHandlerTitle(event){
    this.setState({
      title: event.target.value
    })
  }
  
  changeHandlerVidId(event){
    this.setState({
      vidId: event.target.value
    })
  }

  changeHandlerNewTitle(event){
    this.setState({
      newTitle: event.target.value
    })
  }
 
  render(){
    console.log(this.state)
  return (
    <div className="App">
      <Background1 />

      <Header />

      <Display 
      videos={this.state.videos}
      title={this.state.newTitle}
      changeHandlerNewTitleFn={this.changeHandlerNewTitle}
      deleteVideoFn={this.deleteVideo}
      updateVideoFn={this.updateVideo}/>

      {<UpdateBox 
      videos={this.state}
      changeHandlerTitleFn={this.changeHandlerTitle}
      changeHandlerVidIdFn={this.changeHandlerVidId}
      addVidFn={this.addVid}
      updateVideoFn={this.updateVideo}
     
      />}   
    </div> 
    );
  }
}

export default App;
