import { useState, useCallback } from 'react'

interface TestCase {
  id: string
  input: string
  output: string
  explanation?: string
}

export function useTestCases() {
  const [baseTestCases, setBaseTestCases] = useState<TestCase[]>([])
  const [actualTestCases, setActualTestCases] = useState<TestCase[]>([])

  const addTestCase = useCallback((type: 'base' | 'actual', input: string, output: string, explanation?: string) => {
    const newTestCase: TestCase = {
      id: Math.random().toString(36).substr(2, 9),
      input,
      output,
      ...(type === 'base' && explanation ? { explanation } : {})
    }

    if (type === 'base') {
      setBaseTestCases((prev) => [...prev, newTestCase])
    } else {
      setActualTestCases((prev) => [...prev, newTestCase])
    }
  }, [])

  const removeTestCase = useCallback((type: 'base' | 'actual', id: string) => {
    if (type === 'base') {
      setBaseTestCases((prev) => prev.filter((tc) => tc.id !== id))
    } else {
      setActualTestCases((prev) => prev.filter((tc) => tc.id !== id))
    }
  }, [])

  return {
    baseTestCases,
    actualTestCases,
    addTestCase,
    removeTestCase,
  }
}

