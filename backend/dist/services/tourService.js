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
exports.getTourById = exports.getAllTours = exports.updateTour = exports.deleteTour = exports.createTour = void 0;
const sql = __importStar(require("mssql"));
const sqlConfig_1 = require("../sqlConfig");
const uuid_1 = require("uuid");
const createTour = async (tour) => {
    const tourId = (0, uuid_1.v4)();
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const result = await pool
        .request()
        .input('id', sql.UniqueIdentifier, tourId)
        .input('type', sql.NVarChar, tour.type)
        .input('destination', sql.NVarChar, tour.destination)
        .input('duration', sql.NVarChar, tour.duration)
        .input('price', sql.NVarChar, tour.price)
        .input('createdAt', sql.DateTime, new Date())
        .query('INSERT INTO tours (id, type, destination, duration, price, createdAt) ' +
        'VALUES (@id, @type, @destination, @duration, @price, @createdAt)');
    return result;
};
exports.createTour = createTour;
const deleteTour = async (tourId) => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const result = await pool
        .request()
        .input('id', sql.UniqueIdentifier, tourId)
        .query('DELETE FROM tours WHERE id = @id');
    return result;
};
exports.deleteTour = deleteTour;
const updateTour = async (tourId, tour) => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
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
exports.updateTour = updateTour;
const getAllTours = async () => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const result = await pool.request().query('SELECT * FROM tours');
    return result.recordset;
};
exports.getAllTours = getAllTours;
const getTourById = async (tourId) => {
    const pool = await sql.connect(sqlConfig_1.sqlConfig);
    const result = await pool
        .request()
        .input('id', sql.UniqueIdentifier, tourId)
        .query('SELECT * FROM tours WHERE id = @id');
    return result.recordset[0];
};
exports.getTourById = getTourById;
