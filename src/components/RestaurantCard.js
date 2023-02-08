import { Link } from 'react-router-dom';
import { CDN_IMG_LINK } from '../constants';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  area,
  id,
}) => {
  return (
    <div className="card">
      <Link to={`restaurant/${id}`} className="link">
        <img
          src={CDN_IMG_LINK + cloudinaryImageId}
          alt={name}
          className="card-image"
        />
        <div className="card-body">
          <h3>{name}</h3>
          <p>{cuisines.join(', ')}</p>
        </div>
        <div className="card-footer">
          <span className="restaurant-rating">{avgRating}</span>
          <span className="restaurant-address">{area}</span>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
