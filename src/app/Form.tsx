'use client';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Form = ({ value }: { value?: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(value ?? '');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${user.replaceAll('/', '').replaceAll('\\', '')}`);
  };

  return (
    <div className='flex'>
      <form onSubmit={(e) => submit(e)} className='flex gap-3'>
        <input
          placeholder='Enter username...'
          type='text'
          className='bg-slate-800 px-6 py-3 rounded-xl border border-slate-600 w-52 sm:w-72'
          onChange={(e) => setUser(e.target.value)}
          defaultValue={value ?? ''}
          required
          minLength={3}
        />
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
