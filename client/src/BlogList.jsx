import React, { useState, useEffect } from "react";
import moment from "moment";
import "./BlogList.css"; // External CSS for styling

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the blog post");
      }

      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='blog-list-container'>
      {loading && <p className='loading-message'>Loading...</p>}
      {error && <p className='error-message'>{error}</p>}
      {!loading && !error && (
        <div className='blog-grid'>
          {posts.map((post) => (
            <div key={post.id} className='blog-card'>
              <h2 className='blog-title'>{post.title}</h2>
              <p className='blog-content'>{post.content}</p>
              <p className='blog-timestamp'>
                {moment(post.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
              <button
                className='delete-btn'
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
