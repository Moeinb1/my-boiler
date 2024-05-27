/* eslint-disable import/no-anonymous-default-export */
import { Eraser, User, UserEdit, UserTag } from 'iconsax-react';

const DashboardMenuItems = [
  {
    path: '/dashboard',
    title: 'dashboard',
    permission: '',
    icon: <Eraser />,
    nodes: [],
  },
  {
    path: '/dashboard/users',
    title: 'users',
    permission: '',
    icon: <User />,
    nodes: [
      {
        path: '/dashboard/users/table',
        title: 'users table',
        permission: '',
        icon: <UserTag />,
        nodes: [],
      },
      {
        path: '/dashboard/users/details',
        title: 'users Details',
        permission: '',
        icon: <UserEdit />,
        nodes: [],
      },
    ],
  },
];

export default DashboardMenuItems;
