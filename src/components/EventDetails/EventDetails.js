import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./EventDetails.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useLocation } from "react-router-dom";
import GeneralBooking from "../GeneralBooking/GeneralBooking";

const EventDetails = (props) => {
  const { state } = useLocation();

  if (!state.post) return null;
  return (
    <div>
      <Navbar />
      <div className={styles.eventBg}>
        <div className="container">
          <div>
            <img
              src={state.post.imageUrl}
              alt="ticket"
              width="100%"
              className={styles.heroEventImage}
            />
          </div>
          <div className={styles.bookingDetails}>
            <div className={styles.nameBook}>
              <div>
                <div className={styles.eventNameHeader}>
                  <h1 className={styles.eventName}> {state.post.name}</h1>
                </div>
                <div className={styles.genre}>
                  <div className={styles.genreText}>
                    <strong>Seats Type :</strong> {state.post.type}
                  </div>
                  <div className={styles.bookingLimitText}>
                    <strong>Booking Limit :</strong>
                    {state.post.bookingLimit}
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
