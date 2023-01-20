import Header from 'components/Header';
import useFetchFiles from './../../services/queries/files';

export default function UseFiles() {
  const { data } = useFetchFiles();
  console.log('data: ', data);
  return (
    <div>
      <h1 className="font-semibold text-lg p-2 mx-4">
        Selecionar UseFilesCidade
      </h1>
    </div>
  );
}

UseFiles.getLayout = function getLayout(page) {
  return (
    <>
      <Header>{page}</Header>
    </>
  );
};
