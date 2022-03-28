import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import useForm from './useForm';
import './App.css';


const App = () => {
  const { values, handleOnChange  } = useForm()
  const [dataResults, setDataResults] = useState([])

  const getItem = async () => {
    const results = await Axios({
      method: 'GET',
      url: 'http://localhost:7001/shoppingList/read'
    })
   
    setDataResults(results.data)
  }

  const addItem = async () => {
    const results = await Axios({
      method: "POST",
      url: "http://localhost:7001/shoppingList/add",
      data: {
        ...values,
      },
    });

    return results.data.status
  }

  const deleteItem = async (_id) => {
    const results = await Axios({
      method: "DELETE",
      url: "http://localhost:7001/shoppingList/delete",
      data: {
        _id,
      },
    });

    if(results.data.status) {
      await getItem()
    } else {
      alert('Failed!')
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
           quantity,
         },
       },
     });

     if (results.data.status) {
       await getItem();
     } else {
       //alert("Failed!");
     }

     return results.data.status;
   };

  const onSubmit = async () => {
    
    if (await addItem()) {
      //alert('Successful!')
      await getItem()
    } else {
      alert('Failed!')
    }
  };

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
      
      <table className='table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {dataResults.length > 0 ? (
            dataResults.map((value) => {
              return (
                <tr key={value._id}>
                  <td className="list">{value.item}</td>
                  <td className="list">{value.quantity}</td>
                  <td>
                    <button
                      onClick={() =>
                        setState({
                          _id: value._id,
                          name: value.item,
                          description: value.quantity,
                        })}
                      className="edit"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteItem(value._id)}
                      className="delete"
                      >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <span>No data...</span>
              </td>
            </tr>
          )}
          
        </tbody>
      </table>

      {Object.keys(state).length > 0 ? (
        <>
          <input
            type="text"
            name="item"
            className='item'
            onChange={(e) =>
              setState({
                ...state,
                [e.target.name]: e.target.value,
              })
            }
            value={state.item}
          />
          <input
            type="text"
            name="quantity"
            className='quantity'
            onChange={(e) =>
              setState({
                ...state,
                [e.target.name]: e.target.value,
              })
            }
            value={state.quantity}
          />
          <input type="submit" value="Update" onClick={updateItem} />
        </>
      ) : (
        ""
      )}
      </div>
    </div>
  );
}

export default App;
