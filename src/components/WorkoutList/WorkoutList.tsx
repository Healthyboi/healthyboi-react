import { useState } from "react";
import "./WorkoutList.css";
import ItemList from "../ItemList";
import IconButton from "@material-ui/core/IconButton";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
const WorkoutList = () => {
  console.log("workout list mounted");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="workout-list">
      <p>WORKOUT LIST PLACEHOLDER</p>
      <div>
        <IconButton onClick={handleOpen}>
          <AddIcon />
        </IconButton>
        <Modal open={open} onClose={handleClose} className="workout-modal">
          <ExerciseForm openCb={handleClose} />
        </Modal>
      </div>
    </div>
  );
};
export default WorkoutList;
