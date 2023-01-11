import express from "express";
import {
  createHotel,
  getHotel,
  getHotels,
  deleteHotel,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";

import { verifyAdmin } from "./utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//get
router.get("/find/:id", getHotel);

//update
router.put("/find/:id", verifyAdmin, updateHotel);

//delete
router.delete("/find/:id", verifyAdmin, deleteHotel);

//getall
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

router.get("/", (req, res) => {
  res.send("this is the auth endpoint");
});

router.get("/register", (req, res) => {
  res.send("this is the auth register endpoint");
});

export default router;
