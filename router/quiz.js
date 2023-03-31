const router = require('express').Router();
const soalController = require('../controllers/quiz')

router.post('/', soalController.create);
router.get('/', soalController.getAll)
router.get('/:id', soalController.findOne);
router.get('/category/:id', soalController.getByCategoryId);
router.delete('/:id', soalController.delete);
router.put('/:id', soalController.update);

module.exports = router;