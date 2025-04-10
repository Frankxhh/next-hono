'use client';
const getVercelData = async () => {
  const res = await fetch('https://express-zeta-ivory.vercel.app/helloJson');
  const data = await res.json();
  console.log(data);
};

const ServerLessPage = () => {
  return (
    <div>
      <button onClick={getVercelData}>获取vercel接口数据</button>
    </div>
  );
};

export default ServerLessPage;
