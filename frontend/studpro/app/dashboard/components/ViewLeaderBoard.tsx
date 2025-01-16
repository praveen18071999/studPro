'use client';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ViewLeaderBoard() {
  const router = useRouter();
  const handleLeaderBoard = () => {
    router.push('/leaderboard'); // Replace with the actual path to the leaderboard page
  }
  //debugger;
  return (
    <Card>
      <CardHeader>
        <CardTitle>View the global Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">The global leaderboard showcases the top coders based on points and problem-solving efficiency. It provides detailed rankings, scores, and performance insights. Your standings reflect your rank, total points, and accuracy compared to other competitors.</p>
        <Button onClick={handleLeaderBoard}>Leaderboard</Button>
      </CardContent>
    </Card>
  )
}

