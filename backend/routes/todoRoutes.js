const router = require("express").Router();
const { createController, readController, updateController, deleteController } = require('../controllers.js/todoControllers');
router.post('/create', createController);
router.get('/getall', readController);
router.put('/update', updateController);
router.delete('/delete', deleteController);
exports.TodoRoutes = router;
