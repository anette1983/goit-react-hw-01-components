import PropTypes from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';
import { StyledTable } from './TransactionHistory.styled';

export function TransactionHistory({transactions}) {
    return (
        <StyledTable>
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
      </StyledTable>
    );
  }


  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }),
    )
};



