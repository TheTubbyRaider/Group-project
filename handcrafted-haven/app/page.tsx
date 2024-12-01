import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Desktop Hero Image */}
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        {/* Mobile Hero Image */}
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>

      {/* Welcome Section */}
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the{' '}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>
        , brought to you by Vercel.
      </p>

      {/* Call to Action */}
      <div className="flex items-center justify-between mt-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
        </Link>
      </div>
    </main>
  );
}
