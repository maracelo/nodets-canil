import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', (req, res) =>{
    res.send('home', PageController.home);
})
router.get('/dogs', PageController.);
router.get('/cats', PageController);
router.get('/fishes', PageController);

router
export default router;