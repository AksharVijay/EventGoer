import React from "react";
import styles from "./Event.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Event = (props) => {
  const displayPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return posts.map((post) => {
        return (
          <div>
            <div className={styles.Posts}>
              <div className={styles.post}>
                <img
                  src={post.urlToImage}
                  alt="covid"
                  width="100%"
                  className={styles.img}
                />
                <div>
                  <Link to={`/${post.title}`}>
                    {/* <Link to={{ pathname: `/${post.title}`, state: { post } }}> */}
                    <h3 className={styles.title}>{post.title}</h3>
                  </Link>
                  <div className={styles.price}> {post.author} </div>
                  {/* <Link to={`/${post.title}`}> */}
                  <Link to={{ pathname: `/${post.title}`, state: { post } }}>
                    <button className={styles.btns}> {post.author} </button>
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

// import React from "react";
// import styles from "./Event.module.css";
// import img from "../../assets/Event-Ticketing.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// const Event = () => {
//   return (
//     <div>
//       <div className={styles.Posts}>
//         <div className={styles.post}>
//           <img src={img} alt="ticket" width="100%" className={styles.img} />
//           <div>
//             <h3 className={styles.title}>Event Name </h3>
//             <div className={styles.price}> Price </div>
//             <Link to="/EventDetails">
//               <button className={styles.btns}> View Details and Book </button>
//             </Link>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Event;
