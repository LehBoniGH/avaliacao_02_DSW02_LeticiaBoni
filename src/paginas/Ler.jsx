import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { URL_FILMES } from '../api'

function Ler() {
  const { id } = useParams()
  const [filme, setFilme] = useState(null)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    axios.get(`${URL_FILMES}/${id}`)
      .then(res => setFilme(res.data))
      .catch(() => setErro(true))
  }, [id])

  if (erro) {
    return (
      <>
        <p className="aviso">Filme não encontrado.</p>
        <Link to="/" className="botao">Voltar ao início</Link>
      </>
    )
  }

  if (!filme) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h2>Detalhes do filme</h2>
      <p><b>Id:</b> {filme.id}</p>
      <p><b>Nome:</b> {filme.nome}</p>
      <p><b>Gênero:</b> {filme.genero}</p>
      <p><b>Ano:</b> {filme.ano}</p>
      <div className="acoes">
        <Link to="/" className="botao">Cancelar</Link>
      </div>
    </>
  )
}

export default Ler
