import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL_FILMES } from '../api'

function Inicio() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    axios.get(URL_FILMES)
      .then(res => setFilmes(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2>Filmes cadastrados</h2>
      <ul className="lista">
        {filmes.map(filme => (
          <li key={filme.id}>
            <Link to={`/ler/${filme.id}`}>
              <span><b>Id:</b> {filme.id}</span>
              <span><b>Nome:</b> {filme.nome}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Inicio
