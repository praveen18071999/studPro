'use client'

import { useRouter } from 'next/navigation'
import { useTestCases } from './hooks/useTestCases'
import { TestCaseList } from './components/TestCaseList'
import { AddTestCaseForm } from './components/AddTestCaseForm'
import { FileUpload } from './components/FileUpload'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useProblemAuthor } from './hooks/mainHook'
import { useEffect } from 'react'
type ProblemLevel = 'Easy' | 'Medium' | 'Hard'

export default function ProblemAuthorPage() {
    const router = useRouter();
      useEffect(() => {
        if (typeof window !== 'undefined') {
          if (localStorage.getItem('access_token') == null) {
            router.push('/authentication');
          }
        }
      }, [router]);
    const { baseTestCases, actualTestCases, addTestCase, removeTestCase } = useTestCases()
    const { questionSource,
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
        handleFileUpload,setBaseTestCases,setActualTestCases } = useProblemAuthor();
        useEffect(() => {
            setBaseTestCases(baseTestCases);
            setActualTestCases(actualTestCases);
        },[baseTestCases, actualTestCases])
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">Problem Author Page</h1>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Problem Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="problem-title">Title</Label>
                            <Input
                                id="problem-title"
                                value={problemTitle}
                                onChange={(e) => setProblemTitle(e.target.value)}
                                placeholder="Enter problem title"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Question Source</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <RadioGroup value={questionSource} onValueChange={(value) => setQuestionSource(value as 'file' | 'link')}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="file" id="file" />
                                <Label htmlFor="file">Upload File</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="link" id="link" />
                                <Label htmlFor="link">Paste Link</Label>
                            </div>
                        </RadioGroup>

                        {questionSource === 'file' ? (
                            <FileUpload onFileUpload={handleFileUpload} />
                        ) : (
                            <div className="space-y-2">
                                <Label htmlFor="question-link">Question Link</Label>
                                <Input
                                    id="question-link"
                                    value={questionLink}
                                    onChange={(e) => setQuestionLink(e.target.value)}
                                    placeholder="Enter question link"
                                    type="url"
                                />
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Problem Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="total-marks">Total Marks</Label>
                            <Input
                                id="total-marks"
                                value={totalMarks}
                                onChange={(e) => setTotalMarks(e.target.value)}
                                placeholder="Enter total marks"
                                type="number"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="problem-level">Problem Level</Label>
                            <Select value={problemLevel} onValueChange={(value) => setProblemLevel(value as ProblemLevel)}>
                                <SelectTrigger id="problem-level">
                                    <SelectValue placeholder="Select problem level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Easy">Easy</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Hard">Hard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Test Cases</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Add Test Case</h2>
                                <AddTestCaseForm
                                    onAdd={addTestCase}
                                    baseTestCasesCount={baseTestCases.length}
                                    actualTestCasesCount={actualTestCases.length}
                                />
                            </div>
                            <div className="space-y-8">
                                <TestCaseList
                                    testCases={baseTestCases}
                                    onRemove={(id) => removeTestCase('base', id)}
                                    type="base"
                                />
                                <TestCaseList
                                    testCases={actualTestCases}
                                    onRemove={(id) => removeTestCase('actual', id)}
                                    type="actual"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button onClick={handleSubmit} size="lg" disabled={!isFormValid}>
                        Save Problem
                    </Button>
                </div>
            </div>
        </div>
    )
}

