import React from "react";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GeneralBooking.module.css";

const GeneralBooking = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.genBody}>
        <div className="container">
          <div className={styles.genBooking}>
            <div className={styles.genBook}>
              <div className={styles.singleGenBooking}>
                <div className={styles.singleGenBookingInside}>
                  <div className={styles.genEvent}>
                    <div className={styles.genEventName}>Event Name</div>
                  </div>
                  <div className={styles.addBtn}> Add</div>
                </div>
                <div className={styles.eventPrice}>
                  <div className={styles.price}>NZD 55</div>
                </div>
              </div>
              <div className={styles.singleGenBooking}>
                <div className={styles.singleGenBookingInside}>
                  <div className={styles.genEvent}>
                    <div className={styles.genEventName}>Event Name</div>
                  </div>
                  <div className={styles.addBtn}> Add</div>
                </div>
                <div className={styles.eventPrice}>
                  <div className={styles.price}>NZD 55</div>
                </div>
              </div>
              <div className={styles.singleGenBooking}>
                <div className={styles.singleGenBookingInside}>
                  <div className={styles.genEvent}>
                    <div className={styles.genEventName}>Event Name</div>
                  </div>
                  {/* <div className={styles.addBtn}> Add</div> */}
                  <div className={styles.addRemoveBtns}>
                    <div className={styles.remove}>
                      <div className={styles.removeText}>-</div>
                    </div>
                    <div className="df-bk df-en df-fn df-ll df-rl">2</div>
                    <div className={styles.add}>
                      <div className={styles.addText}>+</div>
                    </div>
                  </div>
                </div>
                <div className={styles.eventPrice}>
                  <div className={styles.price}>NZD 55</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.genBtn}>
            <button className={styles.btn}>Proceed</button>
          </div>

          <div className={styles.genBtnConfirm}>
            <div className={styles.singleGenBookingInside}>
              <div className={styles.genEvent}>
                <div className={styles.genEventName}>Event Name</div>
              </div>
              <div className={styles.btns}> Proceed</div>
            </div>
            <div className={styles.eventPrice}>
              <div className={styles.price}>NZD 55</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralBooking;
