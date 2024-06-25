import { Request, Response } from 'express';
import { pool } from 'mssql';


export const addReview = async (req: Request, res: Response) => {
    const { userId, tourId, body } = req.body;
    try {
      const request = pool.request();
      request.input('userId', userId);
      request.input('tourId', tourId);
      request.input('body', body);
      
      const result = await request.query('EXEC AddReview @userId, @tourId, @body');
      res.status(201).send('Review added successfully');
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
  
  export const updateReview = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
      const request = pool.request();
      request.input('id', id);
      request.input('body', body);
      
      const result = await request.query('EXEC UpdateReview @id, @body');
      res.status(200).send('Review updated successfully');
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
  
  export const deleteReview = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const request = pool.request();
      request.input('id', id);
      
      const result = await request.query('EXEC DeleteReview @id');
      res.status(200).send('Review deleted successfully');
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
  
  export const getReviewsByTourId = async (req: Request, res: Response) => {
    const { tourId } = req.params;
    try {
      const request = pool.request();
      request.input('tourId', tourId);
      
      const result = await request.query('EXEC GetReviewsByTourId @tourId');
      res.status(200).json(result.recordset);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };