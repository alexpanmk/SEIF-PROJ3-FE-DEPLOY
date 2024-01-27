import { getToken } from "../util/security";

const BASE_URL = 'https://seif-proj-3-be.onrender.com/carddisplay';
//const BASE_URL = 'https://elysio.onrender.com/carddisplay';

export async function getCardsbyMonthYear(month, year) {

  const token = getToken();

  const response = await fetch(`${BASE_URL}/get-cards/1/2024`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) {
    throw new Error('Failed to get cards');
  }
  return await response.json();
}