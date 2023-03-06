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
    const filterData = json?.data?.cards?.filter(
      (data) => data.cardType === 'seeAllRestaurants'
    )[0]?.data?.data?.cards;
    setAllRestaurants(filterData);
    setFilteredRestaurants(filterData);
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurants;
