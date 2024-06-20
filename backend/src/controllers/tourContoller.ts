
import { Request, Response } from 'express';
import { Tour } from '../interfaces/tours';
import { TourService } from '../services/tourService';

const tourService = new TourService();

export class TourController {
    public createTour(req: Request, res: Response): void {
        const { type, destination, duration, price } = req.body;
        const newTour: Tour = {
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

    public updateTourById(req: Request, res: Response): void {
        const { id } = req.params;
        const { type, destination, duration, price } = req.body;
        const updatedTour: Tour = {
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
        } else {
            res.status(404).json({ message: 'Tour not found' });
        }
    }

    public deleteTourById(req: Request, res: Response): void {
        const { id } = req.params;
        tourService.deleteTourById(id);
        res.status(204).end();
    }

    public getAllTours(req: Request, res: Response): void {
        const tours = tourService.getAllTours();
        res.json(tours);
    }

    public getTourById(req: Request, res: Response): void {
        const { id } = req.params;
        const tour = tourService.getTourById(id);

        if (tour) {
            res.json(tour);
        } else {
            res.status(404).json({ message: 'Tour not found' });
        }
    }
}


export default new TourController();
