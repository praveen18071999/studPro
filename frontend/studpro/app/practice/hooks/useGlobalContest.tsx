import { useState, useEffect } from 'react'

type Problem = {
  id: number
  title: string
  startDateTime: string
  endDateTime: string
  status: string
}

export function useProblemTable(initialTab: string) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [problems, setProblems] = useState<Problem[]>([])

  useEffect(() => {
    // Simulating API call to fetch problems
    const fetchProblems = () => {
      const dummyData: Problem[] = [
        { id: 1, title: 'Problem 1', startDateTime: '2023-01-01 10:00', endDateTime: '2023-01-01 12:00', status: 'Completed' },
        { id: 2, title: 'Problem 2', startDateTime: '2023-06-15 14:00', endDateTime: '2023-06-15 16:00', status: 'In Progress' },
        { id: 3, title: 'Problem 3', startDateTime: '2023-12-31 09:00', endDateTime: '2023-12-31 11:00', status: 'Upcoming' },
        { id: 4, title: 'Problem 4', startDateTime: '2023-07-01 11:00', endDateTime: '2023-07-01 13:00', status: 'Completed' },
        { id: 5, title: 'Problem 5', startDateTime: '2023-08-15 15:00', endDateTime: '2023-08-15 17:00', status: 'Upcoming' },
      ]
      setProblems(dummyData)
    }

    fetchProblems()
  }, [])

  const filteredProblems = problems.filter(item => {
    const now = new Date()
    const startDate = new Date(item.startDateTime)
    const endDate = new Date(item.endDateTime)
    switch (activeTab) {
      case 'past':
        return endDate < now
      case 'present':
        return startDate <= now && endDate >= now
      case 'future':
        return startDate > now
      default:
        return true
    }
  })

  return {
    activeTab,
    setActiveTab,
    filteredProblems
  }
}

