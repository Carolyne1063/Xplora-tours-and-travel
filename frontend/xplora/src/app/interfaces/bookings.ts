export interface Booking {
    bookingId: string;
    tourId: string;
    userId: string;
    bookingDate: Date;
    status: string; // e.g., 'confirmed', 'pending', 'cancelled'
  }