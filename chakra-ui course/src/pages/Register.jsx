import "./Register.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useContext ,  useState , useEffect } from "react";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { userInputs } from '../../formSource';


const Register = () => {


  const [file, setFile] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [info, setInfo] = useState({});
  // const [state, setState] = useState(null);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()



  const handleChange = (e) => {
    if (e.target.id === 'isOwner') {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value === 'on' ? true : false }));
    }
    else {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };



  useEffect(  () => {

    async function fetchData() {

      if(file){
      const formData = new FormData();
      formData.append('file', file);
      const uploadRes = await axios.post("/upload/profile_picture", formData);
      setImgPath(uploadRes.data.photoUrl)
      }
    }

    fetchData()

  }, [file]);






  const handleSubmit = async (e) => {
    e.preventDefault();

    if(info['password'] !== info['cnf-password']){
      alert('Password does not match ' );
      return
    }

    dispatch({ type: "LOGIN_START" });

    try {

      const res = await axios.post("/auth/register", {...info , "photoUrl" : imgPath  });
      alert("Registration successfull !!!!!!");
      dispatch({type:"LOGIN_SUCCESS" , payload : res.data.userDetails})
      navigate('/')

    } catch (err) {

      switch (err.code) {
        case "ERR_NETWORK":
          dispatch({ type: "LOGIN_FAILURE", payload: 'Internet is not connected to network !!! ' });
          break;

        case "ECONNABORTED":
          dispatch({ type: "LOGIN_FAILURE", payload: 'request takes more time..' });
          break;
      
        default:
          dispatch({ type: "LOGIN_FAILURE", payload:  err.response.data });
          break;
      }
    }


  }


  return (
    <section className="new">
      <div className="newContainer">

        <div className="top">
          <h1 style={{ color: "black", textAlign: "center" }}>Register Yourself</h1>

          <h4> Already Login ? <Link to='/login'>click here  </Link> </h4>
        </div>

        <div className="bottom">


          <div className="left">

            <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
              className="profile_img"
            />

            <div> <b>Profile Photo</b></div>

            <div className="upload_input">

              <label htmlFor="file"  
                style={{ cursor: "pointer" }}
              
              >
                 <DriveFolderUploadOutlinedIcon className="icon"  
                 
                 />
              </label>

              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                // style={{ display: "none" }}
              />

            </div>


          </div>



          <div className="right">
            <form onSubmit={handleSubmit}>

<div className="user_inputs">

              {userInputs.map((input) => (
                <div className="form__group"  key={input.id}>
                  <label className="room_input__label">{input.label}</label>
                  <input
                   type={input.type}
                   id={input.id}
                   onChange={handleChange}
                   required={input.required}
                   placeholder={input.placeholder}
                   pattern={input.pattern?.source}
                   className="room_input__text"
                  />
                </div>
              ))}


            <div className="form__group">
                <label className="room_input__label">Enter your State:</label>
              <select className="dropdown__menu" required onClick={handleChange} id="state">
              <option disabled>Select a State</option>
              {userInputs.state.options.map((state=> (
                  <option className="dropdown__option" key ={state} value = {state}>{state}</option>
                  )))}
              </select>
            </div>


            <div className="form__group" >
                <label className="room_input__label" htmlFor="city">Enter your City :</label>
                <input
                   type='text'
                   id='city'
                   onChange={handleChange}
                   required={true}
                   placeholder={"enter city "}
                   className="room_input__text"

                  />
            </div>
           

</div>

              <div  className="form__group" style={{flexDirection:"row"}}>
                <label className="room_input__label" htmlFor="isOwner">click if you are a owner</label> 
                <input
                  value={false}
                  onChange={handleChange}
                  type="radio"
                  id="isOwner"
                  style={{    left: "-30px",position: "absolute"}}
                />
              </div>
                


              <div className="btn-container">
              <button  disabled={loading}> {loading ? "Procssing.." : "Register"}</button>
              {error && <span className="error">{error.message}</span>}
              </div>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
