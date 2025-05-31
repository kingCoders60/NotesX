import React from "react";
import { Link } from "react-router"
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formateDate } from "../lib/util"; 
import api from "../lib/axios"; 
import { toast } from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); 
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id)); 
      toast.success("Note deleted successfully!");
    } catch (error) {
      toast.error("Error deleting note!");
      console.error("Error in delete function:", error);
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 border-t-4 border-green-400 rounded-lg backdrop-blur-md">
      <div className="card-body p-4">
        <h3 className="card-title text-lg font-semibold text-base-content">
          {note.title}
        </h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="card-action flex justify-between items-center mt-4">
          <span className="text-xs text-base-content/60">
            {formateDate(new Date(note.createdAt))}{" "}
            {/* ✅ Corrected function call */}
          </span>
          <div className="flex items-center gap-2">
            <Link
              to={`/edit/${note._id}`}
              className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all">
              <PenSquareIcon className="size-5" />
            </Link>

            <button
              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all"
              onClick={(e) => handleDelete(e, note._id)}>
              <Trash2Icon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
