import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import tourRoutes from './routers/tourRoutes';
import userRoutes from './routers/userRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', tourRoutes);
app.use('/api', userRoutes);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
