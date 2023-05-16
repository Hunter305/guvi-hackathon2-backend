import express from "express";
import Equipment from "../models/Equipment.js";
import {
  createEquipment,
  deleteEquipment,
  getAllEquipment,
  getEquipment,
  updateEquipment,
} from "../controllers/equipmentController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createEquipment);
//UPDATE
router.put("/:id", verifyAdmin, updateEquipment);

//Delete
router.delete("/:id", verifyAdmin, deleteEquipment);

//GET
router.get("/:id", getEquipment);
//GET ALL

router.get("/", getAllEquipment);

export default router;
