import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { usePagination } from '../hooks/usePagination'

interface PaginatedTableProps<T> {
  data: T[]
  columns: { key: keyof T; label: string }[]
  itemsPerPage: number
  renderCell: (item: T, column: keyof T) => React.ReactNode
}

export function PaginatedTable<T>({ data, columns, itemsPerPage, renderCell }: PaginatedTableProps<T>) {
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(data, itemsPerPage)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key as string}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key as string}>{renderCell(item, column.key)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  )
}

