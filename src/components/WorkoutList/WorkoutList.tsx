import './WorkoutList.css';
import { useState, createContext, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import AddIcon from '@material-ui/icons/Add';
import useAPI from '../../hooks/apiHook';
const getURL = 'http://localhost:7000/api';
const GetData = async (url: string, callback) => {
  useAPI(url, 1, callback);
};
export const DataContext = createContext([]);
const WorkoutList = () => {
  console.log('workout list mounted');
  const [value, setValue] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
    setData(value);
  };
  useEffect(() => {
    GetData(getURL, setValue);
    console.log('WorkoutList mounted at useEffect');
  }, [data]);

  console.log(`Value of state at mount tabone: ${value}`);
  return (
    <DataContext.Provider value={value}>
      <div className="workout-list">
        <p>WORKOUT LIST PLACEHOLDER</p>
        <div>
          <IconButton onClick={handleChange}>
            <AddIcon />
          </IconButton>

          <Zoom in={open} mountOnEnter unmountOnExit>
            <div>
              <ExerciseForm openCb={handleChange} />
            </div>
          </Zoom>
        </div>
        <div>
          <ItemList dataCb={setData} />
        </div>
      </div>
    </DataContext.Provider>
  );
};
export default WorkoutList;
