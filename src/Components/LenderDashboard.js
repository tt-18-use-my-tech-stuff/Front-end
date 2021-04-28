import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import TechList from "./TechList";

const LenderDashboard = (props) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/account/items`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setItemList(res.data);
  //       setLoadingError("");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setLoadingError("Hmmm, looks like something went wrong");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {/* {isLoading ? (
        "L O A D I N G"
      ) : loadingError ? (
        loadingError
      ) : (
      <TechList itemList={itemList} />
     )} */}

      <TechList
        itemList={[
          {
            item_id: 1,
            item_name: "Television",
            item_description: "New TV. Remote not included",
            renter: "Thor",
          },
          {
            item_id: 4,
            item_name: "Speakers",
            item_description: "Powered bookshelf speakers.",
            renter: null,
          },
        ]}
      />
    </div>
  );
};

export default LenderDashboard;
