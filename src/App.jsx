import { Link, Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Ler from './paginas/Ler'
import Criar from './paginas/Criar'
import Alterar from './paginas/Alterar'
import Apagar from './paginas/Apagar'

function App() {
  return (
    <div className="pagina">
      <header className="topo">
        <h1>Catálogo de Filmes</h1>
        <nav className="menu">
          <Link to="/">Início</Link>
          <Link to="/criar">Criar</Link>
          <Link to="/alterar">Alterar</Link>
          <Link to="/apagar">Apagar</Link>
        </nav>
      </header>

      <main className="caixa">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ler/:id" element={<Ler />} />
          <Route path="/criar" element={<Criar />} />
          <Route path="/alterar" element={<Alterar />} />
          <Route path="/apagar" element={<Apagar />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
