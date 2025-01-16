'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import LeaderboardHook from "../hooks/leaderboard"




export default function Leaderboard() {
  const {
    paginatedData,
    sortColumn,
    sortDirection,
    searchTerm,
    currentPage,
    totalPages,
    handlePageChange,
    handleSort,
    setSearchTerm
  } = LeaderboardHook();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Leaderboard</h1>
      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                Name {sortColumn === 'name' && (sortDirection === 'asc' ? <ChevronUpIcon className="inline" /> : <ChevronDownIcon className="inline" />)}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('problemssolved')}>
                Problems Solved {sortColumn === 'problemssolved' && (sortDirection === 'asc' ? <ChevronUpIcon className="inline" /> : <ChevronDownIcon className="inline" />)}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('totalmarks')}>
                Marks {sortColumn === 'totalmarks' && (sortDirection === 'asc' ? <ChevronUpIcon className="inline" /> : <ChevronDownIcon className="inline" />)}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(paginatedData) && paginatedData.map((participant, index: number) => (
              <TableRow key={index} className="hover:bg-gray-100 transition-colors">
                <TableCell className="font-medium">{participant.rank_user}</TableCell>
                <TableCell>{participant.name}</TableCell>
                <TableCell>{participant.problemssolved}</TableCell>
                <TableCell>{participant.totalmarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

