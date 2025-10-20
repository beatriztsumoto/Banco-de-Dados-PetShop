import { Router } from 'express';
import * as PetsController from './../Controllers/petsController.js';

const router = Router();

router.get("/", PetsController.listarTodos);

router.get("/:id", PetsController.listarUm);

export default router;