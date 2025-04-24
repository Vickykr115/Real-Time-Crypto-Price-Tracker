import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptoData, simulateUpdate } from './Reducer/CryptoSlice';
import CryptoTable from './Component/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData());
    const interval = setInterval(() => dispatch(simulateUpdate()), 1000 + Math.random() * 1000); // Random 1-2s
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
