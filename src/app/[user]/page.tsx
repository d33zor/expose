import React from 'react';
import Form from '../Form';
import type { Metadata } from 'next';
import { IconAlertTriangleFilled } from '@tabler/icons-react';
import Image from 'next/image';

type Props = {
  params: { user: string };
};

type Channel = {
  channel_id: number;
  display_name: string;
  avatar_url: string;
  badges: Badge[];
};

type Badge = {
  display_name: string;
  source: string;
};

export async function generateMetadata({ params: { user } }: Props): Promise<Metadata> {
  return {
    title: `${user} - Exposé`,
  };
}

const Page = async ({ params: { user } }: Props) => {
  const data = await fetch(`https://ujawniacz.igor.ovh/user/${user}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <div className='flex flex-col gap-6 items-center w-full'>
      <Form value={user} />
      <div className='w-full flex flex-col items-center'>
        {data?.status !== 200 && (
          <div className='flex gap-3 mt-6'>
            <IconAlertTriangleFilled />
            {!data && 'An server error occured, try again later.'}
            {data?.status === 404 && 'User was not found in our database.'}
            {data?.status === 500 && 'Username is too short.'}
          </div>
        )}
        {data?.status === 200 && (
          <table className='w-full font-normal backdrop-blur-[2px]'>
            <thead className='border-b-2 border-[#06274b]'>
              <tr>
                <th className='p-5 w-[50%] sm:w-[70%] text-left'>Badges</th>
                <th className='p-5 text-left'>on channel</th>
              </tr>
            </thead>
            <tbody>
              {data.channels.map(({ channel_id, avatar_url, display_name, badges }: Channel) => (
                <tr key={channel_id} className='border-b-2 border-[#06274b]'>
                  <td className='font-normal p-5 flex gap-3 relative'>
                    {badges.map(({ display_name, source }: Badge) => (
                      <div key={display_name} className='relative'>
                        <Image
                          src={source}
                          alt={`${display_name}'s badge`}
                          width={25}
                          height={25}
                          className='rounded peer'
                        ></Image>
                        <span className='absolute left-[50%] translate-x-[-50%] bottom-10 px-3 py-1 bg-black bg-opacity-75 rounded-xl hidden peer-hover:block text-center'>
                          {display_name}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td className='font-normal p-2'>
                    <a
                      href={`https://www.twitch.tv/${display_name.toLowerCase()}`}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='flex items-center gap-3'
                    >
                      <Image
                        src={avatar_url}
                        alt={`${display_name}'s avatar`}
                        width={35}
                        height={35}
                        className='rounded-full'
                      />
                      {display_name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Page;
