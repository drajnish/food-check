import { Link } from 'react-router-dom';
import { CDN_IMG_LINK } from '../constants';
import { BsStarFill } from 'react-icons/bs';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  id,
}) => {
  return (
    <div className="w-64 px-2 py-4 mx-2 mb-6 hover:shadow-lg">
      <Link to={`restaurant/${id}`} className="link">
        <img
          src={CDN_IMG_LINK + cloudinaryImageId}
          alt={name}
          className="w-full"
        />
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          <div className="max-w-[250px]">
            <p className="text-sm text-[#686b78] truncate">
              {cuisines.join(', ')}
            </p>
          </div>
        </div>
        <div className="flex justify-between text-xs mt-2">
          {/* {(bgColour = avgRating >= 4 ? bg-[#48c479] : bg-[#db7c38])} */}
          <div className="flex items-center px-2 py-1 bg-[#48c479]">
            <BsStarFill className="fill-white" />
            <span className="ml-1 text-[#fff]">{avgRating}</span>
          </div>
          <span>•</span>
          <span className="text-[#686b78]">{slaString}</span>
          <span>•</span>
          <span className="text-[#686b78]">{costForTwoString}</span>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
