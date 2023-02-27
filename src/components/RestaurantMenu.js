import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_IMG_LINK } from '../constants';
import { BsStarFill } from 'react-icons/bs';

const MenuItems = lazy(() => import('./MenuItems'));

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex bg-[#171a29] p-12 text-white sticky top-0">
        <img
          src={CDN_IMG_LINK + restaurantMenu?.cloudinaryImageId}
          alt={restaurantMenu?.name}
          className="h-40 mr-16"
        />
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-4xl">{restaurantMenu?.name}</h2>
          <span className="text-[#686b78] font-semibold">
            {restaurantMenu?.cuisines.join(', ')}
          </span>
          <span className="text-[#686b78] font-semibold">
            {restaurantMenu?.area}
            {', '} {restaurantMenu?.locality}
            {', '}
            {restaurantMenu?.city}
          </span>
          <div className="flex justify-between">
            <span className="flex items-center">
              <BsStarFill className="inline-block mr-2" />{' '}
              {restaurantMenu?.avgRating}
            </span>{' '}
            |<span>{restaurantMenu?.sla?.slaString}</span>|
            <span>{restaurantMenu?.costForTwoMsg}</span>
          </div>
        </div>
      </div>
      <Suspense fallback="<Shimmer />">
        <MenuItems restaurantMenu={restaurantMenu} />
      </Suspense>
    </>
  );
};

export default RestaurantMenu;
