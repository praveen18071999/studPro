import { useState } from 'react'

export function useCreateProblem() {
  const [problemType, setProblemType] = useState('upload')
  const [tags, setTags] = useState('')
  const [difficultyLevel, setDifficultyLevel] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { problemType, tags, difficultyLevel })
  }

  return {
    problemType,
    setProblemType,
    tags,
    setTags,
    difficultyLevel,
    setDifficultyLevel,
    handleSubmit
  }
}

