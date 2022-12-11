import React, { useState } from 'react';
import { NextPage } from 'next';
import activePage from 'utils/activePage';

import Header from '../Header';
import HamburgerMenu from '../HamburgerMenu';
import Footer from '../Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<ILayoutProps> = ({ children }) => {
  const [hamburgerShow, setHamburgerShow] = useState<boolean>(false);
  const isErrorPage = activePage('404');

  return (
    <>
      <Header setHamburgerShow={setHamburgerShow} />
      <HamburgerMenu show={hamburgerShow} setShow={setHamburgerShow} />
      <main className="l-main">{children}</main>
      <Footer hide={isErrorPage ? true : false} />
    </>
  );
};

export default Layout;
