import { Router } from "express";
import { create, list, read } from "../controller/category";
const router = Router();


router.get('/category',list)
router.post('/category',create)
router.get('/category/:id',read)

export default router;