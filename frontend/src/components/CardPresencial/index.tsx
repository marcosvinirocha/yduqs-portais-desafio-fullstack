import React, { useState } from 'react';
import Drawer from '../ui/drawer';
// import { FinanceDrawer } from '../FinanceDrawer';

export default function CardPresencial() {
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth < 640;
  return (
    <div>
      <div className='max-w-xs mx-auto bg-blue-700 border border-blue-700 rounded-xl shadow-lg overflow-hidden'>
        <div className='flex bg-blue-950 text-white p-3 mb-2 text-sm font-semibold'>
          <span className='border-r border-white text-white font-sans pr-2'>
            Presencial
          </span>
          <span className='pl-2 text-white font-sans'>Manhã</span>
        </div>
        <div className='p-4 mt-6'>
          <p className=' text-white text-sm mb-1'>De R$ 4.752,00 por até</p>
          <div className='mb-6'>
            <span className='text-white font-sans'>18x</span>{' '}
            <span className='font-sans font-bold text-white text-4xl'>
              {' '}
              R$169,95
            </span>
            <p className='font-sans text-white'>á vista R$ 2.613,60</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className='w-full bg-rose-500 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md'
          >
            Avançar
          </button>
        </div>
        <div className='px-4 pb-4 pt-2 border-t  bg-white border-gray-200'>
          <h3 className='text-sm font-bold font-sans  text-gray-900 mt-4 mb-1'>
            CAMPINAS - VILA INDUSTRIAL
          </h3>
          <p className='text-xs text-gray-600'>
            RUA DR. SALES DE OLIVEIRA, Nº 1661 - VILA INDUSTRIAL - CAMP...
          </p>
        </div>
      </div>

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        size={isMobile ? 'lg' : 'xl'} // opções: 'sm', 'md', 'lg', 'xl'
        title='Configurações'
      >
        <p>Conteúdo personalizado aqui...</p>
        <div className='h-96 bg-gray-100 flex items-center justify-center'>
          Este é o conteúdo do drawer.
        </div>
      </Drawer>
    </div>
  );
}
