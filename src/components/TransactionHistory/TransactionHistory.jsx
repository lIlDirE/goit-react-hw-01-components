import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.theadHeader}>
          <th className={css.td}>Type</th>
          <th className={css.td}>Amount</th>
          <th className={css.td}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={css.thead} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.protoTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
