import { useState } from "react";

function AddForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //* la propiedad isCompleted no se agrega, ni envía. El backend la creará como false (default)

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault()

    // ... contactar al Backend aquí para crear un To-Do
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