import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser, getUserByUsername } from '../Auth/UserController.js'
import authMiddleWare from '../middleware/Authmiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/username/:username', getUserByUsername); // New route for getting user by username
router.get('/', getAllUsers);
router.put('/:id', authMiddleWare, updateUser);
router.delete('/:id', authMiddleWare, deleteUser);

export default router;
