import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import useRestaurants from '../utils/useRestaurants';
import { filterData } from '../utils/helper';

const Body = () => {
  const [searchText, setSearchText] = useState('');

  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurants();

  if (!allRestaurants) return null;

  return (
    <>
      <div className="flex justify-center my-2">
        <input
          type="text"
          className="px-4 focus:outline-transparent py-1 mr-5 rounded-full leading-6 bg-[#eee]"
          placeholder="Search restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 bg-[#8ebe43] rounded-full"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <Shimmer />
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
