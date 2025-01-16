'use client';
import { useEffect, useState } from "react";
import Routes from "../../../routes";

interface Participant {
    rank_user: number
    name: string
    problemssolved: number
    totalmarks: number
  }
  
export default function LeaderboardHook() {
    const [paginatedData, setPaginatedData] = useState<Participant>()
  const [sortColumn, setSortColumn] = useState<keyof Participant>('totalmarks')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 20
  
//   useEffect(() => {
//     const { data } = LeaderboardHook(currentPage);
//     if (data) {
//       console.log(data);
//       setPaginatedData(data);
      
//       console.log(data);
//     }
//   }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSort = (column: keyof Participant) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('desc')
    }
  }
  useEffect(() => {
    fetch(`${Routes.LEADERBOARD}?pages=${currentPage}&username=${searchTerm}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        }
    }).then((response) => {
        response.json().then((data) => {
            console.log(data);
            setPaginatedData(data);
            setTotalPages(Math.ceil(data[0]['totalusers'] / 20))
        });
    });
  }, [currentPage,searchTerm]);
  return {
        paginatedData,
        sortColumn,
        sortDirection,
        searchTerm,
        currentPage,
        totalPages,
        itemsPerPage,
        handlePageChange,
        handleSort,  
        setSearchTerm      
  }
}