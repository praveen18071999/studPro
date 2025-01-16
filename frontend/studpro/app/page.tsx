'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  if(localStorage.getItem('access_token') == null){
    router.push('/authentication');

  }
  else
  router.push('/dashboard');
  //return null;
}