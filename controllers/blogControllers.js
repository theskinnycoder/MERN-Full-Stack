// Import the Article mongoose model for the CRUD operations
import Article from '../models/Article.js';

// GET ALL ARTICLES :
export const getAllArticles = async (_req, res) => {
  try {
    const allArticles = await Article.find();

    return res.status(200).json({
      success: true,
      data: allArticles
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

// GET AN ARTICLE BY ID :
export const getArticle = async (req, res) => {
  try {
    const requiredArticle = await Article.findById(req.params.id);

    if (!requiredArticle) {
      return res.status(404).json({
        success: false,
        message: 'No Article Found'
      });
    }

    return res.status(200).json({
      success: true,
      data: requiredArticle
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

// CREATE AN ARTICLE :
export const createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'New Article Added!',
      data: newArticle
    });
  } catch (err) {
    console.error(err);
    return err.name === 'ValidationError'
      ? res.status(400).json({
          success: false,
          message: Object.values(err.errors).map(error => error.message)
        })
      : res.status(500).json({
          success: false,
          message: 'Internal Server Error'
        });
  }
};

// UPDATE AN ARTICLE BY ID :
export const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    if (!updatedArticle) {
      return res.status(404).json({
        success: false,
        message: 'No Article Found'
      });
    }
    return res.status(201).json({
      success: true,
      message: 'Article Updated!',
      data: updatedArticle
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

// DELETE AN ARTICLE BY ID :
export const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);

    if (!deletedArticle) {
      return res.status(404).json({
        success: false,
        message: 'No Article Found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Article Deleted!'
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};
