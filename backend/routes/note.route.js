import express from "express";
// import { verifyToken } from "../utils/verifyUser.js";
import {
  addNote,
  deleteNote,
  editNote,
  getAllNotes,
  searchNote,
  updateNotePinned,
} from "../controller/note.controller.js";

const router = express.Router();

router.post("/add", addNote);
router.put("/edit/:noteId", editNote);
router.get("/all", getAllNotes);
router.delete("/delete/:noteId", deleteNote);
router.put("/update-note-pinned/:noteId", updateNotePinned);
router.put("/search", searchNote);

export default router;
