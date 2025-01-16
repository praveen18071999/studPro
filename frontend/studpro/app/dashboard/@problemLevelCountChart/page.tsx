"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { problemsLevelChart } from "../hooks/problemsLevelChart"

type ProblemLevelData = {
  easy: number;
  medium: number;
  hard: number;
};
export default function ProblemsDifficultyChart() {
    //debugger;
  const { data } = problemsLevelChart() as { data: ProblemLevelData[] | undefined };
  const data1=[
    { difficulty: 'Easy', count: data ? data[0]?.easy : 0 },
    { difficulty: 'Medium', count: data ? data[1]?.medium : 0 },
    { difficulty: 'Hard', count: data ? data[2]?.hard : 0 },
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Problems Solved by Difficulty</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="difficulty" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

