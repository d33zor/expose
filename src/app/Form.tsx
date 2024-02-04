'use client';
import React, { FormEvent, MutableRefObject, useRef, useState } from 'react';
import { useRouter } from 'next13-progressbar';
import { IconX } from '@tabler/icons-react';

const Form = ({ value }: { value?: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(value ?? '');
  const input = useRef() as MutableRefObject<HTMLInputElement>;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${user.replaceAll('/', '').replaceAll('\\', '').trim()}`);
  };

  return (
    <div className='flex'>
      <form onSubmit={(e) => submit(e)} className='flex gap-3'>
        <div className='relative'>
          <input
            ref={input}
            placeholder='Enter username...'
            type='text'
            className='bg-slate-800 pl-6 pr-14 py-3 rounded-xl border border-slate-600 w-52 sm:w-72'
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            minLength={3}
          />
          {user.length > 0 && (
            <IconX
              onClick={() => {
                setUser('');
                input.current.focus();
              }}
              className='absolute right-6 top-[12.5px] cursor-pointer'
            />
          )}
        </div>
        <button
          className='px-6 py-3 rounded-xl bg-[#06274b] border-slate-600 font-bold transition hover:bg-[#1b344e]'
          type='submit'
        >
          Check
        </button>
      </form>
    </div>
  );
};

export default Form;
