import { useState, useEffect } from 'react';
import { API_RESTAURANTS } from '../constants';

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    const data = await fetch(API_RESTAURANTS);

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurants;
