import React, { useState, useEffect } from "react";
import Event from "../Event/Event";
import axios from "axios";
import styles from "./Allocated.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllotedSeated from "../AllotedSeated/AllotedSeated";

const EventList = () => {
  const [posts, setPosts] = useState("");
  const url =
    "https://technical-test-api.azurewebsites.net/allocated-seats?seatIds=1&seatIds=50";

  useEffect(() => {
    AllPosts();
  }, []);

  const AllPosts = () => {
    axios
      .get(`${url}`)

      .then((response) => {
        const allPosts = response.data;
        console.log(response);
        setPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="container">
      <AllotedSeated className={styles.Posts} posts={posts} />
    </div>
  );
};

export default EventList;
