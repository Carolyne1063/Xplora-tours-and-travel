"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const tourRoutes_1 = __importDefault(require("./routers/tourRoutes"));
const userRoutes_1 = __importDefault(require("./routers/userRoutes"));
const cors_1 = __importDefault(require("cors"));
const bookingRoutes_1 = __importDefault(require("./routers/bookingRoutes"));
// import authenticationRoutes from './routers/authenticationRoutes';
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Use existing routes
app.use('/api/tours', tourRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api', bookingRoutes_1.default);
// app.use('/api/auth', authenticationRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
