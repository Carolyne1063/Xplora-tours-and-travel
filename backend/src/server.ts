import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import tourRoutes from './routers/tourRoutes';
import userRoutes from './routers/userRoutes';
import cors from 'cors';
import bookingRoutes from './routers/bookingRoutes';
import reviewRoutes from './routers/reviewRoutes';
// import authenticationRoutes from './routers/authenticationRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use(cors())

// Use existing routes
app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);
app.use('/api', bookingRoutes);
app.use ('/api/reviews', reviewRoutes)
// app.use('/api/auth', authenticationRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
