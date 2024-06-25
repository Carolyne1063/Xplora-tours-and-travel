"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingController = exports.updateBookingController = exports.getAllBookingsController = exports.getBookingByIdController = exports.createBookingController = void 0;
const bookingService_1 = require("../services/bookingService");
const createBookingController = async (req, res) => {
    try {
        const booking = req.body;
        const result = await (0, bookingService_1.createBooking)(booking);
        res.status(201).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.createBookingController = createBookingController;
const getBookingByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await (0, bookingService_1.getBookingById)(id);
        res.status(200).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.getBookingByIdController = getBookingByIdController;
const getAllBookingsController = async (req, res) => {
    try {
        const bookings = await (0, bookingService_1.getAllBookings)();
        if (bookings.length === 0) {
            // If no bookings found, return an appropriate response
            res.status(404).json({ message: 'No bookings found' });
        }
        else {
            // If bookings found, return them in the response body
            res.status(200).json(bookings);
        }
    }
    catch (error) {
        // Handle errors
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.getAllBookingsController = getAllBookingsController;
const updateBookingController = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = req.body;
        const result = await (0, bookingService_1.updateBooking)(id, booking);
        res.status(200).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.updateBookingController = updateBookingController;
const deleteBookingController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await (0, bookingService_1.deleteBooking)(id);
        res.status(200).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.deleteBookingController = deleteBookingController;
