const router = require('express').Router();
const soalController = require('../controllers/quiz')

router.post('/', soalController.create);
router.get('/', soalController.getAll)
router.get('/:id', soalController.findOne);
router.get('/category/:category', soalController.getByCategory);
router.delete('/:id', soalController.delete);

module.exports = router;