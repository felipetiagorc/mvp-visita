import { useState } from 'react';
import { useCidade } from './useCidade';
import { useEstado } from './useEstado';

export const EstadoCidade = () => {
  const { estados } = useEstado();
  const [selectedEstado, setSelectedEstado] = useState('SP');
  const { cidades, loading: loadingCidades } = useCidade({
    uf: selectedEstado,
  });

  const handleEstado = (event) => {
    setSelectedEstado(event.target.value);
  };
  return (
    <div>
      <select className="" value={selectedEstado} onChange={handleEstado}>
        {estados.map((est) => (
          <option key={est.id} value={est.sigla}>
            {est.nome}
          </option>
        ))}
      </select>
      {loadingCidades ? (
        <p>Carregando...</p>
      ) : (
        <select className="">
          {cidades.map((cid) => (
            <option key={cid.codigo_ibge} value={cid.nome}>
              {cid.nome}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
