import React from "react";

export default function Posts({ posts, handleDeletePost, onEditClick  }) {

    

  return (
    <div>
      <h1 className="text-2xl my-4">All Posts</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="flex gap-5">
              <span>{post.id}</span>
              <li >{post.title}</li>
              <div className="space-x-2 cursor-pointer">
                <span onClick={()=>onEditClick(post)}>edit</span>
                <span onClick={()=>handleDeletePost(post.id)} >delete</span>
              </div>
            </div>
          ))
        ) : (
          <p>no post found</p>
        )}
      </ul>
    </div>
  );
}
