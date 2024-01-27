import { getToken } from "../util/security";

const BASE_URL = 'https://seif-proj-3-be.onrender.com/journal';
//const BASE_URL = 'https://elysio.onrender.com/journal';

const token = getToken();

export async function createJournalEntry(entryData) {

 
  
  const createURL = `${BASE_URL}/create-journal-entry`; 
  const response = await fetch(createURL, {
    method: 'POST',
    //TODO: Add JWT token to headers
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    body: JSON.stringify(entryData),
  });

  if (response.ok) {
    return response.json();
  } else {
    // It's good to log the response to understand the error details
    const errorBody = await response.text();
    console.error('Error response body:', errorBody);
    throw new Error('Failed to create journal entry');
  }
}

export async function getJournalEntries(queryParams) {
  const searchParams = new URLSearchParams(queryParams);
  const getURL = `${BASE_URL}?${searchParams}`;
  const response = await fetch(getURL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  });

  if (response.ok) {
    return response.json();
  } else {
    // It's good to log the response to understand the error details
    const errorBody = await response.text();
    console.error('Error response body:', errorBody);
    throw new Error('Failed to get journal entries');
  }
}

export async function getJournalEntryById(entryId) {
  const getURL = `${BASE_URL}/${entryId}`; // RESTful convention for fetching a resource by ID
  const response = await fetch(getURL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  });

  if (response.ok) {
    return response.json();
  } else {
    const errorBody = await response.text();
    console.error('Error response body:', errorBody);
    throw new Error('Failed to get journal entry');
  }
}

export async function updateJournalEntry(entryId, entryData) {
  const updateURL = `${BASE_URL}/${entryId}`;
  const response = await fetch(updateURL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    body: JSON.stringify(entryData),
  });

  if (response.ok) {
    return response.json();
  } else {
    const errorBody = await response.text();
    console.error('Error response body:', errorBody);
    throw new Error('Failed to update journal entry');
  }
}

export async function deleteJournalEntry(entryId) {
  const deleteURL = `${BASE_URL}/${entryId}`;
  const response = await fetch(deleteURL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  });

  if (response.ok) {
    return response.json();
  } else {
    const errorBody = await response.text();
    console.error('Error response body:', errorBody);
    throw new Error('Failed to delete journal entry');
  }
}

