import express from 'express';

// Import all rants' controllers
import {
  createRant,
  deleteRantByID,
  getAllRants,
  getRantByID,
  updateRantByID
} from '../controllers/rantsControllers.js';

// Initialise the Express Router
const router = express.Router();

// Attach controllers to all routes ending at '/rantes/'
router.route('/').get(getAllRants).post(createRant);

// Attch controllers to all routes ending at '/rants/:id/'
router
  .route('/:id/')
  .get(getRantByID)
  .delete(deleteRantByID)
  .patch(updateRantByID);

export default router;
