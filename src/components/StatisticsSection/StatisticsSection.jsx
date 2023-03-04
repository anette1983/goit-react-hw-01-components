import PropTypes from 'prop-types';

import { StatisticsList } from "../StatisticsList/StatisticsList";

export function StatisticsSection({ title, items }) {
    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul>
          {items.map(el => {
           return <StatisticsList key={el.id} data={el}/>
          })}
        </ul>
      </section>
    );
  }


StatisticsSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired
};
