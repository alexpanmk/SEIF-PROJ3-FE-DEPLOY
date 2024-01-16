import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJournalEntryById } from '../service/journalentry';

const JournalEntry = () => {
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState('');
  const { entryId } = useParams(); // Extract entryId from the URL

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        // Use the getJournalEntryById function to fetch the entry data
        const entryData = await getJournalEntryById(entryId);
        // Format the date
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(entryData.date));
        // Update the entry data with the formatted date
        setEntry({ ...entryData, date: formattedDate });
      } catch (error) {
        setError('Failed to fetch journal entry');
        console.error(error);
      }
    };

    if (entryId) {
      fetchEntry();
    }
  }, [entryId]);

  if (error) {
    return <div className="alert alert-error">{error}</div>;
  }

  if (!entry) {
    return <div>Loading...</div>;
  }

  // Use DaisyUI classes for styling
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-8">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-4">{entry.entry_title}</h2>
        <p className="text-sm text-gray-500 mb-4">{entry.entry_description}</p>
        <div className="border p-2 rounded text-sm text-gray-500 mb-4">{entry.entry_text}</div>
        <time className="text-sm text-teal-500">{entry.date}</time>
      </div>
    </div>
  );
};

export default JournalEntry;

