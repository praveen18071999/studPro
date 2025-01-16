'use client'

import React from 'react'
import { QuestionPanel } from './QuestionPanel'
import { CodeEditor } from './codeEditor'
import { useCodeCompiler } from '../problemHook'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CodeCompilerPage(id: any) {
 //console.log(id)
  const {
    selectedLanguage,
    selectedQuestionLanguage,
    languages,
    questionLanguages,
    questionData,
    code,
    input,
    output,
    testCases,
    handleLanguageChange,
    handleQuestionLanguageChange,
    handleRunCode,
    handleSubmit,
    setCode,
    setInput,
  } = useCodeCompiler(id.id)

  //console.log(questionData)
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <QuestionPanel
        questionLanguages={questionLanguages}
        selectedQuestionLanguage={selectedQuestionLanguage}
        questionData={questionData}
        onQuestionLanguageChange={handleQuestionLanguageChange}
      />
      <CodeEditor
        selectedLanguage={selectedLanguage}
        languages={languages}
        code={code}
        input={input}
        output={output}
        testCases={testCases}
        onLanguageChange={handleLanguageChange}
        onCodeChange={setCode}
        onInputChange={setInput}
        onRunCode={handleRunCode}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

