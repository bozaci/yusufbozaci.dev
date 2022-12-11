import SEO from 'containers/SEO';
import ButtonAsLink from 'components/Button/ButtonAsLink';
import './404.scss';

const Error = () => {
  return (
    <>
      <SEO title="404" />

      <section className="o-error">
        <div className="container">
          <div className="o-error__inner">
            <h1 className="o-error__status">404</h1>
            <span className="o-error__title">Opps! Page not found.</span>
            <p className="o-error__text">
              You’re trying to access the page that has been deleted or never existed.
            </p>

            <ButtonAsLink href="/" theme="primary" size="normal" className="mt-5">
              Go Back Homepage
            </ButtonAsLink>

            <div className="o-error__effect-img"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
