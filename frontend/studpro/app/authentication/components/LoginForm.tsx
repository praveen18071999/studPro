'use client'

import { useForm } from "../hooks/useForm"
import { useAuth } from "../hooks/useAuth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const { values, handleChange } = useForm({ email: '', password: '' })
  const { error, handleLogin } = useAuth()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin(values.email, values.password)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" className="w-full">Log in</Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </form>
  )
}

