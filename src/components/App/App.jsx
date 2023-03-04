// import PropTypes from 'prop-types';
import { ProfileCard } from 'components/Profile/Profile';
import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';
import { StatisticsSection } from 'components/StatisticsSection/StatisticsSection';
// import { FriendList} from 'components/FriendList';
// import { StatisticsList } from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// import css from "./App.module.css";
// так імпортувати в кожен модуль

export const App = () => (
  <>
    <ProfileCard
      username={user.username}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    {/* <StatisticsSection title="Upload stats">
      <StatisticsList items={data} />
    </StatisticsSection  */}
    <StatisticsSection title="Upload stats" items={data}/>
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transactions}/>

  </>
);
