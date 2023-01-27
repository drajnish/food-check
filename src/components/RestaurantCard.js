import { CDN_IMG_LINK } from '../constants';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  area,
}) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default RestaurantCard;
