import Rant from '../models/Rant.js';
import asyncHandler from 'express-async-handler';

// GET    /api/rants/
export const getAllRants = asyncHandler(async (_, res) => {
  const allRants = await Rant.find();

  res.json({
    success: true,
    data: allRants
  });
});

// GET    /api/rants/:id/:
export const getRantByID = asyncHandler(async (req, res) => {
  const requiredRant = await Rant.findById(req.params.id);

  if (!requiredRant) {
    res.status(404);
    throw new Error('No Rant Found!');
  }

  res.json({
    success: true,
    data: requiredRant
  });
});

// POST    /api/rants/
export const createRant = asyncHandler(async (req, res) => {
  const newRant = await Rant.create(req.body);

  res.status(201).json({
    success: true,
    message: 'New Rant Added!',
    data: newRant
  });
});

// PATCH    /api/rants/:id/
export const updateRantByID = asyncHandler(async (req, res) => {
  const updatedRant = await Rant.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!updatedRant) {
    res.status(404);
    throw new Error('No Rant Found!');
  }

  res.json({
    success: true,
    message: 'Rant Updated!',
    data: updatedRant
  });
});

// DELETE    /api/rants/:id/
export const deleteRantByID = asyncHandler(async (req, res) => {
  const deletedRant = await Rant.findByIdAndDelete(req.params.id);

  if (!deletedRant) {
    res.status(404);
    throw new Error('No Rant Found!');
  }

  res.json({
    success: true,
    message: 'Rant Deleted!',
    data: deletedRant._id
  });
});
