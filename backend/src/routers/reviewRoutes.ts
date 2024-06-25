import { Router } from 'express';
import { addReview, updateReview, deleteReview, getReviewsByTourId } from '../controllers/reviewController';

const router = Router();

router.post('/create-review', addReview);
router.put('/update-review/:id', updateReview);
router.delete('/delete-review/:id', deleteReview);
router.get('/tour/:tourId', getReviewsByTourId);

export default router;
