import * as sql from 'mssql';
import { sqlConfig } from '../sqlConfig';
import { Booking } from '../interfaces/bookings';
import { v4 as uuidv4 } from 'uuid';

const createBooking = async (booking: Booking) => {
  const bookingId = uuidv4(); // Generate UUID for bookingId
  const pool = await sql.connect(sqlConfig);
  const request = pool.request()
    .input('bookingId', sql.NVarChar, bookingId) // Use VARCHAR for bookingId
    .input('tourId', sql.NVarChar, booking.tourId)
    .input('userId', sql.NVarChar, booking.userId)
    .input('bookingDate', sql.DateTime, booking.bookingDate)
    .input('status', sql.NVarChar, booking.status);

  const result = await request.query(
    'INSERT INTO bookings (bookingId, tourId, userId, bookingDate, status) ' +
    'VALUES (@bookingId, @tourId, @userId, @bookingDate, @status)'
  );

  return result;
};

const getBookingById = async (bookingId: string) => {
  const pool = await sql.connect(sqlConfig);
  const result = await pool.request()
    .input('bookingId', sql.NVarChar, bookingId) // Use VARCHAR for bookingId
    .query('SELECT * FROM bookings WHERE bookingId = @bookingId');
  return result.recordset[0];
};

const getAllBookings = async (): Promise<Booking[]> => {
    try {
      const pool = await sql.connect(sqlConfig);
      const result = await pool.request().query('SELECT * FROM bookings');
      console.log(result.recordset);
      
      return result.recordset[0] as Booking[];
    } catch (error: any) {
      console.error(`Error fetching bookings: ${error.message}`);
      throw new Error(`Error fetching bookings: ${error.message}`);
    }
  };
  

const updateBooking = async (bookingId: string, booking: Partial<Booking>) => {
  const pool = await sql.connect(sqlConfig);
  const fieldsToUpdate = Object.keys(booking)
    .map(key => `${key} = @${key}`)
    .join(', ');
  const request = pool.request().input('bookingId', sql.NVarChar, bookingId); // Use VARCHAR for bookingId
  Object.entries(booking).forEach(([key, value]) => {
    request.input(key, sql.NVarChar, value);
  });
  const result = await request.query(`UPDATE bookings SET ${fieldsToUpdate} WHERE bookingId = @bookingId`);
  return result;
};

const deleteBooking = async (bookingId: string) => {
  const pool = await sql.connect(sqlConfig);
  const result = await pool.request()
    .input('bookingId', sql.NVarChar, bookingId) // Use VARCHAR for bookingId
    .query('DELETE FROM bookings WHERE bookingId = @bookingId');
  return result;
};

export { createBooking, getBookingById, getAllBookings, updateBooking, deleteBooking };
