import express from "express";
import Equipment from "../models/Equipment.js";
import {
  createEquipment,
  deleteEquipment,
  getAllEquipment,
  getEquipment,
  updateEquipment,
} from "../controllers/equipmentController.js";

const router = express.Router();

//CREATE
router.post("/", createEquipment);
//UPDATE
router.put("/:id", updateEquipment);

//Delete
router.delete("/:id", deleteEquipment);

//GET
router.get("/:id", getEquipment);
//GET ALL

router.get("/", getAllEquipment);

export default router;
