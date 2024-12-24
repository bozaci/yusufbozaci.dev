import { FC } from 'react';
import { OpenGraphImageProps } from './og-image.type';

const OpenGraphImage: FC<OpenGraphImageProps> = ({ title, description, pathName }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: 1,
          top: '50px',
          backgroundColor: '#ececec',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: 1,
          bottom: '50px',
          backgroundColor: '#ececec',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 1,
          height: '100%',
          left: '50px',
          backgroundColor: '#ececec',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 1,
          height: '100%',
          right: '50px',
          backgroundColor: '#ececec',
        }}
      />

      <div style={{ padding: 100, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            width: 48,
            height: 48,
            marginBottom: 30,
            borderRadius: '8px',
            backgroundColor: '#ececec',
          }}
        />

        <span
          style={{
            marginBottom: 5,
            fontSize: '48px',
            fontWeight: 500,
            lineHeight: '52px',
            color: '#000',
          }}
        >
          {title}
        </span>
        <span style={{ fontSize: '32px', fontWeight: 400, color: '#5C5C5C' }}>{description}</span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50px',
          bottom: '50px',
          padding: '25px 50px',
          display: 'flex',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '-50px',
            width: '1200px',
            height: 1,
            backgroundColor: '#ececec',
          }}
        />
        <span
          style={{
            maxWidth: '100%',
            padding: '8px 15px',
            borderRadius: '999px',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 500,
            color: '#fff',
          }}
        >
          yusufbozaci.dev{pathName ? `/${pathName}` : null}
        </span>
      </div>
    </div>
  );
};

export default OpenGraphImage;
