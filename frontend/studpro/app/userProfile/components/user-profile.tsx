'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserProfile } from "../hooks/use-user-profile"

export function UserProfile() {
  const { user, isEditing, handleUserEdit, handleUserSave,setUser } = useUserProfile()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          User Profile
          <Button onClick={isEditing ? handleUserSave : handleUserEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              value={user?.name || ''}
              onChange={(e) => setUser({ ...user, name: e.target.value, email: user?.email || '', phoneNumber: user?.phoneNumber || '' })}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              value={user?.email || ''}
              onChange={(e) => setUser({ ...user, email: e.target.value, name: user?.name || '', phoneNumber: user?.phoneNumber || '' })}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              id="phone"
              value={user?.phoneNumber || ''}
              onChange={(e) => setUser({ ...user, phoneNumber: e.target.value, name: user?.name || '', email: user?.email || '' })}
              disabled={!isEditing}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

