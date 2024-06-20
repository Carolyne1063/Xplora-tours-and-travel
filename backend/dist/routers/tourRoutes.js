"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/tourRoutes.ts
const express_1 = __importDefault(require("express"));
const tourContoller_1 = __importDefault(require("../controllers/tourContoller"));
const router = express_1.default.Router();
router.post('/tours', (req, res) => tourContoller_1.default.createTour(req, res));
router.put('/tours/:id', (req, res) => tourContoller_1.default.updateTourById(req, res));
router.delete('/tours/:id', (req, res) => tourContoller_1.default.deleteTourById(req, res));
router.get('/tours', (req, res) => tourContoller_1.default.getAllTours(req, res));
router.get('/tours/:id', (req, res) => tourContoller_1.default.getTourById(req, res));
exports.default = router;
