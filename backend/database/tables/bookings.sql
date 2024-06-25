CREATE TABLE bookings (
  bookingId VARCHAR (2555) PRIMARY KEY NOT NULL,
  tourId UNIQUEIDENTIFIER,
  userId VARCHAR(255),  -- Match the data type of userId in users table
  bookingDate DATETIME,
  status NVARCHAR(50),
  CONSTRAINT FK_Bookings_Tours FOREIGN KEY (tourId) REFERENCES tours(id),
  CONSTRAINT FK_Bookings_Users FOREIGN KEY (userId) REFERENCES users(userId)
);

DROP TABLE bookings;

SELECT * FROM bookings;