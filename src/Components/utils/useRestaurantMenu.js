import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(`${MENU_API}${resId}`);
        const json = await data.json();
        setResInfo(json?.data);
        console.log("Fetched Data:", json);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
