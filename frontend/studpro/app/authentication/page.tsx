'use client'

import { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignupForm'
import { AuthLayout } from './components/AuthLayout'
import { Button } from '@/components/ui/button'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  if(!localStorage.getItem('theme')){
    localStorage.setItem('theme','light');
  }
  return (
    <AuthLayout title={isLogin ? 'Log in to your account' : 'Create a new account'}>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </Button>
      </div>
    </AuthLayout>
  )
}

