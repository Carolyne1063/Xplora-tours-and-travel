CREATE PROCEDURE UpdateTour
  @id UNIQUEIDENTIFIER,
  @type NVARCHAR(50) = NULL,
  @destination NVARCHAR(100) = NULL,
  @duration NVARCHAR(50) = NULL,
  @price NVARCHAR(50) = NULL
AS
BEGIN
  UPDATE tours
  SET type = ISNULL(@type, type),
      destination = ISNULL(@destination, destination),
      duration = ISNULL(@duration, duration),
      price = ISNULL(@price, price)
  WHERE id = @id
END

