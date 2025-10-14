'use client';
import { useParams } from 'next/navigation';

const MyFriendPage = () => {
  const params = useParams();
  console.log(params); // TODO: 삭제 할 것
  return <div>MyFriendPage</div>;
};

export default MyFriendPage;
