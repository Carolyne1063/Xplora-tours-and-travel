CREATE PROCEDURE CreateTour
  @id UNIQUEIDENTIFIER,
  @type NVARCHAR(50),
  @destination NVARCHAR(100),
  @duration NVARCHAR(50),
  @price NVARCHAR(50),
  @createdAt DATETIME, 
  @imageUrl VARCHAR(255)
AS
BEGIN
  INSERT INTO tours (id, type, destination, duration, price, createdAt, imageUrl)
  VALUES (@id, @type, @destination, @duration, @price, @createdAt, @imageUrl)
END
GO

DROP PROCEDURE CreateTour;