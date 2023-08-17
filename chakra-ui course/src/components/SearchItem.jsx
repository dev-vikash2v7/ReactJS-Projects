import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ room }) => {
  return (
    <div className="searchItem">
      <img src={room.photos[0]} alt="" className="siImg" />
      <div className="room_details">
        <h1 className="room_title">{room.name}</h1>
        <span className="room_distane">{room.distance}m from center</span>
        <span className="room_service">
          Studio Apartment with Air conditioning
        </span>
        <span className="room_feature">{room.desc}</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {room.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{room.rating}</button>
        </div>}
        <div className="room_prices">
          <span className="room_price">${room.cheapestPrice}</span>
          <span className="siTaxOp">security money includes : 4000 rs</span>
            <Link to={`/rooms/viewRoom/${room._id}`}>
            <button className="room_btn">View More</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
