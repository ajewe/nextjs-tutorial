import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>
        Hello, I'm the about page!
      </p>
    </>
  )
}