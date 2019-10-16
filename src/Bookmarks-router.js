const express = require('express')

const BookmarksRouter = express.Router()
const bodyParser = express.json()

BookmarksRouter
  .route('/bookmarks')
  .get((req, res) => {
    app.get('/', (req, res) => {
      res.send('Hello, Bookmark!')
     })
  })
  .post(bodyParser, (req, res) => {
    app.post('/list', (req, res) => {
      const { header, Bookmarksids = [] } = req.body;
    
      if (!header) {
        logger.error(`Header is required`);
        return res
          .status(400)
          .send('Invalid data');
      }
    
      // check bookmarks IDs
      if (BbookmarksIds.length > 0) {
        let valid = true;
        BookmarksIds.forEach(bid => {
          const bookmark = bookmarks.find(c => b.id == bid);
          if (!bookmarks) {
            logger.error(`Bookmark with id ${bid} not found in bookmarks array.`);
            valid = false;
          }
        });
    
        if (!valid) {
          return res
            .status(400)
            .send('Invalid data');
        }
      }
    
      // get an id
      const id = uuid();
    
      const list = {
        id,
        header,
        BookmarksIds
      };
    
      lists.push(list);
    
      logger.info(`List with id ${id} created`);
    
      res
        .status(201)
        .location(`http://localhost:8000/list/${id}`)
        .json({id});
    });
  })

BookmarksRouter
  .route('/bookmarks/:id')
  .get((req, res) => {
    app.get('/', (req, res) => {
      res.send('Hello, Bookmarks!')
     })
  })
  .delete((req, res) => {
    app.delete('/list/:id', (req, res) => {
      const { id } = req.params;
    
      const listIndex = lists.findIndex(li => li.id == id);
    
      if (listIndex === -1) {
        logger.error(`List with id ${id} not found.`);
        return res
          .status(404)
          .send('Not Found');
      }
    
      lists.splice(listIndex, 1);
    
      logger.info(`List with id ${id} deleted.`);
      res
        .status(204)
        .end();
    });
  })

module.exports = BookmarksRouter