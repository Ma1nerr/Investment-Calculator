import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Interest</th>
          <th>Total Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmoutInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
