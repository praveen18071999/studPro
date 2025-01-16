'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ViewFlowChartCard() {
  const router = useRouter();

  const handleViewFlowChart = () => {
    router.push('/flowchart'); // Replace with the actual path to the flowchart page
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>View Flow Chart of Your Code</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">VAn interactive chart visually represents the flow of your code, illustrating the logical sequence and structure. It highlights key decision points, loops, and function calls. This tool aids in understanding and debugging your code by providing a clear, graphical overview.</p>
        <Button onClick={handleViewFlowChart}>View Flow Chart</Button>
      </CardContent>
    </Card>
  )
}

