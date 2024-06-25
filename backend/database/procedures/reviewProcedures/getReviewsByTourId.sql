CREATE PROCEDURE GetReviewsByTourId
  @tourId UNIQUEIDENTIFIER
AS
BEGIN
  SELECT id, userId, tourId, body, createdAt, updatedAt
  FROM reviews
  WHERE tourId = @tourId
END
GO
