import { FaTh, FaRegChartBar, FaCommentAlt } from 'react-icons/fa';
import { BiHomeAlt, BiLogIn } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';

const menu = [
  {
    title: 'Dashboard',
    icon: <BiHomeAlt />,
    path: '/',
  },
  {
    title: 'Profile',
    icon: <AiOutlineUser />,
    path: '/profile',
  },
  // {
  //   title: "Logout",
  //   icon: <CiLogout />,
  //   path: "/auth/logout",
  // },
];

export default menu;
