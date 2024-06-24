import { Router } from 'express';
import { createTourController,updateTourController, deleteTourController, getAllToursController, getTourByIdController } from '../controllers/tourContoller';

const router = Router();

router.post('/create-tour', createTourController); // Endpoint for creating a new tour
router.put('/:id', updateTourController); // Endpoint for updating a tour by its id
router.delete('/:id', deleteTourController); // Endpoint for deleting a tour by its id
router.get('/tours', getAllToursController); // Endpoint for fetching all tours
router.get('/:id', getTourByIdController); // Endpoint for fetching a tour by its id

export default router;