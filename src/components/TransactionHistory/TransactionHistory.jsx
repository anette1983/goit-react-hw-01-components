import PropTypes from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';


export function TransactionHistory({transactions}) {
    return (
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
            {transactions.map(transaction => {
                return <TransactionRow key={transaction.id} id={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency}/>
            })
            }
          
        </tbody>
      </table>
    );
  }


  TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired
};



