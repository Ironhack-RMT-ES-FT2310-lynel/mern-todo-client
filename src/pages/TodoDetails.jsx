// de React NUNCA usamos:
// 1. el modelo
// 2. metodos de modelo (find, findById, create, etc...)
// 3. next()

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios"
import service from "../services/config";

import { Link } from "react-router-dom";

function TodoDetails() {

  const params = useParams()
  console.log(params)
  const navigate = useNavigate()

  const [ details, setDetails ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    try {
      
      // const response = await axios.get(`http://localhost:5005/api/todo/${params.todoId}`)
      const response = await service.get(`/todo/${params.todoId}`)
      console.log(response.data)
      setDetails(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  }

  const handleCompleteTodo = async() => {

    try {
      
      await service.patch(`/todo/${params.todoId}/complete`)
      getData()

    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  }

  if (isLoading) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.description}</p>
      <p>{details.isCompleted ? "✅" : <button onClick={handleCompleteTodo}>check</button>}</p>
      <Link to={`/todo/${details._id}/edit`}><button>Ir a Editar</button></Link>
      
    </div>
  );
}

export default TodoDetails;


// las rutas de frontend se usan en:
// 1. App.js Routes
// 2. Link
// 3. useNavigate
// 4. Navigate

// las rutas de backend solo se usan en 
// 1. axios o service