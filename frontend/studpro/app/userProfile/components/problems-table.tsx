'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useProblems } from "../hooks/use-problems"

export function ProblemsTable() {
  const {
    problems,
    selectedRows,
    currentPage,
    maxPage,
    totalProblems,
    setCurrentPage,
    setFilterLevel,
    setFilterPublished,
    handleRowSelect,
    handleSelectAll,
    handleEdit,
    handleDelete,
  } = useProblems()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Problems List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Select onValueChange={(value) => setFilterLevel(value as string | null)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setFilterPublished(value === 'true' ? true : value === 'false' ? false : null)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Published" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Published</SelectItem>
              <SelectItem value="false">Not Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedRows.length === problems.length}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Problem</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((problem) => (
              <TableRow 
                key={problem.id}
                className={selectedRows.includes(problem.id) ? 'bg-muted' : ''}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(problem.id)}
                    onCheckedChange={() => handleRowSelect(problem.id)}
                    aria-label={`Select problem ${problem.id}`}
                  />
                </TableCell>
                <TableCell>{problem.id}</TableCell>
                <TableCell>{problem.name}</TableCell>
                <TableCell>{problem.createdAt}</TableCell>
                <TableCell>{problem.level}</TableCell>
                <TableCell>{problem.isPublished ? 'Yes' : 'No'}</TableCell>
                <TableCell>{problem.marks}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleEdit(problem.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleDelete(problem.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, totalProblems)} of {totalProblems} entries
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, maxPage))}
              disabled={currentPage === maxPage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

