import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { faBath, faBed, faElevator, faHome, faIndianRupee, faKitchenSet, faParking, faPhone, faRupee, faRupeeSign, faStar, faToilet, faWater, faWifi } from "react-icons/fa";
 const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];


const RoomList = () => {
  const { data, loading, error } = useFetch("/room/viewAllRooms");
let room = {
  name : "prabhatam heights",
  price : 8000,
  distance : 10 ,
  desc : "goddd fdadf adfa" ,
  rating : 4
}

  return (
  
    <section className="rooms_list">

<h1 className="heading">
    <span>BEST ROOMS NEAR YOU</span>
  </h1>

<div className="rooms_container">
      {/* {loading ? (
        "loading"
      ) : (
        <>
          {data.map(room => (
            <div className="room" key={room._id}>
              {console.log(room)}
                <img
                  src={"uploads/room_pictures/"+room.photos[0]}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{room.type}</h1>
                  <h2>{room.owner_name}</h2>
                </div>
              </div>
          )
           )}

           {error && <h1 className="error">{error.message}</h1>}
          
        </>
      )} */}

              <div className="room_box" >

                <img
                  src={images[0]}
                  alt=""
                  className="room_img"
                />
{/* 

<div className="room_content">
              

                <div className="room_details">
                  <span className="room_title">Prabhatam Heights</span>
                  <span className="room_type">Flat</span>
                  <span className="room_rating"><FontAwesomeIcon icon={faStar} color="yellow" className="icon"/> 8.9</span>
                </div>
        </div>

                  <span className="room_price"><FontAwesomeIcon icon={faIndianRupee}  className="icon"/> 8000 / Month</span>

                  <div className="room_content">

                    <div className="room_address">
                      <span className="area">Patel Nagr</span>
                      <span className="city">Bhopal , Madhya Prades</span>
                    </div>

                    <div className="room_icons">
                      <span ><FontAwesomeIcon icon={faBed}  className="icon"/><em>2</em> </span>
                      <span ><FontAwesomeIcon icon={faBath}  className="icon"/><em>2</em> </span>
                      <span ><FontAwesomeIcon icon={faKitchenSet}  className="icon"/><em>2</em> </span>
                    </div>

                  </div>

                  <div className="room_content">

                  <div className="room_facilities">
                      <span ><FontAwesomeIcon icon={faWifi}  className="icon"/><em>wifi</em> </span>
                      <span ><FontAwesomeIcon icon={faParking}  className="icon"/><em>parking</em> </span>
                      <span ><FontAwesomeIcon icon={faBed}  className="icon"/><em>4 Beds Available</em> </span>
                      <span ><FontAwesomeIcon icon={faWater}  className="icon"/><em>Water supply 24/7</em> </span>
                      <span ><FontAwesomeIcon icon={faElevator}  className="icon"/><em>Elevator provided</em> </span>
                    </div>

                  </div>
    */}


    <div className="room_description">

        <p className="address"> 
           <span className="place">{room.name}</span>
           <span className="city">Bhopal, Madhya Pradesh </span>
           <span className="pincode">110201</span>
       </p>

       <p className="details">
            <span className="type">Hostel</span>
           <span className="size">4 BHK</span>
           <span className="rating">star 8.9 </span>
       </p>

       <div className="det">

       <div className="distance">
          <span className="station">10km from patel nagar</span>
          <span className="hopital">250m from nagar</span>
       </div >

            <span className="room_price"><faIndianRupee /><em>8000</em> </span>

       {/* <p className="availabilty">available to only girls </p> */}

       </div>

      

        <div className="room_features">
                     <span ><faWifi /><em>wifi</em> </span>
                      <span ><faParking /><em>parking</em> </span>
                      <span ><faBed /><em>4 Beds Available</em> </span>
        </div>

<div className="link">


      
            <Link to={`/viewRoom/89`} >
            <button className="room_btn">View More</button>
            </Link>
</div>


      </div>




    

              </div>


              </div>

    </section>
  );
};

export default RoomList;
