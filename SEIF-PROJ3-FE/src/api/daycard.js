const BASE_URL = 'https://seif-proj-3-be.onrender.com/daycard';
//const BASE_URL = 'https://elysio.onrender.com/daycard';

export async function getDayCardByDate(date) {
  const response = await fetch(`${BASE_URL}?date=${date}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to get day card');
  }
  return await response.json();
}

export async function createDayCard(cardData) {
  const response = await fetch(`${BASE_URL}/create-card`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData),
  });
  if (!response.ok) {
    throw new Error('Failed to create day card');
  }
  return await response.json();
}
