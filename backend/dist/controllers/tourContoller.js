"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTourByIdController = exports.getAllToursController = exports.updateTourController = exports.deleteTourController = exports.createTourController = void 0;
const tourService_1 = require("../services/tourService");
const createTourController = async (req, res) => {
    try {
        const tour = {
            id: '', // UUID will be generated in the service
            type: req.body.type,
            destination: req.body.destination,
            duration: req.body.duration,
            price: req.body.price,
            createdAt: new Date().toISOString()
        };
        await (0, tourService_1.createTour)(tour);
        res.status(201).json({ message: 'Tour created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createTourController = createTourController;
const deleteTourController = async (req, res) => {
    try {
        const tourId = req.params.id;
        await (0, tourService_1.deleteTour)(tourId);
        res.status(200).json({ message: 'Tour deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteTourController = deleteTourController;
const updateTourController = async (req, res) => {
    try {
        const tourId = req.params.id;
        const tour = req.body;
        await (0, tourService_1.updateTour)(tourId, tour);
        res.status(200).json({ message: 'Tour updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateTourController = updateTourController;
const getAllToursController = async (req, res) => {
    try {
        const tours = await (0, tourService_1.getAllTours)();
        res.status(200).json(tours);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllToursController = getAllToursController;
const getTourByIdController = async (req, res) => {
    try {
        const tourId = req.params.id;
        const tour = await (0, tourService_1.getTourById)(tourId);
        if (tour) {
            res.status(200).json(tour);
        }
        else {
            res.status(404).json({ message: 'Tour not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getTourByIdController = getTourByIdController;
