import * as journalAPI from '../api/journalentry';

export async function createJournalEntry(entryData) {

  //Append user in entryData
  const token = getToken();
  const user = JSON.parse(atob(token.split(".")[1])).payload.email;
  entryData.user = user;

  // Delegate the network request code to the journalentry-api.js API module
  return await journalAPI.createJournalEntry(entryData);
}

// export async function getJournalEntries(queryParams) {
//   // Delegate the network request code to the journalentry-api.js API module
//   return await journalAPI.getJournalEntries(queryParams);
// }

export async function getJournalEntryById(entryId) {
  // Delegate the network request code to the api/journalentry.js API module
  return await journalAPI.getJournalEntryById(entryId);
}

