import * as sql from 'mssql';
import { sqlConfig } from '../sqlConfig';
import { Tour } from '../interfaces/tours';
import { v4 as uuidv4 } from 'uuid';

const createTour = async (tour: Tour) => {
  const tourId = uuidv4();
  const pool = await sql.connect(sqlConfig);
  const result = await pool
    .request()
    .input('id', sql.UniqueIdentifier, tourId)
    .input('type', sql.NVarChar, tour.type)
    .input('destination', sql.NVarChar, tour.destination)
    .input('duration', sql.NVarChar, tour.duration)
    .input('price', sql.NVarChar, tour.price)
    .input('createdAt', sql.DateTime, new Date())
    .input('imageUrl', sql.VarChar, tour.imageUrl)
    .query(
      'INSERT INTO tours (id, type, destination, duration, price, createdAt, imageUrl) ' +
      'VALUES (@id, @type, @destination, @duration, @price, @createdAt, @imageUrl)'
    );
  return result;
};

const deleteTour = async (tourId: string) => {
  const pool = await sql.connect(sqlConfig);
  const result = await pool
    .request()
    .input('id', sql.UniqueIdentifier, tourId)
    .query('DELETE FROM tours WHERE id = @id');
  return result;
};

const updateTour = async (tourId: string, tour: Partial<Tour>) => {
  const pool = await sql.connect(sqlConfig);
  const fieldsToUpdate = Object.keys(tour)
    .map(key => `${key} = @${key}`)
    .join(', ');
  const request = pool.request().input('id', sql.UniqueIdentifier, tourId);
  Object.entries(tour).forEach(([key, value]) => {
    request.input(key, sql.NVarChar, value);
  });
  const result = await request.query(`UPDATE tours SET ${fieldsToUpdate} WHERE id = @id`);
  return result;
};

const getAllTours = async () => {
  const pool = await sql.connect(sqlConfig);
  const result = await pool.request().query('SELECT * FROM tours');
  return result.recordset;
};

const getTourById = async (tourId: string) => {
  const pool = await sql.connect(sqlConfig);
  const result = await pool
    .request()
    .input('id', sql.UniqueIdentifier, tourId)
    .query('SELECT * FROM tours WHERE id = @id');
  return result.recordset[0];
};

export { createTour, deleteTour, updateTour, getAllTours, getTourById };
