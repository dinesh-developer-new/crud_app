import express from 'express'
import { crudCreate, crudDelete, crudIndex, crudUpdate } from '../controllers/crudController.js';

const router = express.Router()

// C - For creating
router.post("/", crudCreate);

// R - For reading
router.get("/", crudIndex);

// U - For updating
router.put("/:id", crudUpdate);

// D - For deleting
router.delete("/:id", crudDelete);

export default router;