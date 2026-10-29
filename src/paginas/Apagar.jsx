import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_FILMES } from '../api'

function Apagar() {
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

  const apagar = () => {
    axios.delete(`${URL_FILMES}/${filme.id}`)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  if (filme) {
    return (
      <>
        <h2>Apagar filme</h2>
        <p><b>Id:</b> {filme.id}</p>
        <p><b>Nome:</b> {filme.nome}</p>
        <p><b>Gênero:</b> {filme.genero}</p>
        <p><b>Ano:</b> {filme.ano}</p>
        <div className="acoes">
          <button className="botao perigo" onClick={apagar}>Apagar</button>
          <Link to="/" className="botao">Cancelar</Link>
        </div>
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
      <h2>Apagar filme</h2>
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

export default Apagar
