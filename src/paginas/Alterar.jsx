import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_FILMES } from '../api'

function Alterar() {
  const navigate = useNavigate()
  const [idBusca, setIdBusca] = useState('')
  const [filme, setFilme] = useState(null)
  const [naoAchou, setNaoAchou] = useState(false)

  const procurar = e => {
    e.preventDefault()
    axios.get(`${URL_FILMES}/${idBusca}`)
      .then(res => {
        setFilme(res.data)
        setNaoAchou(false)
      })
      .catch(() => {
        setFilme(null)
        setNaoAchou(true)
      })
  }

  const mudar = e => setFilme({ ...filme, [e.target.name]: e.target.value })

  const salvar = e => {
    e.preventDefault()
    axios.put(`${URL_FILMES}/${filme.id}`, {
      nome: filme.nome,
      genero: filme.genero,
      ano: filme.ano
    })
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  if (filme) {
    return (
      <>
        <h2>Alterar filme</h2>
        <form onSubmit={salvar}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" value={filme.nome} onChange={mudar} required />

          <label htmlFor="genero">Gênero</label>
          <input id="genero" name="genero" value={filme.genero} onChange={mudar} required />

          <label htmlFor="ano">Ano</label>
          <input id="ano" name="ano" value={filme.ano} onChange={mudar} required />

          <div className="acoes">
            <button type="submit" className="botao">Alterar</button>
            <Link to="/" className="botao">Cancelar</Link>
          </div>
        </form>
      </>
    )
  }

  if (naoAchou) {
    return (
      <>
        <p className="aviso">Nenhum filme encontrado com esse id.</p>
        <Link to="/" className="botao">Voltar ao início</Link>
      </>
    )
  }

  return (
    <>
      <h2>Alterar filme</h2>
      <form onSubmit={procurar}>
        <label htmlFor="id">Id do filme</label>
        <input id="id" value={idBusca} onChange={e => setIdBusca(e.target.value)} required />

        <div className="acoes">
          <button type="submit" className="botao">Procurar</button>
          <Link to="/" className="botao">Cancelar</Link>
        </div>
      </form>
    </>
  )
}

export default Alterar
