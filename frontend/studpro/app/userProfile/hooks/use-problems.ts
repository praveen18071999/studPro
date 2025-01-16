/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'

type Problem = {
  id: number
  name: string
  createdAt: string
  level: string
  isPublished: boolean
  marks: number
}

const initialProblems = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Problem ${i + 1}`,
  createdAt: new Date(2023, 4, i + 1).toISOString().split('T')[0],
  level: ['Easy', 'Medium', 'Hard'][Math.floor(1 * 3)],
  isPublished: 1 > 0.5,
  marks: Math.floor(1 * 50) + 1
}))

export function useProblems() {
  const [problems, setProblems] = useState<Problem[]>(initialProblems)
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filterLevel, setFilterLevel] = useState<string | null>(null)
  const [filterPublished, setFilterPublished] = useState<boolean | null>(null)

  const itemsPerPage = 10
  const maxPage = Math.ceil(problems.length / itemsPerPage)

  const filteredProblems = problems.filter(problem => 
    (filterLevel === 'all' || filterLevel === null || problem.level === filterLevel) &&
    (filterPublished === null || problem.isPublished === filterPublished)
  )

  const paginatedProblems = filteredProblems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleRowSelect = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedRows.length === paginatedProblems.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(paginatedProblems.map(problem => problem.id))
    }
  }

  const handleEdit = (id: number) => {
    console.log(`Editing problem with id: ${id}`)
    // Implement edit functionality here
  }

  const handleDelete = (id: number) => {
    console.log(`Deleting problem with id: ${id}`)
    // Implement delete functionality here
  }

  return {
    problems: paginatedProblems,
    selectedRows,
    currentPage,
    filterLevel,
    filterPublished,
    maxPage,
    totalProblems: filteredProblems.length,
    setCurrentPage,
    setFilterLevel,
    setFilterPublished,
    handleRowSelect,
    handleSelectAll,
    handleEdit,
    handleDelete,
  }
}

