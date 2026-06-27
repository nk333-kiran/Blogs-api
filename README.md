# Blog API with Pagination & Filtering

A RESTful Blog API built using **Node.js**, **Express.js**, and **MongoDB**.
This API supports full CRUD operations for blog posts along with pagination, filtering, and sorting.

---

## Features

* Create a new blog post
* Get all blog posts
* Get a single blog post by ID
* Update a blog post
* Delete a blog post
* Pagination using `limit` and `skip`
* Filtering by:

  * Author
  * Tag
  * Date range
* Sorting:

  * Newest first
  * Oldest first

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* Dotenv

---

## Project Structure

```bash
blog-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── blogController.js
│
├── models/
│   └── BlogPost.js
│
├── routes/
│   └── blogRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Installation

Clone repository:

```bash
git clone <your-github-repo-url>
```

Move into project:

```bash
cd blog-api
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
```

Run project:

```bash
npm run dev
```

---

## API Base URL

```bash
http://localhost:5000/api/posts
```

---

## API Endpoints

### 1. Create Post

**POST** `/api/posts`

Request Body:

```json
{
  "title": "Node Guide",
  "body": "Learning CRUD APIs",
  "author": "Navaneeth",
  "tags": ["node", "backend"]
}
```

---

### 2. Get All Posts

**GET** `/api/posts`

Example:

```bash
GET /api/posts
```

---

### 3. Pagination

Example:

```bash
GET /api/posts?limit=5&skip=10
```

Parameters:

* `limit` → Number of posts to return
* `skip` → Number of posts to skip

---

### 4. Filter by Author

```bash
GET /api/posts?author=Navaneeth
```

---

### 5. Filter by Tag

```bash
GET /api/posts?tag=node
```

---

### 6. Filter by Date Range

```bash
GET /api/posts?startDate=2026-01-01&endDate=2026-12-31
```

---

### 7. Sorting

Newest first:

```bash
GET /api/posts?sort=newest
```

Oldest first:

```bash
GET /api/posts?sort=oldest
```

---

### 8. Get Single Post

```bash
GET /api/posts/:id
```

---

### 9. Update Post

```bash
PUT /api/posts/:id
```

Request Body:

```json
{
  "title": "Updated Title"
}
```

---

### 10. Delete Post

```bash
DELETE /api/posts/:id
```

---

## Database Schema

```js
{
  title: String,
  body: String,
  author: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

---

## Performance Optimization

Indexes are used for faster filtering and sorting:

```js
blogSchema.index({ author: 1, createdAt: -1 });
```

---

## Author

Navaneeth Kiran
Full Stack Developer | Computer Science Student
