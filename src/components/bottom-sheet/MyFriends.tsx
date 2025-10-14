import { CiStar } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { FaCircleMinus, FaStar } from 'react-icons/fa6';
import { ImUserPlus } from 'react-icons/im';
import FriendSearchBar from '../my-page/FriendSearchBar';
import FriendList from '../my-page/FriendList';

const MyFriends = () => {
  return (
    <div className='relative flex flex-col items-center px-[23px] gap-[10px]'>
      <FriendSearchBar />
      <FriendList />
    </div>
  );
};

export default MyFriends;
