import { carros } from "./carros";
import "../styles/listacarros.css";
import { Button } from "./myButton";

export const ListaCarros = ({ carrosParaExibir }) => {
    return (
        <div className="lista-container">
            {carrosParaExibir.map((carro) => (
                <div key={carro.id} className="car-card animar-entrada">
                    <div className="car-image-container">
                        <div className="badge-new">DISPONÍVEL</div>
                        <img src={carro.imagem} alt={carro.modelo} className="car-image" />
                    </div>

                    <div className="car-content">
                        <span className="car-brand">{carro.marca}</span>
                        <h2 className="car-model">{carro.modelo}</h2>
                        <div className="car-specs">
                            <span>{carro.ano}</span>
                            <span>•</span>
                            <span>Automático/Manual</span>
                        </div>
                        <p className="car-price-label">Preço estimado</p>
                        <p className="car-price">
                            {carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>

                        <div className="btn-wrapper" style={{ marginTop: '15px' }}>
                            <Button texto="RESERVAR AGORA" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};