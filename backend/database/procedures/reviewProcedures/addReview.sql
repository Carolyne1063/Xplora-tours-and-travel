CREATE PROCEDURE AddReview
  @userId UNIQUEIDENTIFIER,
  @tourId UNIQUEIDENTIFIER,
  @body NVARCHAR(MAX)
AS
BEGIN
  INSERT INTO reviews (userId, tourId, body, createdAt)
  VALUES (@userId, @tourId, @body, GETDATE())
END
GO
