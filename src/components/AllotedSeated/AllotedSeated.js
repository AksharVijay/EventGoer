import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./AllotedSeated.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AllotedSeated = (props) => {
  const displayPosts = (props) => {
    const { posts } = props;
    console.log(posts);
    if (posts.length > 0) {
      return (
        <div>
          <Navbar />
          <div className={styles.allotedBody}>
            <div className="conatiner">
              <div className={styles.AllotedBooking}>
                <div className={styles.selectSeats}>
                  <h5 className={styles.header}>
                    Select the seats based on your prefrences
                  </h5>
                  {posts.map((post) => {
                    return (
                      <div
                        className="eventSeat"
                        style={{ display: "inline-block" }}
                      >
                        <ol className="cabin fuselage">
                          <li className="row row--1">
                            <ol className={styles.seats} type="">
                              <li className={styles.seat}>
                                <input type="checkbox" id={post.id} />
                                <label>
                                  {post.seatRow}
                                  {post.seatColumn}
                                </label>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.allotedBtn}>
                  <button className={styles.btn}>Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div className="Posts">{displayPosts(props)}</div>;
};

export default AllotedSeated;
