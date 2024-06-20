import { Tour } from '../interfaces/tours';
import { v4 as uuidv4 } from 'uuid';

export class TourService {
    private tours: Tour[] = [];

    public createTour(newTour: Tour): Tour {
        const tour: Tour = {
            ...newTour,
            id: uuidv4(),
            createdAt: new Date().toISOString(),
        };
        this.tours.push(tour);
        return tour;
    }

    public updateTourById(id: string, updatedTour: Tour): Tour | undefined {
        const index = this.tours.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tours[index] = { ...this.tours[index], ...updatedTour };
            return this.tours[index];
        }
        return undefined;
    }

    public deleteTourById(id: string): void {
        this.tours = this.tours.filter(t => t.id !== id);
    }

    public getAllTours(): Tour[] {
        return this.tours;
    }

    public getTourById(id: string): Tour | undefined {
        return this.tours.find(t => t.id === id);
    }
}
