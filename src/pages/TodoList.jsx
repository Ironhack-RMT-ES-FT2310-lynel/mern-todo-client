import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import axios from "axios";

function TodoList() {

  const [ allTodos, setAllTodos ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    try {
      
      const response = await axios.get("http://localhost:5005/api/todo")
      console.log(response)

      //! 3
      setAllTodos(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }

  }

  //! 4
  if (isLoading) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      <AddForm />

      <br />
      <hr />
      <h3>Lista de To-Do</h3>
      {/* //! 5 */}
      {allTodos.map((eachTodo) => {
        return (
          <p>{eachTodo.title}</p>
        )
      })}

    </div>
  );
}

export default TodoList;