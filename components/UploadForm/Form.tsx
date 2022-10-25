export default function Form() {
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
          <div className="m-4">
            <div
              draggable="true"
              className="flex items-center justify-center w-full"
            >
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Arrastar um arquivo
                  </p>
                </div>
                <input type="file" className="opacity-0" />
              </label>
            </div>
          </div>

          <div className="flex justify-center p-2 space-x-2 ">
            <div className="flex justify-center p-2 space-x-2 ">
              <label
                htmlFor="myFileInput"
                className="flex flex-row space-2 p-2 m-3 text-white bg-blue-500 rounded shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-blue-600 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Enviar arquivo
              </label>
              <input
                className="hidden "
                id="myFileCam"
                type="file"
                accept="image/*"
              />
            </div>

            <label
              htmlFor="myFileInput"
              className="flex flex-row p-2 m-3 text-white bg-blue-500 rounded shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-blue-600 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
              Tirar uma foto
            </label>
            <input
              className="hidden "
              id="myFileInput"
              type="file"
              accept="image/*;capture=camera"
            />
          </div>
          <label className="inline-block mb-2 p-2 text-gray-500">
            Formatos Aceitos: jpg, png, svg, jpeg
          </label>
        </div>
      </div>
    </>
  );
}
