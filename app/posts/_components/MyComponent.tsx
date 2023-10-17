const MyComponent = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  console.log('Children Component', { posts });
  return <div>My Component</div>;
};

export default MyComponent;
