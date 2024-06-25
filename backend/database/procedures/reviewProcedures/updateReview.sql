CREATE PROCEDURE UpdateReview
  @reviewId UNIQUEIDENTIFIER,
  @body NVARCHAR(MAX)
AS
BEGIN
  UPDATE reviews
  SET body = @body,
      updatedAt = GETDATE()
  WHERE id = @reviewId
END
GO
