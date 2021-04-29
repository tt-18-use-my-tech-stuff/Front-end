import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import TechList from "./TechList";

const LenderDashboard = (props) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get(`/account/items`)
      .then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setItemList(res.data);
          setLoadingError("");
        } else {
          setLoadingError(res.data);
        }
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
      {/* <TechList
        itemList={[
          {
            item_id: 1,
            item_name: "Television",
            item_description: "New TV. Remote not included",
            renter: "Thor",
          },
        ]} */}
      />
    </div>
  );
};

export default LenderDashboard;
