// import { StatisticsSpan } from "./StatisticsLi"

export function StatisticsList({data}) {
    return (
    //     <ul className="stat-list">
    //   {items.map(item => (
    //     <li key={item.id} className="item">
    //       <StatisticsSpan
    //         label={item.label}
    //         percentage={`${item.percentage}%`}
    //       />
    //     </li>
    //   ))}
    // </ul>
    <li>
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    )

}
