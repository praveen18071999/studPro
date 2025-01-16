import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePagination } from '../hooks/usePagination'
import { useProblemTable } from '../hooks/useGlobalContest'
import { useTableSearch } from '../hooks/useTableSearch'

export function PastPresentFutureTable() {
  const { activeTab, setActiveTab, filteredProblems } = useProblemTable('past')
  const { searchTerm, setSearchTerm, filteredData } = useTableSearch(filteredProblems, ['title', 'startDateTime', 'endDateTime', 'status'])
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(filteredData, 5)

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="past">Past</TabsTrigger>
        <TabsTrigger value="present">Present</TabsTrigger>
        <TabsTrigger value="future">Future</TabsTrigger>
      </TabsList>
      <TabsContent value={activeTab} className="mt-4">
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
                <TableHead>Start Date & Time</TableHead>
                <TableHead>End Date & Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.startDateTime}</TableCell>
                  <TableCell>{item.endDateTime}</TableCell>
                  <TableCell>{item.status}</TableCell>
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
      </TabsContent>
    </Tabs>
  )
}

