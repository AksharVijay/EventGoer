import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EventList from "../EventList/EventList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.heroImage}></div>
      <div className={styles.eventHeader}>
        <div className="">
          <h2>Event</h2>
        </div>
        <EventList />
      </div>
    </div>
  );
};

export default Home;
