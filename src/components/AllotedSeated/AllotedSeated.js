import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./AllotedSeated.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AllotedSeated = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.allotedBody}>
        <div className="conatiner">
          <div className={styles.AllotedBooking}>
            <h5>Event Prices</h5>
            <div className={styles.eventPrices}>
              <div className={styles.events}>
                <div className={styles.adult}>
                  <strong>Adult</strong> : NZD 55
                </div>
                <div className={styles.child}>
                  <strong>Child</strong> : NZD 55
                </div>
                <div className={styles.senior}>
                  <strong>Senior</strong> : NZD 55
                </div>
              </div>
            </div>
            <div className={styles.categories}>
              <h5>Select the following Categories</h5>
              <div className={styles.select}>
                <select>
                  <option value="adult">Adult</option>
                  <option value="child">Child</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
              <div className={styles.select}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className={styles.selectSeats}>
              <h5>Select the seats based on your prefrences</h5>
            </div>

            <div className={styles.allotedBtn}>
              <button className={styles.btn}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllotedSeated;
