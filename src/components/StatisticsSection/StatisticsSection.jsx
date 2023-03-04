import PropTypes from 'prop-types';

import { StatisticsList } from "../StatisticsList/StatisticsList";
import { StyledSection, StyledUl} from './StatisticsSection.styled';

export function StatisticsSection({ title, items }) {
    return (
      <StyledSection>
        {title && <h2>{title}</h2>}
        <StyledUl>
          {items.map(el => {
           return <StatisticsList key={el.id} data={el}/>
          })}
        </StyledUl>
      </StyledSection>
    );
  }


// StatisticsSection.propTypes = {
//   title: PropTypes.string,
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired

//   }))
// };

StatisticsSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired
};

