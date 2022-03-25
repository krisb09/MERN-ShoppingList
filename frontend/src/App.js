import React, { useEffect, useState } from "react";
import Axios from "axios";
import useForm from "./useForm";
import "./App.css";

const App = () => {
  const { values, handleOnChange } = useForm();
  const [ dataResults, setDataResults ] = useState([]);

  const getItem = async () => {
    const results = await Axios({
      method: 'GET',
      url: 'http://localhost:7001/shoppingList/read'
    })

    setDataResults(results.data)
  }

  const addItem = async () => {
    const results = await Axios({
      method: 'POST',
      url: 'http://localhost:7001/shoppingList/create',
      data: {
        ...values
      }
    })

    return results.data.status
  };

  const deleteItem = async (_id) => {
    const results = await Axios({
      method: "DELETE",
      url: "http://localhost:7001/shoppingList/delete",
      data: {
        _id,
      },
    });

    if (results.data.status) {
      alert('Successfully Deleted!')
      await getItem();
    } else {
      alert("Failed!");
    }

    return results.data.status;
  };

  const [state, setState] = useState({})

  const updateItem = async () => {
    const { _id, item, quantity } = state

    const results = await Axios({
      method: "PUT",
      url: "http://localhost:7001/shoppingList/update",
      data: {
        _id,
        set: {
          item,
          quantity
        }
      },
    });

    if (results.data.status) {
      alert('List Updated!')
      await getItem();
    } else {
      alert('List Not Updated!')
    }

    return results.data.status;
  }

  const onSubmit = async () => {
    if (await addItem()) {
      alert('Item added to list!')
    } else {
      alert('Item not added to list!')
    }
  }

  //console.log('values: ', values);

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


      </div>
    </div>
  );   
}

export default App;