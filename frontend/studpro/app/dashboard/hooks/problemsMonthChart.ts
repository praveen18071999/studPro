/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState, useEffect } from "react";
import Routes from '../../../routes'

export function problemsMonthChart() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState();
    useEffect(() => {
        fetch(Routes.MONTHLY_SOLVED_PROBLEMS,{
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
               // console.log(data);
                setData(data);
            });
        });
    }, []);
    return {
        data,
        setData,
    }
}