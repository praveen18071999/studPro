'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import CodeCompilerPage from '../components/codeComplierPage'


export default function ProblemPage() {

  const params = useParams()
  const id = params.id
  const router = useRouter();
    useEffect(() => {
      if (typeof window !== 'undefined') {
        if (localStorage.getItem('access_token') == null) {
          router.push('/authentication');
        }
      }
    }, [router]);
  //console.log(id)
  return (
    <div className="flex max-w-screen">
      <CodeCompilerPage id={id} />
    </div>
  )
}

