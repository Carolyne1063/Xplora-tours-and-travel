"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourService = void 0;
const uuid_1 = require("uuid");
class TourService {
    tours = [];
    createTour(newTour) {
        const tour = {
            ...newTour,
            id: (0, uuid_1.v4)(),
            createdAt: new Date().toISOString(),
        };
        this.tours.push(tour);
        return tour;
    }
    updateTourById(id, updatedTour) {
        const index = this.tours.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tours[index] = { ...this.tours[index], ...updatedTour };
            return this.tours[index];
        }
        return undefined;
    }
    deleteTourById(id) {
        this.tours = this.tours.filter(t => t.id !== id);
    }
    getAllTours() {
        return this.tours;
    }
    getTourById(id) {
        return this.tours.find(t => t.id === id);
    }
}
exports.TourService = TourService;
