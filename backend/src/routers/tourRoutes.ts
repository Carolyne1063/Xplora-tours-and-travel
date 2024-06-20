import express from 'express';
import tourContoller from '../controllers/tourContoller';

const router = express.Router();

router.post('/tours', (req, res) => tourContoller.createTour(req, res));
router.put('/tours/:id', (req, res) => tourContoller.updateTourById(req, res));
router.delete('/tours/:id', (req, res) => tourContoller.deleteTourById(req, res));
router.get('/tours', (req, res) => tourContoller.getAllTours(req, res));
router.get('/tours/:id', (req, res) => tourContoller.getTourById(req, res));

export default router;
