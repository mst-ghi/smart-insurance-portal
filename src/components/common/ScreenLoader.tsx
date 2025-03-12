const ScreenLoader = () => {
  return (
    <div
      style={{
        zIndex: 999,
        height: '100dvh',
        width: '100dvw',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontWeight: 700 }}>Smart Insurance Portal</h1>
    </div>
  );
};

export default ScreenLoader;
