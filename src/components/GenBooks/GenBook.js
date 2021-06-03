import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./GenBooks.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneralBooking from "../GeneralBooking/GeneralBooking";

const GenBook = () => {
  const [posts, setPosts] = useState("");
  const url = "https://technical-test-api.azurewebsites.net/ga-areas";

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
      <GeneralBooking className={styles.Posts} posts={posts} />
    </div>
  );
};

export default GenBook;
