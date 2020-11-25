// Import Router from Express
import express from 'express';

// Import all blog-controllers
import {
  createArticle,
  getAllArticles,
  getArticle,
  deleteArticle,
  updateArticle
} from '../controllers/blogControllers.js';

// Initialise the Express Router
const router = express.Router();

// Add blog-controllers to all routes ending at '/blog/'
router.route('/').get(getAllArticles).post(createArticle);

// Add blog-controllers to all routes ending at '/blog/:id/'
router
  .route('/:id/')
  .get(getArticle)
  .delete(deleteArticle)
  .patch(updateArticle);

export default router;
