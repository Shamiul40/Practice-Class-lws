import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./Components/Posts";
import AddPost from "./Components/AddPost";
import EditPost from "./Components/EditPost";
import { api } from "./api/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const onAddPost =async (newPost) => {
    try {
    
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

      const finalPost = {
        id :id.toString(),
        ...newPost
      }
      console.log(finalPost)

      const responseData = await api.post(`/posts`, finalPost)
      
      setPosts([...posts, responseData.data])

     

    } catch (error) {
      if (error.response) {
        setError(error.response.message);
      } else {
        console.log(error);
      }
    }

    
  };

  const handleDeletePost =async (postId) => {
    if (confirm("are you delete this post")) {
      try {

        await api.delete(`/posts/${postId}`)

        const filtered = posts.filter((post) => post.id !== postId);
      setPosts(filtered);
      }
       catch (error) {
        setError(error.response.message)
       } 

    } else {
      console.log("post does not deleted");
    }
  };

  const handleEditPost = async (updatePost) => {
      try{

        const response = await api.patch(`/posts/${updatePost.id}`, updatePost)
        console.log(response.data)
        const newUpdatePost = posts.map((post) =>
      post.id === response.data.id ? response.data : post
    );

    setPosts(newUpdatePost);
    setPost(null);
      } catch(error) {
        setError(error)
      }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/posts`);

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        if (error.response) {
          setError(
            `error status is ${error.response.status} & error message is ${error.response.message}`
          );
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-11/12 text-xl  mx-auto my-5 h-screen ">
      <h1 className="text-4xl font-bold py-4">Api Request with Axios</h1>
      <hr />
      <Posts
        posts={posts}
        handleDeletePost={handleDeletePost}
        onEditClick={setPost}
      ></Posts>
      <hr />

      {!post ? (
        <AddPost onAddPost={onAddPost}></AddPost>
      ) : (
        <EditPost post={post} handleEditPost={handleEditPost}></EditPost>
      )}

      <div className="my-6">
        {error ? (
          <>
            {" "}
            <hr />
            <p className="bg-red-300">{error}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
