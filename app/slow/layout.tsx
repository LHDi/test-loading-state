import { headers } from 'next/headers';

export default function Layout({ children }: { children: React.ReactNode }) {
  const middlewareMessage = headers().get('x-middleware-message');

  return (
    <>
      <p>
        Middleware message from headers in the <b>SLOW PAGE</b> Layout:{' '}
        <span className="text-red-500">{middlewareMessage}</span>
      </p>
      {children}
    </>
  );
}
