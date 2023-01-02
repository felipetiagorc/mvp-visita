import { useState } from 'react';
import Select from 'react-select';
import { useEstado } from './useEstado';

export const SelectEstado = ({ onChange }) => {
  const [selectedEstado, setSelectedEstado] = useState<number | null>(null);
  const { estados } = useEstado();

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.nome,
  }));

  const selectedOptionEstado = estadoOptions.find(
    (estado) => estado.value === selectedEstado
  );

  const handleEstado = (event) => {
    setSelectedEstado(event.value);
    const selectedUF = estados.find(
      (estado) => estado.id === event.value
    )?.sigla;
    onChange(selectedUF);
  };

  return (
    <Select
      // getOptionValue={(estados) => estados.id}
      // getOptionLabel={(estados) => estados.nome}
      placeholder={'Selecione o Estado'}
      value={selectedOptionEstado}
      options={estadoOptions}
      onChange={handleEstado}
    />
  );
};
