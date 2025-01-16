'use client'
import { useRouter } from "next/navigation";
import { UserProfile } from "./components/user-profile"
import { ProblemsTable } from "./components/problems-table"
import { useEffect } from "react";

export default function EnhancedProfilePage() {
  const router = useRouter();
    useEffect(() => {
      if (typeof window !== 'undefined') {
        if (localStorage.getItem('access_token') == null) {
          router.push('/authentication');
        }
      }
    }, [router]);
  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserProfile />
      <ProblemsTable />
    </div>
  )
}

