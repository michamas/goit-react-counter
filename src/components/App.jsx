import Counter from './Counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'grey',
      }}
    >
      <Counter step={3} initialValue={5} />
    </div>
  );
};
