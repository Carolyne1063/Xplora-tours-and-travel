"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.getAllBookings = exports.getBookingById = exports.createBooking = void 0;
const sql = __importStar(require("mssql"));
const sqlConfig_1 = require("../sqlConfig");
const uuid_1 = require("uuid");
const createBooking = async (booking) => {
    const bookingId = (0, uuid_1.v4)(); // Generate UUID for bookingId
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const request = pool.request()
        .input('bookingId', sql.NVarChar, bookingId) // Use VARCHAR for bookingId
        .input('tourId', sql.NVarChar, booking.tourId)
        .input('userId', sql.NVarChar, booking.userId)
        .input('bookingDate', sql.DateTime, booking.bookingDate)
        .input('status', sql.NVarChar, booking.status);
    const result = await request.query('INSERT INTO bookings (bookingId, tourId, userId, bookingDate, status) ' +
        'VALUES (@bookingId, @tourId, @userId, @bookingDate, @status)');
    return result;
};
exports.createBooking = createBooking;
const getBookingById = async (bookingId) => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const result = await pool.request()
        .input('bookingId', sql.NVarChar, bookingId) // Use VARCHAR for bookingId
        .query('SELECT * FROM bookings WHERE bookingId = @bookingId');
    return result.recordset[0];
};
exports.getBookingById = getBookingById;
const getAllBookings = async () => {
    try {
        const pool = await sql.connect(sqlConfig_1.sqlConfig);
        const result = await pool.request().query('SELECT * FROM bookings');
        return result.recordset;
    }
    catch (error) {
        // Handle specific SQL errors or rethrow with a more specific error message
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
};
exports.getAllBookings = getAllBookings;
const updateBooking = async (bookingId, booking) => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
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
exports.updateBooking = updateBooking;
const deleteBooking = async (bookingId) => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const result = await pool.request()
        .input('bookingId', sql.NVarChar, bookingId) // Use VARCHAR for bookingId
        .query('DELETE FROM bookings WHERE bookingId = @bookingId');
    return result;
};
exports.deleteBooking = deleteBooking;
