/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState, useEffect } from "react";
import Routes from '../../../routes'

export function authoredProblems() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState();
    const [easy, setEasy] = useState();
    const [medium, setMedium] = useState();
    const [hard, setHard] = useState();
    useEffect(() => {
        fetch(Routes.AUTHORED_PROBLEMS,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then((response) => {
            response.json().then((data) => {
                if(data.message == 'Unauthorized' && data.statusCode == 401){
                    localStorage.removeItem('access_token');
                    window.location.href = '/authentication';
                }
                setEasy(data[0]?.easy);
                setMedium(data[0]?.medium);
                setHard(data[0]?.hard);
                setData(data);
            });
        });
    }, []);
    return {
        easy,
        medium,
        hard,
        total: (easy ?? 0) + (medium ?? 0) + (hard ?? 0),
    }
}