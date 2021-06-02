import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Checkout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {
  return (
    <div className={styles.checkoutBody}>
      <Navbar />
      <div className="container">
        <div className={styles.checkoutDetails}>
          <div className={styles.nameBook}>
            <div>
              <div className={styles.eventNameHeader}>
                <h1 className={styles.eventName}> Event Name</h1>
              </div>
              <div className={styles.venueTime}>
                <div className={styles.dateTime}>
                  <div className={styles.dateTimeText}>Sat 05 Jun 2021</div>
                  <div className={styles.genre}>Genre</div>
                  <div className={styles.venue}>Venue</div>
                  <div className={styles.language}>Language</div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.price}>NZD 55</div>
            </div>
          </div>
        </div>
        <div className={styles.checkoutDetails}>
          <div className={styles.nameBook}>
            <div>
              <div className={styles.eventNameHeader}>
                <h1 className={styles.eventName}> Event Name</h1>
              </div>
              <div className={styles.venueTime}>
                <div className={styles.dateTime}>
                  <div className={styles.dateTimeText}>Sat 05 Jun 2021</div>
                  <div className={styles.genre}>Genre</div>
                  <div className={styles.venue}>Venue</div>
                  <div className={styles.language}>Language</div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.price}>NZD 55</div>
            </div>
          </div>
        </div>

        <div className={styles.checkoutDetails}>
          <div className={styles.nameBook}>
            <div>
              <div className={styles.eventNameHeader}>
                <h1 className={styles.eventName}> Total</h1>
              </div>
            </div>
            <div>
              <div className={styles.price}>NZD 55</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
