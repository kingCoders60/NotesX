import Note from "../models/Note.js";

// Fetch all notes
export async function getAllNotes(req, res){
  try {
    const notes = await Note.find().sort({ createdAt: -1 })//-1 will sort in descending ord(newest first.);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and Content are required" });
    }
    const note = new Note({ title, content });
    const saved = await note.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Note creation failed" });
  }
}


export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and Content are required" });
    }
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res
      .status(200)
      .json({ message: "Note updated successfully!", updatedNote });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(400).json({ message: "Error in UpdateNote Controller" });
  }
}

// Delete a note
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Error in DeleteNote Controller" });
  }
}

