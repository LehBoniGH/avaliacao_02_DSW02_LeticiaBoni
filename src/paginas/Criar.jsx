import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_FILMES } from '../api'

function Criar() {
  const navigate = useNavigate()
  const [dados, setDados] = useState({ nome: '', genero: '', ano: '' })

  const mudar = e => setDados({ ...dados, [e.target.name]: e.target.value })

  const salvar = e => {
    e.preventDefault()
    axios.post(URL_FILMES, dados)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h2>Criar filme</h2>
      <form onSubmit={salvar}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" value={dados.nome} onChange={mudar} required />

        <label htmlFor="genero">Gênero</label>
        <input id="genero" name="genero" value={dados.genero} onChange={mudar} required />

        <label htmlFor="ano">Ano</label>
        <input id="ano" name="ano" value={dados.ano} onChange={mudar} required />

        <div className="acoes">
          <button type="submit" className="botao">Criar</button>
          <Link to="/" className="botao">Cancelar</Link>
        </div>
      </form>
    </>
  )
}

export default Criar
