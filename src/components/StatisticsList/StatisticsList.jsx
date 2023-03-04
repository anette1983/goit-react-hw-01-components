import PropTypes from 'prop-types';
import { StyledLi } from './StatisticsList.styled';

export function StatisticsList({data}) {
    return (
    <StyledLi>
      <span>{data.label}</span>
      <span>{data.percentage}</span>
    </StyledLi>
    )

}

StatisticsList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})
}

// StatisticsList.propTypes = {
//   data: PropTypes.object.isRequired,
// }
