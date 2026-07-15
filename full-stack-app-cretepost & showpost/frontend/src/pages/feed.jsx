import React, { useState,useEffect } from 'react'
import  axios from 'axios'

const Feed = () => {
    const [posts,setPosts] = useState([
     {
    _id:"1",
    image:"https://unsplash.com/photos/man-in-gray-pullover-hoodie-closed-eyes-while-heads-up-umfpFoKxIVg",
    caption:"just a picture",
    }
    ])
       useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
       },[])

  return (
   <section class="feed-section">
    <h1>FEED SECTION</h1>
    {
        posts.length > 0 ? (
            posts.map((post)=>(
         <div className='post-card' key={post.id}>
           <img src={post.image} alt={post.caption} />
           <p>{post.caption}</p>
         </div>
            ) )
        ) : (
            <h1>no posts available</h1>

        )
    }
   </section>
  )
}

export default Feed