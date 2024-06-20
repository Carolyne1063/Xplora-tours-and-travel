"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourController = void 0;
const tourService_1 = require("../services/tourService");
const tourService = new tourService_1.TourService();
class TourController {
    createTour(req, res) {
        const { type, destination, duration, price } = req.body;
        const newTour = {
            type,
            destination,
            duration,
            price,
            id: '',
            createdAt: '',
        };
        const createdTour = tourService.createTour(newTour);
        res.status(201).json(createdTour);
    }
    updateTourById(req, res) {
        const { id } = req.params;
        const { type, destination, duration, price } = req.body;
        const updatedTour = {
            type,
            destination,
            duration,
            price,
            id,
            createdAt: '',
        };
        const updated = tourService.updateTourById(id, updatedTour);
        if (updated) {
            res.json(updated);
        }
        else {
            res.status(404).json({ message: 'Tour not found' });
        }
    }
    deleteTourById(req, res) {
        const { id } = req.params;
        tourService.deleteTourById(id);
        res.status(204).end();
    }
    getAllTours(req, res) {
        const tours = tourService.getAllTours();
        res.json(tours);
    }
    getTourById(req, res) {
        const { id } = req.params;
        const tour = tourService.getTourById(id);
        if (tour) {
            res.json(tour);
        }
        else {
            res.status(404).json({ message: 'Tour not found' });
        }
    }
}
exports.TourController = TourController;
// Export an instance of the TourController class
exports.default = new TourController();
