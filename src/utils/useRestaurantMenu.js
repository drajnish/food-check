import { useState, useEffect } from 'react';
import { API_RESTAURANT_MENU } from '../constants';

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    menuapi();
  }, []);

  async function menuapi() {
    const resData = await fetch(API_RESTAURANT_MENU + resId);
    const json = await resData.json();
    setRestaurantMenu(json.data);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
