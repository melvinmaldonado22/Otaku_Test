import express from 'express';
import { authUser } from '../controllers/usuario-controller';

const router = express.Router();

router.post('/auth' , authUser);

export default router;