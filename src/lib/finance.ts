export function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

// Short Indian-format (Lakh / Crore)
export function formatShort(n: number) {
  if (n >= 1e7) return "₹" + (n / 1e7).toFixed(2) + " Cr";
  if (n >= 1e5) return "₹" + (n / 1e5).toFixed(2) + " L";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

// Future value of a monthly SIP
export function sipFutureValue(monthly: number, years: number, ratePct: number) {
  const months = years * 12;
  const r = ratePct / 100 / 12;
  if (r === 0) return monthly * months;
  return monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
}

// Future value of a lumpsum
export function lumpsumFutureValue(principal: number, years: number, ratePct: number) {
  return principal * Math.pow(1 + ratePct / 100, years);
}

// SWP: remaining balance after periodic withdrawals
export function swpResult(principal: number, monthlyWithdraw: number, years: number, ratePct: number) {
  const months = years * 12;
  const r = ratePct / 100 / 12;
  let bal = principal;
  let totalWithdrawn = 0;
  for (let i = 0; i < months; i++) {
    bal = bal * (1 + r) - monthlyWithdraw;
    if (bal < 0) {
      totalWithdrawn += monthlyWithdraw + bal; // last partial
      bal = 0;
      return { finalBalance: 0, totalWithdrawn, monthsLasted: i + 1 };
    }
    totalWithdrawn += monthlyWithdraw;
  }
  return { finalBalance: bal, totalWithdrawn, monthsLasted: months };
}

// Step-up SIP: SIP amount increases by stepPct every year
export function stepUpSipFV(monthly: number, years: number, ratePct: number, stepPct: number) {
  const r = ratePct / 100 / 12;
  let fv = 0;
  let amount = monthly;
  let invested = 0;
  for (let y = 0; y < years; y++) {
    for (let m = 0; m < 12; m++) {
      const monthsRemaining = (years - y) * 12 - m;
      fv += amount * Math.pow(1 + r, monthsRemaining);
      invested += amount;
    }
    amount = amount * (1 + stepPct / 100);
  }
  return { future: fv, invested };
}

// SIP required to reach a target corpus
export function requiredSip(target: number, years: number, ratePct: number) {
  const months = years * 12;
  const r = ratePct / 100 / 12;
  if (r === 0) return target / months;
  return target / (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
}

// EMI for a loan
export function emi(principal: number, annualRatePct: number, years: number) {
  const n = years * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / n;
  const e = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return { emi: e, total: e * n, interest: e * n - principal };
}

// Inflation-adjusted future cost
export function futureCost(present: number, years: number, inflationPct: number) {
  return present * Math.pow(1 + inflationPct / 100, years);
}
