/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Fragment } from 'react';
// eslint-disable-next-line
import Brasao from 'public/brasao-sp-eleicao.png';

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Documentos', href: '/upload', current: false },
  {
    name: 'Unidades',
    href: '#',
    current: false,
  },
];

const userNavigation = [
  { name: 'Meu Perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sair', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavMenu() {
  const { data: session } = useSession();

  const user = {
    name: session?.user?.name,
    email: session?.user?.email,
    imageUrl: session?.user?.image,
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-300">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                  <div className="flex-1 flex justify-center  sm:justify-start">
                    {/* Brasao */}
                    <div className="lg:block sm:flex w-auto">
                      <Image
                        width="100"
                        height="55"
                        src={Brasao}
                        alt="BrasaoSP"
                      />
                    </div>

                    {/* Navegação */}

                    {/* Só mostra menu se tiver logado */}
                    {session ? (
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-300 text-black'
                                  : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="my-auto lg:mx-48 md:mx-32 sm:mx-12 text-center font-sans">
                        Acesso público. Para visitante solicitar cadastro.
                        Evitando telefonar para a unidade.
                      </p>
                    )}
                    {/* Fim do if  - Só mostra menu se tiver logado */}
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-300 p-1 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">Ver Notificações</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {session?.user?.name ? (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>

                                {/* Imagem do usuario logado ou "nada" */}
                                <div className="flex">
                                  {user.imageUrl && (
                                    <Image
                                      className="rounded-full"
                                      src={user.imageUrl}
                                      alt="user"
                                      width="50px"
                                      height="50px"
                                    />
                                  )}
                                </div>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      Meu Perfil
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      Preferências
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      onClick={() => signOut()}
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      Sair
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-500 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-12 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Abrir menu do usuário</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-black hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        className="rounded-full"
                        src={session?.user?.image}
                        alt="user"
                        width="50px"
                        height="50px"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {session?.user?.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {session?.user?.email}
                      </div>
                    </div>

                    {session?.user?.name ? (
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-300 p-1 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">Ver Notificações</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
