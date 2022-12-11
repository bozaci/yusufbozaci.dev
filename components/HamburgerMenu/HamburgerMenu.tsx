import { NextPage } from 'next';
import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import activePage from 'utils/activePage';
import scrollNone from 'utils/scrollNone';
import cx from 'classnames';
import config from 'data/config';

import Logo from '../Logo';
import ButtonAsLink from '../Button/ButtonAsLink';

import './HamburgerMenu.scss';

interface IHamburgerMenuProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: NextPage<IHamburgerMenuProps> = ({ show, setShow }) => {
  const hamburgerMenu = useRef<HTMLDivElement>(null);
  const { contactURL } = config;

  const handleClose = () => {
    hamburgerMenu.current?.classList.remove('is-active');
    scrollNone(false);

    setTimeout(() => {
      setShow(false);
    }, 350);
  };

  const handleCloseForce = () => {
    setShow(false);
    scrollNone(false);

    hamburgerMenu.current?.classList.add('u-transition-none');
    hamburgerMenu.current?.classList.remove('is-active');

    setTimeout(() => {
      hamburgerMenu.current?.classList.remove('u-transition-none');
    }, 350);
  };

  useEffect(() => {
    if (show) {
      hamburgerMenu.current?.classList.add('is-active');
      scrollNone(true);
    }
  }, [show]);

  return (
    <div ref={hamburgerMenu} className="c-hamburger-menu u-hidden-desktop">
      <div className="container">
        <div className="c-hamburger-menu__inner">
          <div className="c-hamburger-menu__header">
            <Logo />

            <button onClick={handleClose} className="c-hamburger-menu__close">
              <i className="ri-close-fill"></i>
            </button>
          </div>

          <div className="c-hamburger-menu__body">
            <ul className="c-hamburger-menu__list">
              <li className="c-hamburger-menu__list-item">
                <Link
                  onClick={handleCloseForce}
                  href="/"
                  className={cx('c-hamburger-menu__list-link', {
                    'is-active': activePage(''),
                  })}
                >
                  Home
                </Link>
              </li>

              <li className="c-hamburger-menu__list-item">
                <Link
                  onClick={handleCloseForce}
                  href="/about"
                  className={cx('c-hamburger-menu__list-link', {
                    'is-active': activePage('about'),
                  })}
                >
                  About
                </Link>
              </li>

              <li className="c-hamburger-menu__list-item">
                <Link
                  onClick={handleCloseForce}
                  href="/works"
                  className={cx('c-hamburger-menu__list-link', {
                    'is-active': activePage('works'),
                  })}
                >
                  Works
                </Link>
              </li>

              <li className="c-hamburger-menu__list-item">
                <Link
                  onClick={handleCloseForce}
                  href="/blog"
                  className={cx('c-hamburger-menu__list-link', {
                    'is-active': activePage('blog'),
                  })}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="c-hamburger-menu__footer">
            <ButtonAsLink
              href={contactURL}
              target="_blank"
              size="normal"
              circle={true}
              className="c-button--border c-hamburger-menu__button"
            >
              Contact Us
            </ButtonAsLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
