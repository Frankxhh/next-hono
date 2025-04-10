'use client';

import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <Link href="/test">前往本地mock接口--test</Link>
      <Link href="/serverLess">前往云端调用接口--test</Link>
    </>
  );
};

export default HomePage;
