import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <th className={css.data}>Type</th>
          <th className={css.data}>Amount</th>
          <th className={css.data}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.row} key={item.id}>
              <td className={css.dataItem}>{item.type}</td>
              <td className={css.dataItem}>{item.amount}</td>
              <td className={css.dataItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;