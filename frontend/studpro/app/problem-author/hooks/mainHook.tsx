import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import Routes from '../../../routes'
interface TestCase {
    id: string
    input: string
    output: string
    explanation?: string
}
type ProblemLevel = 'Easy' | 'Medium' | 'Hard'
export function useProblemAuthor() {
    const [baseTestCases, setBaseTestCases] = useState<TestCase[]>([])
    const [actualTestCases, setActualTestCases] = useState<TestCase[]>([])
    const [questionSource, setQuestionSource] = useState<'file' | 'link'>('file')
    const [questionFile, setQuestionFile] = useState<File | null>(null)
    const [questionLink, setQuestionLink] = useState('')
    const [problemTitle, setProblemTitle] = useState('')
    const [totalMarks, setTotalMarks] = useState('')
    const [problemLevel, setProblemLevel] = useState<ProblemLevel>('Easy')
    const [isFormValid, setIsFormValid] = useState(false)
    const { toast } = useToast()

    const validateProblem = (): boolean => {
        if (!problemTitle.trim()) {
            return false
        }

        if (questionSource === 'file' && !questionFile) {
            return false
        }

        if (questionSource === 'link' && !questionLink) {
            return false
        }

        if (baseTestCases.length < 3) {
            return false
        }

        if (actualTestCases.length === 0) {
            return false
        }

        if (!totalMarks || isNaN(Number(totalMarks)) || Number(totalMarks) <= 0) {
            return false
        }

        return true
    }

    useEffect(() => {
        setIsFormValid(validateProblem())
    }, [problemTitle, questionSource, questionFile, questionLink, baseTestCases, actualTestCases, totalMarks, problemLevel])

    const handleSubmit = () => {
        if (isFormValid) {
            console.log('Form is valid')
            // Here you would typically send the data to your backend
            const baseTestCaseInputs = baseTestCases.map((testCase) => {
                return testCase.input
            })
            const baseTestCasesOutputs = baseTestCases.map((testCase) => {
                return testCase.output
            })
            const actualTestCaseInputs = actualTestCases.map((testCase) => {
                return testCase.input
            })
            const actualTestCasesOutputs = actualTestCases.map((testCase) => {
                return testCase.output
            })
            const baseTestCasesExplanation = baseTestCases.map((testCase) => {
                return testCase.explanation
            })
            if (questionSource === 'file' && questionFile) {
                const formData = new FormData()
                formData.append('problemTitle', problemTitle)
                formData.append('questionSource', questionSource)
                formData.append('questionFile', questionFile)
                formData.append('questionLink', questionLink)
                formData.append('baseTestCaseInputs', JSON.stringify(baseTestCaseInputs))
                formData.append('baseTestCasesOutputs', JSON.stringify(baseTestCasesOutputs))
                formData.append('baseTestCasesExplanation', JSON.stringify(baseTestCasesExplanation))
                formData.append('actualTestCaseInputs', JSON.stringify(actualTestCaseInputs))
                formData.append('actualTestCasesOutputs', JSON.stringify(actualTestCasesOutputs))
                formData.append('totalMarks', totalMarks)
                formData.append('problemLevel', problemLevel)
                fetch(Routes.UPLOAD_FILE, {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` },
                    method: 'POST',
                    body: formData,
                }).then((response) => {
                    response.json().then((data) => { console.log(data) })
                    if (response.ok) {
                        toast({
                            title: 'Success',
                            description: 'Problem saved successfully!',
                        })
                    } else {
                        toast({
                            title: 'Error',
                            description: 'Failed to save problem',
                            variant: 'destructive',
                        })
                    }
                })
            }
            else {
                fetch(Routes.CREATE_PROBLEM, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    },
                    body: JSON.stringify({
                        problemTitle,
                        questionSource,
                        questionFile: questionFile?.name,
                        questionLink,
                        baseTestCaseInputs,
                        baseTestCasesOutputs,
                        baseTestCasesExplanation,
                        actualTestCaseInputs,
                        actualTestCasesOutputs,
                        totalMarks,
                        problemLevel
                    }),
                }).then((response) => {
                    response.json().then((data) => {
                        if (data.message == 'Unauthorized' && data.statusCode == 401) {
                            localStorage.removeItem('access_token');
                            window.location.href = '/authentication';
                        }
                    })
                    if (response.ok) {
                        toast({
                            title: 'Success',
                            description: 'Problem saved successfully!',
                        })
                    } else {
                        toast({
                            title: 'Error',
                            description: 'Failed to save problem',
                            variant: 'destructive',
                        })
                    }
                })
            }


        } else {
            toast({
                title: "Error",
                description: "Please fill in all required fields correctly.",
                variant: "destructive",
            })
        }
    }

    const handleFileUpload = (file: File) => {
        console.log('File uploaded:', file)
        console.log(1)
        //file.text().then((text) => {console.log(text)})
        setQuestionFile(file)

    }
    return {
        questionSource,
        questionFile,
        questionLink,
        problemTitle,
        totalMarks,
        problemLevel,
        isFormValid,
        handleSubmit,
        setQuestionSource,
        setQuestionLink,
        setProblemTitle,
        setTotalMarks,
        setProblemLevel,
        handleFileUpload,
        baseTestCases,
        setBaseTestCases,
        actualTestCases,
        setActualTestCases,
    }
}