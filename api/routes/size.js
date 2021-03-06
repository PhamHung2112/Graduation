 const router = require('express').Router();
 const SizeService = require('../services/SizeService');
 const authMiddleware = require('../middlewares/authMiddleware')
 
 router.get('/all',authMiddleware, SizeService.getAll);
 
 router.get('/:id',authMiddleware, SizeService.get);
 
 router.post('/create', SizeService.create);
 
 router.post('/update',authMiddleware, SizeService.update);
 
 router.delete('/delete/:id', SizeService.delete);

 module.exports = router;
