import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePagination } from '../hooks/usePagination'
import { useTableSearch } from '../hooks/useTableSearch'
import { contestTable } from "../hooks/createContestTable"

export function CreatedContestsTable() {
    const {dummyData} = contestTable()
  const { searchTerm, setSearchTerm, filteredData } = useTableSearch(dummyData, ['title', 'startDateTime', 'endDateTime', 'participants'])
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(filteredData, 5)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search contests..."
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
              <TableHead>Start Date & Time</TableHead>
              <TableHead>End Date & Time</TableHead>
              <TableHead>Participants</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((contest) => (
              <TableRow key={contest.id}>
                <TableCell className="font-medium">{contest.title}</TableCell>
                <TableCell>{contest.startDateTime}</TableCell>
                <TableCell>{contest.endDateTime}</TableCell>
                <TableCell>{contest.participants}</TableCell>
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

