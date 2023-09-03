const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {

  let preAssessment = 20;
  let isProfitIn12Month = req.body.sheet
    .slice(0, 12)
    .reduce((acc, curr) => acc + curr.profitOrLoss, 0);

  let assetsAverage12Month =
    req.body.sheet.slice(0, 12).reduce((acc, curr) => acc + curr.assetsValue, 0) / 12;

  if (isProfitIn12Month > 0) {
    preAssessment = 60;
  }

  if (assetsAverage12Month > req.body.loanAmount) {
    preAssessment = 100;
  }

  const decisionEngineRequestBody = {
    tokenId: req.body.tokenId,
    businessName: req.body.businessName,
    yearEstablished: req.body.yearEstablished,
    annualSummary: req.body.sheet.reduce((acc, entry) => {
      {
        const key = entry['year'];
        acc[key] ??= 0;
        acc[key] += entry['profitOrLoss'];
        return acc;
      }
    }),
    preAssessment: preAssessment.toString()
  };

  const loanResult = {
    status: 'Approved',
    approvedAmount: (req.body.loanAmount * preAssessment) / 100,
    approvedTerm: '1 year',
    approvedInterestRate: '9%'
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(loanResult));
});

module.exports = router;
