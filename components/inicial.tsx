function Inicial(props) {
  return (
    <div className='container flex flex-col items-center justify-center min-h-screen p-10 px-0 mx-auto md:py-10 md:p-10 md:px-0'>
      <h1 className='font-bold text-center text-4xl'>
        Bem vindo a <span className='text-blue-500'>SAP</span>
        {props.user ? `${props.user}` : ' visitante!'}
      </h1>

      <h3 className='items-center mb-12 mt-12 text-3xl'>Escolha uma opção:</h3>

      <main className='grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
        <section className='bg-blue-500 h-full max-h-72 transform group border-2 border-neutral-800 rounded-2xl duration-300 hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl'>
          <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
            <div className='p-5 py-10 flex flex-col justify-center h-full text-center text-white'>
              <h2 className='mb-5 text-3xl'>Acesso Restrito</h2>
              <p className='mb-5'>Fazer Login: </p>
              <p className='mb-5'>- Aqui terio o form- </p>
              <button className='p-2 px-6 w-fit self-center text-blue-500 font-bold bg-blue-50 rounded-full group-hover:bg-blue-50 duration-300'>
                Entrar
              </button>
            </div>
          </a>
        </section>

        <section className='h-full max-h-72 transform group border-2 border-neutral-800 rounded-2xl duration-300 hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl'>
          <a
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='p-5 py-10 flex flex-col justify-center h-full text-center'>
              <h2 className='mb-5 text-3xl'>Unidades Prisionais</h2>
              <p className='mb-5'>Relação de Unidades</p>
              <button className='p-2 px-6 w-fit self-center text-white font-bold bg-blue-500 rounded-full group-hover:bg-blue-600 duration-300'>
                Ver
              </button>
            </div>
          </a>
        </section>

        <section className='h-full max-h-72 transform group border-2 border-neutral-800 rounded-2xl duration-300 hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl'>
          <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
            <div className='p-5 py-10 flex flex-col justify-center h-full text-center'>
              <h2 className='mb-5 text-3xl'>Legislação</h2>
              <p className='mb-5'>Resoluções e Portarias vigentes</p>
              <button className='p-2 px-6 w-fit self-center text-white font-bold bg-blue-500 rounded-full group-hover:bg-blue-600 duration-300'>
                Documentation
              </button>
            </div>
          </a>
        </section>

        <section className='h-full max-h-72 transform group border-2 border-neutral-800 rounded-2xl duration-300 hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl'>
          <a href='https://trpc.io/' target='_blank' rel='noreferrer'>
            <div className='p-5 py-10 flex flex-col justify-center h-full text-center'>
              <h2 className='mb-5 text-3xl'>Seilá</h2>
              <p className='mb-5'>bla bla bla</p>
              <button className='p-2 px-6 w-fit self-center text-white font-bold bg-blue-500 rounded-full group-hover:bg-blue-600 duration-300'>
                Clique
              </button>
            </div>
          </a>
        </section>
      </main>

      {/* <div className='py-6 text-2xl text-blue-500'>
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div> */}
    </div>
  );
}
export default Inicial;
