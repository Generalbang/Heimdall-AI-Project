const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const BlogPost = require("./models/blogPostModel");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("SQLite connected.");
    await sequelize.sync(); // Creates tables if not present
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();

// Create post
app.post("/api/blogs", async (req, res) => {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all
app.get("/api/blogs", async (req, res) => {
  try {
    const posts = await BlogPost.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read one
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
app.put("/api/blogs/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Not found" });

    await post.update(req.body);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Not found" });

    await post.destroy();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
