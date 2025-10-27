import { Router } from 'express';
import * as PetsController from './../Controllers/petsController.js';

const router = Router();

router.get("/", PetsController.listarTodos);

router.get("/:id", PetsController.listarUm);

router.post("/", PetsController.criar);

router.delete("/:id", PetsController.apagar);

router.put("/:id", PetsController.atualizar)

export default router;