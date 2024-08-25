import React, { useEffect, useState } from 'react';
import Cards from './Cards';

import Shimmer from './Shimmer.jsx';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // API call
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {

    try {
      
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      const actualData = data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurants(actualData);
      setFilteredRestaurants(actualData);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleSearch = () => {
    const filterData = restaurants.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredRestaurants(filterData);
  };
  
  const Onlinestatus = useOnlineStatus();
  if (Onlinestatus === false) return (<>
    <h1>Looks like you are offline</h1>
  </>);

  return (
    <div className="p-4 bg-[#0f172a] text-white">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className='w-[300px] p-3 border text-black rounded-lg'
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
          placeholder="Search for restaurants..."
        />
        <button
          type='button'
          className='bg-slate-500 text-white p-3 ml-2 rounded-md hover:bg-slate-600'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredRestaurants.length === 0 ? <Shimmer /> : (
          filteredRestaurants.map((restaurant, key) => (
            <Link to={"/resturent/" + restaurant.info.id} key={key}>
              <Cards
                image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                resname={restaurant.info.name}
                id={restaurant.info.id}
                isOpen={restaurant.info.isOpen}
                locality={restaurant.info.locality}
                rating={restaurant.info.avgRatingString}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
