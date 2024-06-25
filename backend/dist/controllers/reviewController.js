"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewsByTourId = exports.deleteReview = exports.updateReview = exports.addReview = void 0;
const mssql_1 = require("mssql");
const addReview = async (req, res) => {
    const { userId, tourId, body } = req.body;
    try {
        const request = mssql_1.pool.request();
        request.input('userId', userId);
        request.input('tourId', tourId);
        request.input('body', body);
        const result = await request.query('EXEC AddReview @userId, @tourId, @body');
        res.status(201).send('Review added successfully');
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.addReview = addReview;
const updateReview = async (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const request = mssql_1.pool.request();
        request.input('id', id);
        request.input('body', body);
        const result = await request.query('EXEC UpdateReview @id, @body');
        res.status(200).send('Review updated successfully');
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.updateReview = updateReview;
const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const request = mssql_1.pool.request();
        request.input('id', id);
        const result = await request.query('EXEC DeleteReview @id');
        res.status(200).send('Review deleted successfully');
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.deleteReview = deleteReview;
const getReviewsByTourId = async (req, res) => {
    const { tourId } = req.params;
    try {
        const request = mssql_1.pool.request();
        request.input('tourId', tourId);
        const result = await request.query('EXEC GetReviewsByTourId @tourId');
        res.status(200).json(result.recordset);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getReviewsByTourId = getReviewsByTourId;
