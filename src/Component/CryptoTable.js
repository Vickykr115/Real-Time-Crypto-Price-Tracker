import { useSelector } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './Table.css';
import './animations.css';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.data);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id} className="animate-row">
              <td>{index + 1}</td>
              <td><img src={asset.image} alt={asset.symbol} width="20" /></td>
              <td>{asset.name}</td>
              <td>{asset.symbol.toUpperCase()}</td>
              <td>${asset.current_price.toFixed(4)}</td>
              <td style={{ color: asset.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red' }}>{asset.price_change_percentage_1h_in_currency?.toFixed(2)}%</td>
              <td style={{ color: asset.price_change_percentage_24h_in_currency > 0 ? 'green' : 'red' }}>{asset.price_change_percentage_24h_in_currency?.toFixed(2)}%</td>
              <td style={{ color: asset.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red' }}>{asset.price_change_percentage_7d_in_currency?.toFixed(2)}%</td>
              <td>${asset.market_cap.toLocaleString()}</td>
              <td>${asset.total_volume.toLocaleString()}</td>
              <td>{asset.circulating_supply?.toLocaleString()}</td>
              <td>{asset.max_supply ? asset.max_supply.toLocaleString() : '∞'}</td>
              <td style={{ minWidth: '100px' }}>
                {(asset.history || asset.sparkline_in_7d?.price)?.length ? (
                  <Sparklines data={asset.history || asset.sparkline_in_7d.price} width={100} height={30} margin={5}>
                    <SparklinesLine color="blue" />
                  </Sparklines>
                ) : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;