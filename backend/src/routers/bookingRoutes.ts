// src/routes/bookingRoutes.ts

import { Router } from 'express';
import { createBookingController, getBookingByIdController, getAllBookingsController, updateBookingController, deleteBookingController } from '../controllers/bookingController';

const router = Router();

router.post('/bookings/create-booking', createBookingController);
router.get('/bookings/:id', getBookingByIdController);
router.get('/bookings/all-bookings', getAllBookingsController);
router.put('/bookings/:id', updateBookingController);
router.delete('/bookings/:id', deleteBookingController);

export default router;
