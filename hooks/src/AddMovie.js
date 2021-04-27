import React, { useState } from 'react'
import {Modal,Button} from 'react-bootstrap'

const AddMovie = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [NewMovie,SetNewMovie] = useState({
        id:"",
        title:"",
        Description:"",
        PosterURL:"",
        rating:"",
    })
    const handlechange =(e) =>{
        SetNewMovie({...NewMovie,[e.target.name]:e.target.value})}
    
    const handleSave =()=>{
          props.handleMovieAdd(NewMovie)
            SetNewMovie({
                id:"",
                title:"",
                Description:"",
                PosterURL:"",
                rating:"", 
            })
            setShow(false)
        
    }
    return (
        <div>
    <Button variant="primary" onClick={handleShow}>
       ADD NEW MOVIES
      </Button>

      <Modal show={show} animation={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <input type="texte" name="id" placeholder="id" onChange={handlechange} value={NewMovie.id}  ></input>
    <input type="texte" name="title" placeholder="Title" onChange={handlechange} value={NewMovie.title}></input>
    <input type="texte" name="Description" placeholder="Description" onChange={handlechange} value={NewMovie.Description}></input>
    <input type="texte" name="PosterURL" placeholder="URL" onChange={handlechange} value={NewMovie.PosterURL}></input>
    <input type="texte" name="rating" placeholder="Rating" onChange={handlechange} value={NewMovie.rating}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 


        </div>
    )
}

export default AddMovie
