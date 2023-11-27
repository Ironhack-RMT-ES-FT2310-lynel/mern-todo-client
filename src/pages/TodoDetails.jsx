// de React NUNCA usamos:
// 1. el modelo
// 2. metodos de modelo (find, findById, create, etc...)
// 3. next()

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import service from "../services/config";

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

  if (isLoading) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.description}</p>
      <p>{details.isCompleted ? "✅" : <button>check</button>}</p>
    </div>
  );
}

export default TodoDetails;