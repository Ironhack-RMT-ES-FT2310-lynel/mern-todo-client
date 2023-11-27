import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import service from "../services/config";

function AddForm(props) {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //* la propiedad isCompleted no se agrega, ni envía. El backend la creará como false (default)

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTodo = { 
      title, 
      description 
    }

    // ... contactar al Backend aquí para crear un To-Do
    try {
      
      // const response = await axios.post("http://localhost:5005/api/todo", newTodo)
      const response = await service.post("/todo", newTodo)
      console.log(response)
      props.getData()

    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  return (
    <div>
      <h3>Agregar To-Do</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <br />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <br />

        <button type="submit">Agregar</button>
      
      </form>
    </div>
  );
}

export default AddForm;