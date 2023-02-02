import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.239045&lng=77.435578&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <div className="shimmer-flex">
          {[1, 2, 4].map((val) => {
            return <Shimmer key={val} />;
          })}
        </div>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.length === 0 ? (
            <h4 className="nomatch">
              no restaurant found. Try other restaurant.
            </h4>
          ) : (
            filteredRestaurants.map((res) => {
              return <RestaurantCard key={res?.data.id} {...res?.data} />;
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
