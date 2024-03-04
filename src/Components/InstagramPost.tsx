import React from 'react';

interface ContainerStyle {
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  margin: string;
  maxWidth: string;
  minWidth: string;
  padding: string;
  width: string;
  widthWebkitCalc: string;
  widthCalc: string;
}

interface InnerContainerStyle {
  padding: string;
}

interface RowContainerStyle {
  display: string;
  flexDirection: string;
  alignItems: string;
}

interface ProfileImageStyle {
  backgroundColor: string;
  borderRadius: string;
  flexGrow: string;
  height: string;
  marginRight: string;
  width: string;
}

const InstagramEmbed: React.FC = () => {
  const containerStyle: ContainerStyle = {
    background: '#FFF',
    border: '0',
    borderRadius: '3px',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: '1px',
    maxWidth: '540px',
    minWidth: '326px',
    padding: '0',
    width: '99.375%',
    widthWebkitCalc: 'calc(100% - 2px)',
    widthCalc: 'calc(100% - 2px)',
  };

  const innerContainerStyle: InnerContainerStyle = {
    padding: '16px',
  };

  const rowContainerStyle: RowContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const profileImageStyle: ProfileImageStyle = {
    backgroundColor: '#F4F4F4',
    borderRadius: '50%',
    flexGrow: '0',
    height: '40px',
    marginRight: '14px',
    width: '40px',
  };

  // ... adicione estilos conforme necessário para outros elementos

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/p/C3d8Fhsvuee/?utm_source=ig_embed&utm_campaign=loading"
      data-instgrm-version="14"
      style={containerStyle}
    >
      <div style={innerContainerStyle}>
        <a
          href="https://www.instagram.com/p/C3d8Fhsvuee/?utm_source=ig_embed&utm_campaign=loading"
          style={{
            background: '#FFFFFF',
            lineHeight: '0',
            padding: '0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
          target="_blank"
        >
          <div style={rowContainerStyle}>
            <div style={profileImageStyle}></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: '0',
                  height: '14px',
                  marginBottom: '6px',
                  width: '100px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: '0',
                  height: '14px',
                  width: '60px',
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
          {/* Continue adicionando os estilos para os outros elementos */}
        </a>
        <p
          style={{
            color: '#c9c8cd',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            marginBottom: '0',
            marginTop: '8px',
            overflow: 'hidden',
            padding: '8px 0 7px',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <a
            href="https://www.instagram.com/p/C3d8Fhsvuee/?utm_source=ig_embed&utm_campaign=loading"
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              lineHeight: '17px',
              textDecoration: 'none',
            }}
            target="_blank"
          >
            Uma publicação compartilhada por Eduardo Preto Grigório (@amistosos_eventos)
          </a>
        </p>
      </div>
      <script async src="//www.instagram.com/embed.js"></script>
    </blockquote>
  );
};

export default InstagramEmbed;
