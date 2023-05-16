import Equipment from "../models/Equipment.js";

export const createEquipment = async (req, res, next) => {
  const newEquipment = new Equipment(req.body);

  try {
    const savedEquipment = await newEquipment.save();
    res.status(200).json(savedEquipment);
  } catch (error) {
    next(error);
  }
};

export const updateEquipment = async (req, res, next) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEquipment);
  } catch (error) {
    next(error);
  }
};

export const deleteEquipment = async (req, res, next) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);
    res.status(200).json("Equipment has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getEquipment = async (req, res, next) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    res.status(200).json(equipment);
  } catch (error) {
    next(error);
  }
};

export const getAllEquipment = async (req, res, next) => {
  try {
    const equipments = await Equipment.find();
    res.status(200).json(equipments);
  } catch (error) {
    next(error);
  }
};
