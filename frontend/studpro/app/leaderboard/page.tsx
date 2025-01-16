'use client';
import { useRouter } from 'next/navigation';
import Leaderboard from "./components/leaderboard"
import {useEffect } from "react";



export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('access_token') == null) {
        router.push('/authentication');
      }
    }
  }, []);
  //const sampleData = generateSampleData(100) // Generate 100 sample participants

  return (
    <div className="from-blue-100 to-white">
      <Leaderboard/>
    </div>
  )
}

