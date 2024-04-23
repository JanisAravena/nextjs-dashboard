import React from 'react';
// import { montserrat } from './ui/fonts'; // Asegúrate de que la ruta de importación es correcta
import './ui/global.css'; //con esta linea creamos estilos increible

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <footer className='py-10 flex justify-cente  items-center'>
          Un Footer hecho con amor
        </footer> */}
      </body>
    </html>
  );
}
