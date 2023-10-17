import Link from 'next/link';
import MyComponent from './posts/_components/MyComponent';

const Page = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  console.log('/', { posts });
  return (
    <div className='flex flex-col gap-3'>
      <Link href='/posts' prefetch={false}>
        All posts
      </Link>
      <Link href='/posts/create'>Create post</Link>
      <MyComponent />
    </div>
  );
};

export default Page;
