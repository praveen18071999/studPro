/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState, useEffect } from "react";
import Routes from '../../../routes'

export function authoredProblems() {
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
                //setData(data);
            });
        }).catch((error) => {console.log(error)});
    }, []);
    return {
        easy,
        medium,
        hard,
        total: (easy ?? 0) + (medium ?? 0) + (hard ?? 0),
    }
}