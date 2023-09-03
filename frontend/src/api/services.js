const BASE_URL = process.env.REACT_APP_BASEURL;

export const getApplicationId = () => {
  return fetch(`${BASE_URL}/apply`, { 
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
   });
};

export const getBalanceSheet = (data) => {
  console.log(`${BASE_URL}/balancesheet`)
  return fetch(`${BASE_URL}/balancesheet`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const getDecision = (data) => {
  return fetch(`${BASE_URL}/decisionengine`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  });
};
