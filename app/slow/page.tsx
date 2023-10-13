import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <p>Finally</p>

      <Link href={'/'} prefetch>
        Back
      </Link>
    </>
  );
}

export default Page;
