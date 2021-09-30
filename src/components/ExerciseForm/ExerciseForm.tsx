import axios from 'axios';
import { useForm } from 'react-hook-form';

const ExerciseForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleChange = props.openCb;
  const onSubmit = (data) => {
    console.log('form data: ', data);
    axios
      .post('http://localhost:7000/api', data)
      .then((res) => {
        console.log(`post achieved`);
      })
      .catch((err) =>
        console.log(`error in post function for exercise form: ${err}`)
      );
    handleChange();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Enter an Exercise" {...register('name')} />
        <br />
        <input {...register('repRange', { required: true })} />
        <br />
        <select {...register('bodyPart')}>
          <option value="">Select...</option>
          <option value="legs">Legs</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="arms">Arms</option>
          <option value="shoulders">Shoulders</option>
          <option value="core">Core</option>
        </select>
        {errors.repRange && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default ExerciseForm;
