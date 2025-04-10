'use client';

const getTest = async () => {
  const res = await fetch('/api/test');
  console.log(await res.text());
};
const postTest = async () => {
  const res = await fetch('/api/test', {
    method: 'POST',
    body: JSON.stringify({ name: 'John' }),
  });
  console.log(await res.json());
};
const TestPage = () => {
  return (
    <>
      <button onClick={getTest}>GET</button>
      <button onClick={postTest}>POST</button>
    </>
  );
};

export default TestPage;
