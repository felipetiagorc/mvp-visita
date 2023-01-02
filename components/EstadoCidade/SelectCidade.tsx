import Select from 'react-select';
import { useCidade } from './useCidade';

export const SelectCidade = ({ uf }) => {
  const { cidades, loading: loadingCidades } = useCidade({
    uf,
  });

  const cidadeOptions = cidades.map((cidade) => ({
    value: cidade.codigo_ibge,
    label: cidade.nome,
  }));

  return (
    <Select
      placeholder="Selecione a cidade"
      isDisabled={loadingCidades || cidadeOptions.length === 0}
      isLoading={loadingCidades}
      options={cidadeOptions}
    />
  );
};
