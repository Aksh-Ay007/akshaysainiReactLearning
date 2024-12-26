import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // Return Shimmer while data is loading
  if (!resInfo) return <Shimmer />;

  // Extract restaurant information and menu items
  const resinformation = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  // Safeguard against undefined or null values
  if (!resinformation || !itemCards) {
    return <p>No menu available for this restaurant.</p>;
  }

  const { name, city, avgRating } = resinformation;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>Average Rating: {avgRating}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
