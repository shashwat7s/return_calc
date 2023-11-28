import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [monthlyAdditions, setMonthlyAdditions] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(investmentPeriod) * 12; // Number of compounding periods

    // Formula for compound interest
    const futureVal = p * (Math.pow(1 + r, n) - 1) / r + parseFloat(monthlyAdditions) * (Math.pow(1 + r, n) - 1) / r;

    setFutureValue(futureVal.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFutureValue();
  };

  return (
    <div>
      <h2>Investment Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Principal Amount:
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
        </label>
        <br />
        <label>
          Monthly Additions:
          <input type="number" value={monthlyAdditions} onChange={(e) => setMonthlyAdditions(e.target.value)} required />
        </label>
        <br />
        <label>
          Annual Interest Rate (%):
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
        </label>
        <br />
        <label>
          Investment Period (years):
          <input type="number" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      {futureValue !== null && (
        <div>
          <h3>Future Value of Investment:</h3>
          <p>${futureValue}</p>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
