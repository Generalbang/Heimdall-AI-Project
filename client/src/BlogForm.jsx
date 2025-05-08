import React, { useState } from "react";
import "./BlogForm.css"; // External CSS for styling

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the blog post");
      }

      const data = await response.json();
      console.log("Blog post submitted:", data);
      setTitle("");
      setContent("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='form-container'>
      <h1 className='form-title'>Create a Blog Post</h1>
      <form onSubmit={handleSubmit} className='blog-form'>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='content' className='form-label'>
            Content:
          </label>
          <textarea
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='form-textarea'
          />
        </div>
        <button type='submit' className='submit-btn' disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className='error-message'>{error}</p>}
      </form>
    </div>
  );
};

export default BlogForm;
