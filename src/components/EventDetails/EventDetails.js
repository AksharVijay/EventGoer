import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import DetailsImage from "../../assets/Event-Ticketing.png";
import styles from "./EventDetails.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

// let config = { Authorization: "3055f8f90fa44bbe8bda05385a20690a" };
// const baseurl = "https://newsapi.org/v2/top-headlines?sources=bbc-news";

const EventDetails = (props) => {
  const { state } = useLocation();

  if (!state) return null;

  // const [title, setTitle] = useState("");

  // const { eventName } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${baseurl}`, { headers: config })
  //     .then((response) => setTitle(response.data));
  // }, []);

  // useEffect(() => {
  //   const neweventName = baseurl.find(
  //     (eventNames) => eventNames.eventName === parseInt(eventName)
  //   );
  //   setTitle(neweventName.title);
  // }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.eventBg}>
        <div className="container">
          <div>
            <img
              src={DetailsImage}
              alt="ticket"
              width="100%"
              className={styles.heroEventImage}
            />
          </div>
          <div className={styles.bookingDetails}>
            <div className={styles.nameBook}>
              <div>
                <div className={styles.eventNameHeader}>
                  <h1 className={styles.eventName}> {props.title}</h1>
                </div>
                <div className={styles.genre}>
                  <div className={styles.genreText}>{props.author}</div>
                </div>
              </div>
              <div className={styles.bookingBtn}>
                <div className={styles.booking}>
                  <Link to="/GeneralBooking">
                    <button
                      className={styles.bookBtn}
                      style={{ height: "60px", fontSize: "18px" }}
                    >
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.venueTime}>
              <div className={styles.dateTime}>
                <div className={styles.dateTimeText}>{props.author}</div>
                <div className={styles.price}>{props.author}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
