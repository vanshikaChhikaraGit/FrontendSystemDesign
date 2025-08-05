import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchPosts } from "../utils/fetchPosts";

const Scroll = () => {
  //initialize state variables to manage feed data,loading state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;
  //fecth feed data that we need to show on the web page
  useEffect(() => {
    const fetchData = async function(){
      try {
        setLoading(true);
        const feedData = await fetchPosts(page, limit);
        setPosts((prevPosts)=>[...prevPosts,...feedData]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData()
  }, [page]);

  const observer = useRef();

  const lastPageRef = useCallback((node)=>{
    if(loading)return;

    if(observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            setPage((prevPage)=>prevPage+1)
        }
    })

    if(node)observer.current.observe(node)
  },[loading])

  return (
    <div>
    <h1>Your Feed</h1>
      <ul>
        {posts.map((post,index) => {
          return (
            <li 
            key={post.id}
            ref={posts.length===index+1?lastPageRef:null}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>

      {loading && <p>loading!</p>}
    </div>
  );
};

export default Scroll;
