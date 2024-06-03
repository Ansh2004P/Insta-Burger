import { useEffect, useState } from "react";
import { InitLink, LastLink } from "../utils/constants";

const UserFetchMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(InitLink + resId + LastLink);
    const json = await data?.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default UserFetchMenu;
