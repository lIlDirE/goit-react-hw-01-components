import css from './TransactionHistory.module.css'

export function TransactionHistory({transactions}){
return <table className={css.transactions}>
	<thead>
		<tr className={css.theadHeader}>
		<th className={css.td}>Type</th>
		<th className={css.td}>Amount</th>
		<th className={css.td}>Currency</th>
		</tr>
	</thead>
	<tbody>
		{transactions.map(transaction => 	  
			<tr className={css.thead} key={transaction.id}>
				<td className={css.td}>{transaction.type}</td>
				<td className={css.td}>{transaction.amount}</td>
				<td className={css.td}>{transaction.currency}</td>
			</tr>
		)}
		</tbody>
		</table>
}