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
import {
  create as createTask,
  getById as getTaskById,
  list as listTasks,
  remove as removeTask,
  update as updateTask,
} from "../modules/task/task.controllers.js";
import {
  create as createTopic,
  getById as getTopicById,
  list as listTopics,
  remove as removeTopic,
  update as updateTopic,
} from "../modules/topic/topic.controllers.js";

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

// Topic Routes
router.get("/workspaces/:workspaceId/topics", authMiddleware, listTopics);
router.get("/workspaces/:workspaceId/topics/:id", authMiddleware, getTopicById);
router.post("/workspaces/:workspaceId/topics", authMiddleware, createTopic);
router.put("/workspaces/:workspaceId/topics/:id", authMiddleware, updateTopic);
router.delete("/workspaces/:workspaceId/topics/:id", authMiddleware, removeTopic);

// Task Routes
router.get("/workspaces/:workspaceId/tasks", authMiddleware, listTasks);
router.get("/workspaces/:workspaceId/tasks/:id", authMiddleware, getTaskById);
router.post("/workspaces/:workspaceId/tasks", authMiddleware, createTask);
router.put("/workspaces/:workspaceId/tasks/:id", authMiddleware, updateTask);
router.delete("/workspaces/:workspaceId/tasks/:id", authMiddleware, removeTask);
