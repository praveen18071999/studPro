import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePagination } from '../hooks/usePagination'
import { useTableSearch } from '../hooks/useTableSearch'

const dummyData = [
  { id: 1, title: 'Problem A', tags: ['Array', 'Sorting'], level: 'Easy', progress: '75%', author: 'John Doe' },
  { id: 2, title: 'Problem B', tags: ['Dynamic Programming'], level: 'Hard', progress: '30%', author: 'Jane Smith' },
  { id: 3, title: 'Problem C', tags: ['Graph', 'BFS'], level: 'Medium', progress: '50%', author: 'Alice Johnson' },
  { id: 4, title: 'Problem D', tags: ['String', 'Hashing'], level: 'Easy', progress: '90%', author: 'Bob Williams' },
  { id: 5, title: 'Problem E', tags: ['Tree', 'DFS'], level: 'Hard', progress: '10%', author: 'Charlie Brown' },
]

export function ProblemListTable() {
  const { searchTerm, setSearchTerm, filteredData } = useTableSearch(dummyData, ['title', 'tags', 'level', 'progress', 'author'])
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(filteredData, 5)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search problems..."
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
              <TableHead>Tags</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Author</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell className="font-medium">{problem.title}</TableCell>
                <TableCell>
                  {problem.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="mr-1">{tag}</Badge>
                  ))}
                </TableCell>
                <TableCell>{problem.level}</TableCell>
                <TableCell>{problem.progress}</TableCell>
                <TableCell>{problem.author}</TableCell>
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

