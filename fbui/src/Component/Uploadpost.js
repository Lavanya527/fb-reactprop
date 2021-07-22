import React from 'react'
import { useState } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Avatar } from '@material-ui/core'

const Uploadpost = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
    const onTrigger = (e) => {
        e.preventDefault();
        props.sub(e.target.elements.postdata.value);
     }
     
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
    return (
        <>
            <div>
                <div className="box1">
                    <Avatar className="per4"/>
                    <input type="text" className="input6" onClick={onOpenModal} />
                    <hr className="hori2" />
                    <div className="box2">
                        <span> <AddToPhotosIcon className="pic3" /></span>
                        <span> <LocationOnIcon  className="pic3" /></span>
                        <span> <PersonAddIcon className="pic3" /></span>
                            <span> <InsertEmoticonIcon className="pic4" /></span>
                        </div>
                    </div>
                <Modal open={open} onClose={onCloseModal} style={customStyles}
                center>
               
                <form onSubmit = {onTrigger}>
                <input type = 'text'
                className = "input2"
                placeholder = "What's on your mind?"
                name="postdata"/>
                     <input className="input3" type = "submit" value = "Submit"/>
                    </form>
                        <div className="box2">
                        <span> <AddToPhotosIcon className="pic3" /></span>
                        <span> <LocationOnIcon  className="pic3" /></span>
                        <span> <PersonAddIcon className="pic3" /></span>
                            <span> <InsertEmoticonIcon className="pic4" /></span>
                        </div>
                </Modal>
            </div>

            </>
       
    )
}

export default Uploadpost
