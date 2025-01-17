'use client';
import { useState, useEffect } from "react";
import Routes from '../../../routes'
interface Problem {
    problemid: number
    problemtitle: string
    problemlevel: string
    totalmarks: number
    authorname: string
  }

export function TableHook() {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState({
        link: '',
        level: '',
        marks: '',
        author: '',
      })

console.log(currentPage)
    useEffect(() => {
        fetch(`${Routes.TABLE}?page=${currentPage}&title=${filters.link}&level=${filters.level}&marks=${filters.marks}&author=${filters.author}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then((response) => {
            response.json().then((data) => {
                if(data.message == 'Unauthorized' && data.statusCode == 401){
                    localStorage.removeItem('access_token');
                    window.location.href = '/authentication';
                }
                console.log(data);
                setFilteredProblems(data);
                setTotalPages(data.length?Math.ceil(data[0]['countallproblems']/10):0);
            });
        });
    }, [currentPage,filters]);


  return {
    currentPage,
    setCurrentPage,
    filteredProblems,
    totalPages,
    filters,
    setFilters,
  };
}