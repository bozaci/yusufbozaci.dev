import { NextPage } from 'next';
import { Dispatch, SetStateAction } from 'react';
import NavLink from 'next/link';
import cx from 'classnames';
import activePage from 'utils/activePage';
import config from 'data/config';

import Logo from '../Logo';
import ButtonAsLink from '../Button/ButtonAsLink';
import './Header.scss';

interface IHeaderProps {
  setHamburgerShow: Dispatch<SetStateAction<boolean>>;
}

const Header: NextPage<IHeaderProps> = ({ setHamburgerShow }) => {
  const { contactURL } = config;

  const handleHamburgerOpen = () => {
    setHamburgerShow(true);
  };

  return (
    <header className="l-header">
      <div className="container">
        <div className="l-header__inner">
          <Logo className="l-header__logo" />

          <nav className="c-header-navbar u-hidden-mobile-or-tablet">
            <ul className="c-header-navbar__menu">
              <li className="c-header-navbar__menu-item">
                <NavLink
                  href="/"
                  className={cx('c-header-navbar__menu-link', {
                    'is-active': activePage(''),
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li className="c-header-navbar__menu-item">
                <NavLink
                  href="/about"
                  className={cx('c-header-navbar__menu-link', {
                    'is-active': activePage('about'),
                  })}
                >
                  About
                </NavLink>
              </li>

              <li className="c-header-navbar__menu-item">
                <NavLink
                  href="/works"
                  className={cx('c-header-navbar__menu-link', {
                    'is-active': activePage('works'),
                  })}
                >
                  Works
                </NavLink>
              </li>

              <li className="c-header-navbar__menu-item">
                <NavLink
                  href="/blog"
                  className={cx('c-header-navbar__menu-link', {
                    'is-active': activePage('blog'),
                  })}
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <ButtonAsLink
              href={contactURL}
              target="_blank"
              size="small"
              circle={true}
              className="c-button--border"
            >
              Contact Us
            </ButtonAsLink>
          </nav>

          <button
            onClick={handleHamburgerOpen}
            aria-label="Hamburger Menu Open"
            className="l-header__hamburger-open u-hidden-desktop"
          >
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
