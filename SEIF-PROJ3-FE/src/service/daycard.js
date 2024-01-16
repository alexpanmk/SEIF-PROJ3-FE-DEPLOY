import * as daycardAPI from '../api/daycard';

export async function fetchOrCreateTodayCard() {
  // This will call the API and return today's card, creating one if necessary
  return await daycardAPI.getDayCardByDate();
}
