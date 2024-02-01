import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exposé - expose Twitch users',
  description: 'Expose Twitch users by knowing their badges in channels they watch.',
  authors: [
    { name: 'igor_ovh', url: 'https://www.igor.ovh' },
    { name: 'd33zor', url: 'https://www.d33zor.dev' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='relative flex flex-col px-6 pt-24 md:pt-24 md:px-24 items-center min-h-screen text-white'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] bg-fixed from-[#06274b] from-0% via-[#03152a] via-25% to-black to-100%'>
            <div
              className='min-h-screen w-full bg-[url("/bg.svg")]'
              style={{ maskImage: 'linear-gradient(to top, transparent, black)' }}
            ></div>
          </div>
          <div className='flex flex-col items-center justify-between z-10 gap-12 flex-grow'>
            <div className='flex flex-col gap-6 items-center'>
              <h1 className='text-6xl font-bold tracking-wide'>
                <Link href='/'>Exposé</Link>
              </h1>
              <p className='text-xl text-gray-400 text-center'>
                Expose Twitch users by knowing their badges in channels they watch.
              </p>
            </div>
            {children}

            <div className='flex flex-col p-6 text-gray-400 items-center text-xs mt-auto'>
              <div>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href='https://www.igor.ovh'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='underline'
                >
                  igor.ovh
                </a>
                , front-end by{' '}
                <a
                  href='https://www.d33zor.dev'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='underline'
                >
                  d33zor.dev
                </a>
              </div>
              <div>Exposé is not affiliated with Twitch Interactive</div>
              <a
                href='https://mikr.us/?r=03f72d1d'
                rel='noopener noreferrer'
                target='_blank'
                className='sm:absolute right-7 bottom-7 flex items-center gap-2'
              >
                hosted on
                <div className=' bg-[url("/mikrus_logo.svg")] bg-no-repeat w-[4.7rem] h-3'></div>
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
