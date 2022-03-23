import './App.css';
import useForm from './useForm';

const App = () => {
  const { values, handleOnChange } = useForm();

  const onSubmit = async () => {
    
  }

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          placeholder="Enter item"
          className="task-input"
          name="item"
          onChange={handleOnChange}
          value={values.name}
        />
        <input
          type="text"
          placeholder="Enter quantity"
          className="task-input"
          name="description"
          onChange={handleOnChange}
          value={values.description}
        />
        <input type="submit" className='add-item' onClick={onSubmit} />
      </div>
    </div>
  );
}

export default App;
