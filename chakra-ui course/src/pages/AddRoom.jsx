import "./addRoom.css"

import React, {  useState  , useRef, useContext} from 'react';
import { roomInputs } from '../../formSource';
import axios from '../../axios'
import {AuthContext} from "../../context/AuthContext"

const AddRoom = () => {
  const [room, setRoom] = useState({});
  const fileInputRef = useRef(null);

  const {user} = useContext(AuthContext)

  
  const handleChange = (event) => {
    setRoom((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };


  const uploadPhotos = ()=> {
    
    const formData =new FormData()

    for (let i = 0; i < fileInputRef.current.files.length; i++) {
      formData.append('photos',  fileInputRef.current.files[i]);
    }

    try{
      const path = `/upload/room_pictures/${room['owner_name']}/${room['room_no']}`
      const data = axios.post(path, formData) 

      console.log('user ' , user) ;

      data.then(res=> {
        setRoom(prev => ({...prev , photos : res.data.photoUrls , username  : user.username}))
        alert('files uploaded successfully !!!!! ')
      })
      .catch(err => console.log(err.message))
    }
    catch(err){
      console.log(err)
    }

  }





  const handleSubmit = async (event) => {
    event.preventDefault();

    uploadPhotos();

    try {

      await axios.post("/room/addRoom", room, { timeout: 5000 });
      alert('room is added')


    } catch (err) {

      if (err.code === 'ECONNABORTED') {
        alert('connection taking long time .. check your internet connection')
      } else {
        // handle other errors
        // alert(err.response)
        console.log(err)
      }
    }
  };


  return (
    <div className="addRoom">

      <h1>Add a New Hotel Room</h1>

      <form onSubmit={handleSubmit}>

        <div className="room__inputs">

       
          {roomInputs.map((input) => (

            <div className={`form__group`} id={input.id} key={input.id}>

              {input.type === 'options' ?
                <>
                  <label  >{input.label} </label>
                  <select className="dropdown__menu" required={input.required} onClick={handleChange} id={input.id}>
                    <option className="dropdown__option" disabled> Select Option </option>

                    {input.options_value.map((value , i) => (

                
                      <option
                        value={value}
                        key={value}
                        className={`dropdown__option ${value === room[input.id] ? 'selected' : ''}`}
                      >

           {input.options_label[i]}


                      </option>
                    ))}
                  </select>
                </>
                :
                <>
                  <label htmlFor={input.id}>{input.label}</label>

                  <input
                    type={input.type}
                    id={input.id}
                    onChange={handleChange}
                    required={input.required}
                    placeholder={input.placeholder}
                    pattern={input.pattern?.source}
                    min={input.min}
                    max={input.max}
                  />
                </>
              }
            </div>
          ))}



          <div className="form__group" id="photos" >
            <label htmlFor="photos"  >Select Room photo </label>

            <input
              ref={fileInputRef}
              id="photos"
              type="file"
              multiple
            />

          </div>


        </div>



        <div className="button__container">
          <button type="submit">Add Room</button>
        </div>


      </form>
    </div>
  );
};

export default AddRoom;
