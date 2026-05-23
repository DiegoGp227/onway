import { Router } from "express";
import dbCheck from "../modules/test/test.js";
import { login, signup } from "../modules/auth/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  create,
  getById,
  list,
  remove,
  update,
} from "../modules/workspace/workspace.controllers.js";

export const router: Router = Router();

// Test Routes
router.get("/db", dbCheck);

// Auth Routes
router.post("/signup", signup);
router.post("/login", login);

// Workspace Routes
router.get("/workspaces", authMiddleware, list);
router.get("/workspaces/:id", authMiddleware, getById);
router.post("/workspaces", authMiddleware, create);
router.put("/workspaces/:id", authMiddleware, update);
router.delete("/workspaces/:id", authMiddleware, remove);
