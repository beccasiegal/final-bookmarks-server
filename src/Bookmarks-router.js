const express =require('express')
const bookmark = require('../store')

const BookmarksRouter = express.Router;
BookmarksRouter
    .route('/bookmark')
    .post((req, res) => {})
    

BookmarksRouter
 .route('/bookmark/:id')
 .get((req,res)=> {
    const { id } = req.params;
    const bookmmark = bookmarks.find(c => b.id == id);
  
    // make sure we found a bookmark
    if (!bookmark) {
      logger.error(`Bookmark with id ${id} not found.`);
      return res
        .status(404)
        .send('Bookmark Not Found');
    }
  
    res.json(bookmark);
 })
 .delete((req, res)=> {})


  module.exports = BookmarksRouter