"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const tourRoutes_1 = __importDefault(require("./routers/tourRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
// Routes
app.use('/api', tourRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
