"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableHook } from "../hooks/table";

export default function ProblemsTable() {
  const {
    currentPage,
    setCurrentPage,
    filteredProblems,
    totalPages,
    filters,
    setFilters,
  } = TableHook();
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Problems Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4">
          <Input
            placeholder="Filter by link"
            value={filters.link}
            onChange={(e) =>
              setFilters({ ...filters, link: e.target.value })
            }
            className="w-full sm:w-auto"
          />
          <Select
            value={filters.level}
            onValueChange={(value) =>
              setFilters({ ...filters, level: value === "all" ? "" : value })
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Filter by marks"
            value={filters.marks}
            onChange={(e) =>
              setFilters({ ...filters, marks: e.target.value })
            }
            className="w-full sm:w-auto"
          />
          <Input
            placeholder="Filter by author"
            value={filters.author}
            onChange={(e) =>
              setFilters({ ...filters, author: e.target.value })
            }
            className="w-full sm:w-auto"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Problem Link</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead>Author</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProblems && filteredProblems.length > 0 ? (
              filteredProblems.map((problem) => (
                <TableRow key={problem.problemid}>
                  <TableCell>
                    <a
                      href={`/problem/${problem.problemid}`}
                      className="text-blue-600 hover:underline"
                    >
                      Problem {problem.problemtitle}
                    </a>
                  </TableCell>
                  <TableCell>{problem.problemlevel}</TableCell>
                  <TableCell>{problem.totalmarks}</TableCell>
                  <TableCell>{problem.authorname}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No problems found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredProblems.length)} of{" "}
            {filteredProblems.length} problems
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
               disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
