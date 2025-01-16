'use client'
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ViewFlowChartCard } from "../components/ViewFlowChartCard"
import { ViewLeaderBoard } from "../components/ViewLeaderBoard"
import { authoredProblems } from '../hooks/authoredProblems';

export default function ProblemAuthorCard() {
  const router = useRouter();
  const handleAuthorProblem = () => {
    
    router.push('/problem-author');
  }
  const {easy,medium,hard,total}=authoredProblems();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Problem Author</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You have authored {total} problems</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Easy: {easy}</li>
            <li>Medium: {medium}</li>
            <li>Hard: {hard}</li>
          </ul>
          <Button onClick={handleAuthorProblem}>Author Problem</Button>
        </CardContent>
      </Card>
      <ViewFlowChartCard />
      <ViewLeaderBoard />
    </>
  )
}