import { useState } from "react";

function TodoEdit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleIsCompletedChange = (e) => setIsCompleted(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... contactar al backend para editar todas las propiedades del To-Do aqui
  };

  return (
    <div>
      <h3>Editar To-Do</h3>

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

        <label htmlFor="isCompleted">Completado: </label>
        <input
          type="checkbox"
          name="isCompleted"
          onChange={handleIsCompletedChange}
          checked={isCompleted}
        />

        <br />

        <button type="submit">Editar</button>
        
      </form>
    </div>
  );
}

export default TodoEdit;