import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { MENU_API } from "./utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   const [menuInfo, setMenuInfo] = useState(null);

  const { resId } = useParams();

  console.log(resId,'gggga')

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      let data = await fetch(MENU_API + resId); 
      let json = await data.json();
      setResInfo(json?.data);
      console.log("Fetched Data:", json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Return Shimmer while data is loading
  if (!resInfo) return <Shimmer />;

  const resinformation = resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards, "itemcards");

  const { name, city, avgRating } = resinformation;

  return resinformation === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.price / 100}Rs
          </li>
        ))}
        <li>{itemCards[0].card.info.name}</li>
        <li>{avgRating}</li>
      </ul>
      <h3></h3>
    </div>
  );
};

export default RestaurantMenu;
