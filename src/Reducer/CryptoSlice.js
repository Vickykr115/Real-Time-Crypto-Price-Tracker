import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoData = createAsyncThunk('crypto/fetchCryptoData', async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,cardano&price_change_percentage=1h%2C24h%2C7d&sparkline=true'
  );
  const data = await res.json();
  return data;
});

const getRandomChange = (value, range = 0.05) => {
  const change = 1 + (Math.random() * range * 2 - range);
  return parseFloat((value * change).toFixed(4));
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    simulateUpdate(state) {
      state.data = state.data.map(asset => {
        const updatedPrice = getRandomChange(asset.current_price);
        const updatedHistory = asset.history ? [...asset.history] : [...(asset.sparkline_in_7d?.price || [])];
        updatedHistory.push(updatedPrice);
        if (updatedHistory.length > 20) updatedHistory.shift();

        return {
          ...asset,
          current_price: updatedPrice,
          price_change_percentage_1h_in_currency: getRandomChange(asset.price_change_percentage_1h_in_currency),
          price_change_percentage_24h_in_currency: getRandomChange(asset.price_change_percentage_24h_in_currency),
          price_change_percentage_7d_in_currency: getRandomChange(asset.price_change_percentage_7d_in_currency),
          total_volume: getRandomChange(asset.total_volume),
          history: updatedHistory,
        };
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { simulateUpdate } = cryptoSlice.actions;
export default cryptoSlice.reducer;
