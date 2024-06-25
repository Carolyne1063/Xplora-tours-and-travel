CREATE TABLE bookings (
  bookingId VARCHAR (255) PRIMARY KEY NOT NULL,
  tourId UNIQUEIDENTIFIER,
  userId VARCHAR(255),  
  bookingDate DATETIME,
  status NVARCHAR(50),
  CONSTRAINT FK_Bookings_Tours FOREIGN KEY (tourId) REFERENCES tours(id),
  CONSTRAINT FK_Bookings_Users FOREIGN KEY (userId) REFERENCES users(userId)
);

ALTER TABLE bookings DROP COLUMN bookingId;

DROP TABLE bookings;

SELECT * FROM bookings;