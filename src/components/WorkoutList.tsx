import ItemList from "./ItemList";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
const WorkoutList = () => {
  console.log("workout list mounted");
  return (
    <div className="workout-list">
      <p>WORKOUT LIST PLACEHOLDER</p>
      <IconButton>
        <AddIcon />
      </IconButton>
      <ItemList />
    </div>
  );
};
export default WorkoutList;
