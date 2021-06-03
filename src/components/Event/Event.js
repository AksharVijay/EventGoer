import React from "react";
import styles from "./Event.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Event = (props) => {
  const displayPosts = (props) => {
    const { posts } = props;
    console.log(posts);
    if (posts.length > 0) {
      return posts.map((post) => {
        return (
          <div>
            <div className={styles.Posts}>
              <div className={styles.post}>
                <img
                  src={post.imageUrl}
                  alt="event"
                  width="100%"
                  className={styles.img}
                />
                <div>
                  {/* <Link to={`/${post.title}`}> */}
                  <Link to={{ pathname: `/${post.name}`, state: { post } }}>
                    <h3 className={styles.title}>{post.name}</h3>
                  </Link>
                  <div className={styles.price}> Seats Type : {post.type} </div>
                  {/* <Link to={`/${post.title}`}> */}
                  <Link to={{ pathname: `/${post.name}`, state: { post } }}>
                    <button className={styles.btns}>
                      View Details and Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return <div className="Posts">{displayPosts(props)}</div>;
};

export default Event;
