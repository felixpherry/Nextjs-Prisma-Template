import Link from 'next/link';

const Page = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  console.log('/posts', { posts });
  return (
    <div>
      <Link href='/'>Back</Link>
      {/* {posts.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))} */}
    </div>
  );
};

export default Page;
