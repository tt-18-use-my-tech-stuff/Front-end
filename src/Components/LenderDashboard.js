import axios from "axios";
import React, { useEffect, useState } from "react";
import TechList from "./TechList";

const LenderDashboard = (props) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://tt18-build-week.herokuapp.commmmmmm/api/account/items` /*AUTH */
      )
      .then((res) => {
        console.log(res.data);
        setItemList(res.data);
        setLoadingError("");
      })
      .catch((err) => {
        console.log(err.message);
        setLoadingError("Hmmm, looks like something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        "L O A D I N G"
      ) : loadingError ? (
        loadingError
      ) : (
        <TechList itemList={itemList} />
      )}
    </div>
  );
};

export default LenderDashboard;
