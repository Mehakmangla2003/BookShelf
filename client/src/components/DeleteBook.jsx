import { useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const DeleteBook = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
      axios.delete('http://localhost:3001/book/book/' +id)
      .then(res => {
          if(res.data.delete) {
              navigate('/books')
          }
      }).catch(err => console.log(err))
    }, [])
}

export default DeleteBook
