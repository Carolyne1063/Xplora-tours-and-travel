import { Request, Response } from 'express';
import { createBooking, getBookingById, getAllBookings, updateBooking, deleteBooking } from '../services/bookingService';

const createBookingController = async (req: Request, res: Response) => {
  try {
    const booking = req.body;
    const result = await createBooking(booking);
    res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

const getBookingByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getBookingById(id);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

const getAllBookingsController = async (req: Request, res: Response) => {
    try {
      const bookings = await getAllBookings();
  
      if (bookings.length === 0) {
        // If no bookings found, return an appropriate response
        res.status(404).json({ message: 'No bookings found' });
      } else {
        // If bookings found, return them in the response body
        res.status(200).json(bookings);
      }
    } catch (error) {
      // Handle errors
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  };

const updateBookingController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking = req.body;
    const result = await updateBooking(id, booking);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

const deleteBookingController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteBooking(id);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export { createBookingController, getBookingByIdController, getAllBookingsController, updateBookingController, deleteBookingController };
