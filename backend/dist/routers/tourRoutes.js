"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tourContoller_1 = require("../controllers/tourContoller");
const router = (0, express_1.Router)();
router.post('/create-tour', tourContoller_1.createTourController); // Endpoint for creating a new tour
router.put('/:id', tourContoller_1.updateTourController); // Endpoint for updating a tour by its id
router.delete('/:id', tourContoller_1.deleteTourController); // Endpoint for deleting a tour by its id
router.get('/tours', tourContoller_1.getAllToursController); // Endpoint for fetching all tours
router.get('/:id', tourContoller_1.getTourByIdController); // Endpoint for fetching a tour by its id
exports.default = router;
