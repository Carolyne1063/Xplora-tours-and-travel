CREATE PROCEDURE CreateTour
  @id UNIQUEIDENTIFIER,
  @type NVARCHAR(50),
  @destination NVARCHAR(100),
  @duration NVARCHAR(50),
  @price NVARCHAR(50),
  @createdAt DATETIME
AS
BEGIN
  INSERT INTO tours (id, type, destination, duration, price, createdAt)
  VALUES (@id, @type, @destination, @duration, @price, @createdAt)
END
GO
