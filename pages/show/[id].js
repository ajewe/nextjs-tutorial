import Link from 'next/link';
import Index from '..';

function Show({ show }) {
  return (
    <>
      <Link href="/"><a>Home</a></Link>
      <br />
      <Link href="/about"><a>About</a></Link>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      { show.image ? <img src={show.image.medium} /> : null }
    </>
  );
}

Show.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log('show', show)

  return { show };
}

export default Show;