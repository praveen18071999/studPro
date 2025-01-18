'use client'

import {  useState } from 'react'
import { useRouter } from 'next/navigation'
import { login, signup } from '../actions/auth'
import { useToast } from "@/hooks/use-toast"

export function useAuth() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login(email, password)
      if (result.success) {
        localStorage.setItem('access_token', result.accessToken)
        router.push('/dashboard')
      } else {
        toast({ title: 'UnSuccessfull', description: result.error })
        setError(result.error ?? 'An unknown error occurred')
      }
    } catch (err) {
        setError('An error occurred during login'+err)
      toast( {title:'UnSuccessfull',description:'An error occurred during login'})
    }
  }

  const handleSignup = async (email: string, password: string, name: string) => {
    try {
      const result = await signup(email, password, name)
      //console.log(result)
      if (result.success) {
        toast({ title: 'Successfull', description: 'Signup successful' })
        router.push('/authentication')
      } else {
        setError('Invalid credentials')
        toast({ title: 'UnSuccessfull', description: 'Error occurred during signup' })
      }
    } catch (err) {
      setError('An error occurred during signup'+err)
        toast( {title:'UnSuccessfull',description:'An error occurred during signup'})
    }
  }



  return { error, handleLogin, handleSignup }
}

