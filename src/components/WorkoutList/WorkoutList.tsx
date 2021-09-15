import { useState } from "react";
import "./WorkoutList.css";
import ItemList from "../ItemList";
import Slide from "@material-ui/core/Slide";
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
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="workout-list">
      <p>WORKOUT LIST PLACEHOLDER</p>
      <div>
        <IconButton onClick={handleChange}>
          <AddIcon />
        </IconButton>

        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <div>
            <ExerciseForm openCb={handleChange} />
          </div>
        </Slide>

        {/* <Modal open={open} onClose={handleClose} className="workout-modal">
          <ExerciseForm openCb={handleClose} />
        </Modal> */}
      </div>
    </div>
  );
};
export default WorkoutList;
