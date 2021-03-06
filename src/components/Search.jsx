import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';

const Search = () => {
  const [text, setText] = useState('elon musk');
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
        placeholder='Search Google or type URL'
        value={text}
        onChange={e => setText(e.target.value)}
        type='text'
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
      />
      {text && (
        <button type='button' className='absolute top-1.5 right-4 text-xl text-gray-500' onClick={() => setText('')}>
          Clear Text
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
