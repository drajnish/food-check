import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_IMG_LINK } from '../constants';

const MenuItems = lazy(() => import('./MenuItems'));

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-menu">
        <div className="menu-header">
          <img src={CDN_IMG_LINK + restaurantMenu?.cloudinaryImageId} alt="" />
          <div className="rest-info">
            <h2>{restaurantMenu?.name}</h2>
            <p>{restaurantMenu?.cuisines.join(', ')}</p>
            <div className="rest-rating">
              <span>⭐ {restaurantMenu?.avgRating}</span>
              <span>{restaurantMenu?.costForTwoMsg}</span>
            </div>
            <span>
              {restaurantMenu?.area}
              {', '} {restaurantMenu?.locality}
              {', '}
              {restaurantMenu?.city}
            </span>
          </div>
        </div>
        <Suspense fallback="Loading....">
          <MenuItems restaurantMenu={restaurantMenu} />
        </Suspense>
      </div>
    </>
  );
};

export default RestaurantMenu;
