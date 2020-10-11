// Import Router from express
import { Router } from 'express';

// Import all blog-controllers
import {
	createArticle,
	getAllArticles,
	getArticleByID,
	deleteArticle,
	updateArticle,
} from '../controllers/blogControllers';

// Initialise the Express Router
const router = Router();

// Add blog-controllers to all routes ending at 'blog/'
router.route('/').get(getAllArticles).post(createArticle);

// Add blog-controllers to all routes ending at 'blog/:id'
router
	.route('/:id')
	.get(getArticleByID)
	.delete(deleteArticle)
	.patch(updateArticle);

// Export the router to attach it to the primary route hitter
export default router;
