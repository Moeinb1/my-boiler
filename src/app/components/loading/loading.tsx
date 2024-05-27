import { CircularProgress } from '@mui/material';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col justify-center w-full h-screen !bg-transparent  items-center">
      <CircularProgress />
    </div>
  );
}
