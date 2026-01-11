import { useState } from 'react'
import { Header } from './components/myHeader'
import { ListaCarros } from './components/myMain'
import { carros } from './components/carros'

function App() {
  const [termoBusca, setTermoBusca] = useState("");

  const carrosFiltrados = carros.filter(carro =>
    carro.modelo.toLowerCase().includes(termoBusca.toLowerCase()) ||
    carro.marca.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setTermoBusca} />
      <main>
        <ListaCarros carrosParaExibir={carrosFiltrados} />
      </main>
    </div>
  )
}

export default App
