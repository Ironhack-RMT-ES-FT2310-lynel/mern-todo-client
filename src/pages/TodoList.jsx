import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import service from "../services/config";

function TodoList() {

  const navigate = useNavigate()

  const [ allTodos, setAllTodos ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    try {
      
      // const response = await axios.get("http://localhost:5005/api/todo")
      const response = await service.get("/todo") // el url base lo toma del service baseURL
      console.log(response)

      //! 3
      setAllTodos(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  }

  //! 4
  if (isLoading) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      <AddForm getData={getData}/>

      <br />
      <hr />
      <h3>Lista de To-Do</h3>
      {/* //! 5 */}
      {allTodos.map((eachTodo) => {
        return (
          <div key={eachTodo._id}>
            <Link to={`/todo/${eachTodo._id}/details`}>{eachTodo.title}</Link>
            <span>{eachTodo.isCompleted ? "✅" : "⬅️"}</span>
          </div>
        )
      })}

    </div>
  );
}

export default TodoList;