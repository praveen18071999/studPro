import { useState, ChangeEvent } from 'react'

type FormValues = Record<string, string>

export function useForm<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return { values, handleChange, resetForm }
}

