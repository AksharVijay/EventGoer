import React, { useState, useEffect } from "react";
import Event from "../Event/Event";
import axios from "axios";
import styles from "./EventList.module.css";

const EventList = () => {
  const [posts, setPosts] = useState("");

  let config = { Authorization: "3055f8f90fa44bbe8bda05385a20690a" };
  const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news";

  useEffect(() => {
    AllPosts();
  }, []);

  const AllPosts = () => {
    axios
      .get(`${url}`, { headers: config })

      .then((response) => {
        const allPosts = response.data.articles;
        console.log(response);
        setPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <Event className={styles.Posts} posts={posts} />
    </div>
  );
};

export default EventList;

// import React, { useState, useEffect, useMemo } from "react";
// import Event from "../Event/Event";
// import axios from "axios";
// import { Fragment } from "react";
// import "./Home.css";

// const EventList = () => {
//   const [posts, setPosts] = useState("");

//   let config = { Authorization: "3055f8f90fa44bbe8bda05385a20690a" };
//   const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news";

//   useEffect(() => {
//     AllPosts();
//   }, []);

//   const AllPosts = () => {
//     axios
//       .get(`${url}`, { headers: config })

//       .then((response) => {
//         const allPosts = response.data.articles;
//         console.log(response);
//         setPosts(allPosts);
//       })
//       .catch((error) => console.error(`Error: ${error}`));
//   };

//   return (
//     <Fragment>
//       <div className="home">
//         <Event className="Posts" key={posts.title} posts={posts} />
//         {/* <Post className ="Posts" posts = { posts }/> */}
//       </div>
//     </Fragment>
//   );
// };

// export default EventList;

// import React, { useState, useEffect } from 'react';
// import Post from '../../Components/Post/Post';
// import axios from 'axios';

// const HomePage = () => {

//     const [posts, setPosts] = useState('');

//     const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

//     useEffect( () => {

//         AllPosts();

//     }, []);

//     const AllPosts = () => {

//         axios.get(`${url}`)

//         .then((response) => {

//             const allPosts = response.data;

//             setPosts(allPosts);

//         })
//         .catch( error => console.error(`Error: ${ error }`));
//     }

//     return (

//         <div>
//             <Post className ="Posts" posts = { posts }/>
//         </div>

//     )
// }

// export default HomePage;
