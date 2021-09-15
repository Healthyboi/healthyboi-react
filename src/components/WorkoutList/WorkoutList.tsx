import { useState, createContext } from 'react';
import axios from 'axios';
import './WorkoutList.css';
import ItemList from '../ItemList';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import useAPI from '../../hooks/apiHook';
const getURL = 'http://localhost:7000/api';
export const DataContext = createContext([]);
const WorkoutList = () => {
  console.log('workout list mounted');
  const [value, setValue] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  const getData = async (url: string, callback) => {
    useAPI(url, 1, callback);
  };
  getData(getURL, setValue);
  console.log(`Value of state at mount tabone: ${value}`);
  return (
    <DataContext.Provider value={value}>
      <div className="workout-list">
        <p>WORKOUT LIST PLACEHOLDER</p>
        {/* <div>
        <IconButton onClick={handleChange}>
          <AddIcon />
        </IconButton>

        <Zoom in={open} mountOnEnter unmountOnExit>
          <div>
            <ExerciseForm openCb={handleChange} />
          </div>
        </Zoom>

      </div> */}
        <div>
          <ItemList />
        </div>
      </div>
    </DataContext.Provider>
  );
};
export default WorkoutList;

{
  /* <Modal open={open} onClose={handleClose} className="workout-modal">
  <ExerciseForm openCb={handleClose} />
</Modal> */
}
