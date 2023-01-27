import { useState } from 'react';
import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="search restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            console.log(searchText, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((res) => {
          return <RestaurantCard key={res?.data.id} {...res?.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
