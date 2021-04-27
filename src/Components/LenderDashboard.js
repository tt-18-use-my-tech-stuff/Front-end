import axios from "axios";
import React, { useEffect, useState } from "react";
import TechList from "./TechList";

const LenderDashboard = (props) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`https://tt18-build-week.herokuapp.com/api/account/items` /*AUTH */)
  //     .then((res) => {
  //       setIsLoading(true);
  //       console.log(res.data);
  //       setItemList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setLoadError("Hmmm, looks like something went wrong");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {isLoading ? (
        "L O A D I N G"
      ) : itemList === [] ? (
        "Looks like you haven't listed anything yet"
      ) : (
        <TechList itemList={itemList} />
      )}
    </div>
  );
};

export default LenderDashboard;
