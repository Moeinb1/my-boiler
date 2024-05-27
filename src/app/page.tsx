'use client';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function SinglePage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center bg-transparent   p-24">
      <Button
        className="bg-red-100 w-auto ml-auto "
        onClick={() => router.push('/login')}
      >
        enter login
      </Button>
      <div className="w-full flex  justify-center bg-gray-100 text-center max-w-7xl h-screen  ">
        SinglePage
      </div>
    </div>
  );
}
