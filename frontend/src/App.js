import React, { useEffect } from "react";
import Axios from "axios";
import useForm from "./useForm";
import "./App.css";

const App = () => {
  const { values, handleOnChange } = useForm({item: 'carrots'});

  const getItem = async () => {
    const results = await Axios({
      method: 'GET',
      url: 'http://localhost:7001/shoppingList/read'
    })

    console.log('results: ', results)
  }

  const onSubmit = () => {
    console.log('test');
  }

  console.log('values: ', values);

  useEffect(() => {
    getItem()

    return () => getItem
  }, [])

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          placeholder="Enter item"
          className="task-input"
          name="item"
          onChange={handleOnChange}
          value={values.item}
        />
        <input
          type="text"
          placeholder="Enter quantity"
          className="task-input"
          name="quantity"
          onChange={handleOnChange}
          value={values.quantity}
        />
        <input type="submit" className="add-item" onClick={onSubmit} />

        <table className="table">
          
        </table>
      </div>
    </div>
  );

  
    
}

export default App;