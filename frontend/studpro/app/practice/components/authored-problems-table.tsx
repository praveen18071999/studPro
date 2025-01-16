import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePagination } from '../hooks/usePagination'
import { useTableSearch } from '../hooks/useTableSearch'

const dummyData = [
  { id: 1, title: 'Authored Problem 1', date: '2023-05-15', status: 'Published' },
  { id: 2, title: 'Authored Problem 2', date: '2023-06-20', status: 'Draft' },
  { id: 3, title: 'Authored Problem 3', date: '2023-07-05', status: 'Published' },
  { id: 4, title: 'Authored Problem 4', date: '2023-08-10', status: 'Under Review' },
  { id: 5, title: 'Authored Problem 5', date: '2023-09-01', status: 'Draft' },
]

export function AuthoredProblemsTable() {
  const { searchTerm, setSearchTerm, filteredData } = useTableSearch(dummyData, ['title', 'date', 'status'])
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(filteredData, 5)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search authored problems..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell className="font-medium">{problem.title}</TableCell>
                <TableCell>{problem.date}</TableCell>
                <TableCell>{problem.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

