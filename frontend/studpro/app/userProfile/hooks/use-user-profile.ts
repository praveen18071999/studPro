/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import Routes from '@/routes'

type User = {
  name: string
  email: string
  phoneNumber: string
}




export function useUserProfile() {
  const [user, setUser] = useState<User>()
  const [isEditing, setIsEditing] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetch(Routes.GET_USER, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        if (data.message == 'Unauthorized' && data.statusCode == 401) {
          localStorage.removeItem('access_token')
          window.location.href = '/authentication'
        }
        const user={
          name: data[0].name,
          email: data[0].email,
          phoneNumber: data[0].phoneNumber
        }
        setUser(user)
        
        //setUser(data)
      })
    })
  }, [])

  const handleUserEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleUserSave = () => {
    fetch(Routes.UPDATE_USER, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(user),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.message == 'Unauthorized' && data.statusCode == 401) {
          localStorage.removeItem('access_token')
          window.location.href = '/authentication'
        }
        else if(data.statusCode == 500){
          toast({
            title: 'Error',
        description: 'User with Email already exists',
                  variant: 'destructive',
                })
                }
          else{

    setIsEditing(false)
            toast({
              title: 'Success',
              description: 'Updated user successfully!',
            })
        }
        
      })
    }).catch((error) => {
      toast({
        title: 'Error',
        description: 'Failed to update user',
        variant: 'destructive',
      })
    })
    // Here you would typically save the user data to a backend
    console.log('Saving user data:', user)
  }

  return {
    user,
    isEditing,
    setUser,
    handleUserEdit,
    handleUserSave,
  }
}

