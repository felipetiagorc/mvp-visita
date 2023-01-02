import { SelectEstado } from './SelectEstado';
import { SelectCidade } from './SelectCidade';
import { useState } from 'react';

export const EstadoCidade = () => {
  const [selectedUF, setSelectedUF] = useState('');

  return (
    <div>
      <SelectEstado onChange={setSelectedUF} />
      <SelectCidade uf={selectedUF} />
    </div>
  );
};
