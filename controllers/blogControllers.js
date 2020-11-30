import Article from '../models/Article.js';
import asyncHandler from 'express-async-handler';

// GET    /api/articles/
export const getAllArticles = asyncHandler(async (_, res) => {
  const allArticles = await Article.find();

  res.json({
    success: true,
    data: allArticles
  });
});

// GET    /api/articles/:id/:
export const getArticle = asyncHandler(async (req, res) => {
  const requiredArticle = await Article.findById(req.params.id);

  if (!requiredArticle) {
    res.status(404);
    throw new Error('No Article Found!');
  }

  res.json({
    success: true,
    data: requiredArticle
  });
});

// POST    /api/articles/
export const createArticle = asyncHandler(async (req, res) => {
  const newArticle = await Article.create(req.body);

  res.status(201).json({
    success: true,
    message: 'New Article Added!',
    data: newArticle
  });
});

// PATCH    /api/articles/:id/
export const updateArticle = asyncHandler(async (req, res) => {
  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedArticle) {
    res.status(404);
    throw new Error('No Article Found!');
  }

  res.json({
    success: true,
    message: 'Article Updated!',
    data: updatedArticle._id
  });
});

// DELETE    /api/articles/:id/
export const deleteArticle = asyncHandler(async (req, res) => {
  const deletedArticle = await Article.findByIdAndDelete(req.params.id);

  if (!deletedArticle) {
    res.status(404);
    throw new Error('No Article Found!');
  }

  res.json({
    success: true,
    message: 'Article Deleted!',
    data: deletedArticle._id
  });
});
