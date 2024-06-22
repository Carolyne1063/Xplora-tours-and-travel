import { Request, Response } from 'express';
import { createTour, deleteTour, updateTour, getAllTours, getTourById } from '../services/tourService';
import { Tour } from '../interfaces/tours';

const createTourController = async (req: Request, res: Response) => {
  try {
    const tour: Tour = {
      id: '', // UUID will be generated in the service
      type: req.body.type,
      destination: req.body.destination,
      duration: req.body.duration,
      price: req.body.price,
      createdAt: new Date().toISOString()
    };
    await createTour(tour);
    res.status(201).json({ message: 'Tour created successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const deleteTourController = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.id;
    await deleteTour(tourId);
    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const updateTourController = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.id;
    const tour = req.body;
    await updateTour(tourId, tour);
    res.status(200).json({ message: 'Tour updated successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getAllToursController = async (req: Request, res: Response) => {
  try {
    const tours = await getAllTours();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getTourByIdController = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.id;
    const tour = await getTourById(tourId);
    if (tour) {
      res.status(200).json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export { createTourController, deleteTourController, updateTourController, getAllToursController, getTourByIdController };
