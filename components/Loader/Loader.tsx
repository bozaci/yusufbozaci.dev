import React from 'react';
import { NextPage } from 'next';
import { RotatingLines } from 'react-loader-spinner';

interface ILoaderProps {
  text?: string;
}

const Loader: NextPage<ILoaderProps> = ({ text }) => {
  const defaultText = text || 'Loading';

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <RotatingLines strokeColor="gray" strokeWidth="4" width="26" />
      {text && <span className="u-section-text u-section-text--small mt-1">{defaultText}</span>}
    </div>
  );
};

export default Loader;
