import * as journalAPI from '../api/journalentry';

export async function createJournalEntry(entryData) {
  // Delegate the network request code to the journalentry-api.js API module
  return await journalAPI.createJournalEntry(entryData);
}

export async function getJournalEntries(queryParams) {
  // Delegate the network request code to the journalentry-api.js API module
  return await journalAPI.getJournalEntries(queryParams);
}
