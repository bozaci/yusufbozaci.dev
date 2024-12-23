import Logo from '@/components/ui/logo';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
