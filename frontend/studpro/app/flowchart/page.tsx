/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useRouter } from 'next/navigation';
import MultiLanguageCodeEditor from "./component/codeEditor";
import { useEffect } from 'react';


export default function flowChart(){
    const router = useRouter();
      useEffect(() => {
        if (typeof window !== 'undefined') {
          if (localStorage.getItem('access_token') == null) {
            router.push('/authentication');
          }
        }
      }, [router]);
    return(
        <div>
            <MultiLanguageCodeEditor/>
        </div>
    )
}