import express from "express";
import { 
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    // Register
 } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users/add', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
// auth
// router.post('/auth/register', Register);

export default router;