const BASE_URL = 'http://localhost:3000/carddisplay';

export async function getCardsbyMonthYear(month, year) {
  const response = await fetch(`${BASE_URL}/create-card/?month=${month}&year=${year}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to get cards');
  }
  return await response.json();
}