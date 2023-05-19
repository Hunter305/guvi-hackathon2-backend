import express from "express";
import Equipment from "../models/Equipment.js";
import {
  countByType,
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
router.get("/find/:id", getEquipment);
//GET ALL

router.get("/", getAllEquipment);

router.get("/countByType", countByType);

export default router;
