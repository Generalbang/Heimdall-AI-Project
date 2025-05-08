+++
title = "Backend Documentation"
description = "Detailed documentation for the backend and its endpoints"
tags = ["documentation", "backend", "api"]
+++

# Backend Documentation

This document provides detailed documentation for the backend and its endpoints.

## Endpoints

### POST /api/blogs
- **Description**: Create a new blog post.
- **Request Body**:
  - `title` (string): The title of the blog post.
  - `content` (string): The content of the blog post.
- **Response**:
  - **201 Created**: Returns the newly created blog post.
  - **500 Internal Server Error**: Returns an error message if the blog post could not be created.

### GET /api/blogs
- **Description**: Get all blog posts.
- **Response**:
  - **200 OK**: Returns a list of all blog posts.
  - **500 Internal Server Error**: Returns an error message if the blog posts could not be retrieved.

### GET /api/blogs/:id
- **Description**: Get a specific blog post by ID.
- **Path Parameters**:
  - `id` (string): The ID of the blog post.
- **Response**:
  - **200 OK**: Returns the blog post with the specified ID.
  - **404 Not Found**: Returns an error message if the blog post is not found.
  - **500 Internal Server Error**: Returns an error message if the blog post could not be retrieved.

### PUT /api/blogs/:id
- **Description**: Update a specific blog post by ID.
- **Path Parameters**:
  - `id` (string): The ID of the blog post.
- **Request Body**:
  - `title` (string): The new title of the blog post.
  - `content` (string): The new content of the blog post.
- **Response**:
  - **200 OK**: Returns the updated blog post.
  - **404 Not Found**: Returns an error message if the blog post is not found.
  - **500 Internal Server Error**: Returns an error message if the blog post could not be updated.

### DELETE /api/blogs/:id
- **Description**: Delete a specific blog post by ID.
- **Path Parameters**:
  - `id` (string): The ID of the blog post.
- **Response**:
  - **200 OK**: Returns a success message indicating the blog post was deleted.
  - **404 Not Found**: Returns an error message if the blog post is not found.
  - **500 Internal Server Error**: Returns an error message if the blog post could not be deleted.