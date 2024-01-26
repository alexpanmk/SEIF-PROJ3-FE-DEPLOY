import * as journalAPI from '../api/journalentry';

export async function createJournalEntry(entryData, token) {
  // Use the function from `api/journalentry.js` that already handles the URL correctly
  return await journalAPI.createJournalEntry(entryData, token);
}

export async function getJournalEntryById(entryId) {
  // Delegate the network request code to the api/journalentry.js API module
  return await journalAPI.getJournalEntryById(entryId);
}

