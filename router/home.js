import { Router } from 'express';
import {    create, list,read, remove, search, update } from '../controller/products';
import { userById } from '../controller/user';
import { checkAuth,isAdmin, isAuth, requireSignin} from '../middeawe/checkAuth' 
const router = Router();

// resful API
// router.post('/signup', checkAuth,signup );
// router.post('/signin', checkAuth,signin);

router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/:userId',requireSignin,isAuth,isAdmin,create);
router.post('/products',create);
router.delete('/products/:id', checkAuth, remove);
router.put('/products/:id', checkAuth, update )
router.get('/search',search);

router.param("userId",userById);
export default router;