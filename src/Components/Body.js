import React, { useEffect, useState } from "react";
import "./index.css";
import Shimmer from "./Shimmer";
import Rescard from "./Rescard";
import { Link } from "react-router-dom";
import useOnlineStatus from './utils/useOnlineStatus'

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const[searchText,setSearchText]=useState('')

  const filterBtn = () => {
    const filter = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFilterRestaurants(filter);

  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Navigate to the restaurants array in the response
      const restaurantsList =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

          console.log(restaurantsList,'res list')
      setRestaurants(restaurantsList || []);
      setFilterRestaurants(restaurantsList || [])
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const onlineStatus=useOnlineStatus()

  if(onlineStatus===false)return(<div>
    <h1>please check your internet buddy...😉😒</h1>
  </div>)

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        {" "}
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{

            setSearchText(e.target.value)
          }} />
          <button onClick={()=>{




let filterRes=restaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
console.log('filtered',filterRes)

setFilterRestaurants(filterRes)


          }}>Search</button>
        </div>
        <button className="filterBtn" onClick={filterBtn}>
        
          Filter button
        </button>
      </div>

      <div className="res-container">
        {filterRestaurants.map((restaurant) => (

          // <Link key={restaurant.info.id} to={'/restaurant/'+restaurant.info.id}>
          //           <Rescard  data={restaurant} />
          // </Link>

          <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}>
  <Rescard data={restaurant} />
</Link>



        ))}
      </div>
    </div>
  );
}

export default Body;
