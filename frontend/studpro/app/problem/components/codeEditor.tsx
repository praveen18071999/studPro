'use client';
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import CodeMirror from '@uiw/react-codemirror'
import { CheckCircle, XCircle } from 'lucide-react'
import { CodeEditorProps } from '../problemTypes'

export function CodeEditor({
  selectedLanguage,
  languages,
  code,
  input,
  output,
  testCases,
  onLanguageChange,
  onCodeChange,
  onInputChange,
  onRunCode,
  onSubmit,
}: CodeEditorProps) {
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-end h-full pr-4">
  //     <div className="w-10 h-10 border-4 border-black-500 border-t-transparent border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
  //   </div>
  //   )
  // }
  // else {
    return (
      <div className="w-1/2 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <Select value={selectedLanguage.value} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="space-x-2">
            <Button onClick={onRunCode}>Run</Button>
            <Button onClick={onSubmit} variant="outline">Submit</Button>
          </div>
        </div>
        <CodeMirror
          value={code}
          height="300px"
          extensions={[selectedLanguage.extension()]}
          onChange={onCodeChange}
          className="border border-gray-300 mb-4"
        />
        <Textarea
          placeholder="Enter input here..."
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          className="mb-4"
        />
        <div className="flex-1 bg-gray-100 p-4 overflow-y-auto mb-4">
          <h3 className="text-lg font-semibold mb-2">Output:</h3>
          <pre>{output}</pre>
        </div>
        <div className="bg-gray-100 p-4">
          <h3 className="text-lg font-semibold mb-2">Test Cases:</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
            {testCases.map((testCase) => (
              <div key={testCase.id} className="flex items-center">
                <span className="mr-2">Test {testCase.id}:</span>
                {testCase.status === 'passed' ? (
                  <CheckCircle className="text-green-500" />
                ) : testCase.status === 'failed' ? (
                  <XCircle className="text-red-500" />
                ) : (
                  <span className="text-gray-500">Pending</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
 // }
}

