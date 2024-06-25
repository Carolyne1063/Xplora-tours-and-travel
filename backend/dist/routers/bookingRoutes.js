"use strict";
// src/routes/bookingRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingController_1 = require("../controllers/bookingController");
const router = (0, express_1.Router)();
router.post('/bookings/create-booking', bookingController_1.createBookingController);
router.get('/bookings/:id', bookingController_1.getBookingByIdController);
router.get('/bookings/all-bookings', bookingController_1.getAllBookingsController);
router.put('/bookings/:id', bookingController_1.updateBookingController);
router.delete('/bookings/:id', bookingController_1.deleteBookingController);
exports.default = router;
