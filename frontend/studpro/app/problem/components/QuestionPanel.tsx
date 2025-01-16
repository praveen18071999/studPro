'use client';
import React from 'react'
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { QuestionLanguage } from '../problemTypes'
import { SpeechButton } from './speechButton'

interface QuestionPanelProps {
  questionLanguages: QuestionLanguage[]
  selectedQuestionLanguage: QuestionLanguage
  questionData: Record<string, {
    title: string
    description: string
    examples: { input: string; output: string }[]
    marks: string,
    recievedMarks: string
  }>
  onQuestionLanguageChange: (value: string) => void
}

export function QuestionPanel({
  questionLanguages,
  selectedQuestionLanguage,
  questionData,
  onQuestionLanguageChange,
}: QuestionPanelProps) {
  //console.log(questionData)
  return (
    <div className="w-full md:w-1/2 p-4 bg-gray-100 overflow-y-auto">
      <Tabs defaultValue={selectedQuestionLanguage.value} onValueChange={onQuestionLanguageChange}>
        <div className="flex justify-between items-center mb-4">
          {/* <TabsList>
            {questionLanguages.map((lang) => (
              <TabsTrigger key={lang.value} value={lang.value}>
                {lang.name}
              </TabsTrigger>
            ))}
            <TabsTrigger value="english">English</TabsTrigger>
          </TabsList> */}
          <SpeechButton 
            text={`${questionData[selectedQuestionLanguage.value].title}. ${questionData[selectedQuestionLanguage.value].description}`} 
            lang={selectedQuestionLanguage.value === 'english' ? 'en-US' : selectedQuestionLanguage.value === 'telugu' ? 'te-IN' : 'hi-IN'}
          />
        </div>
        {questionLanguages.map((lang) => (
          <TabsContent key={lang.value} value={lang.value}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{questionData[lang.value].title}</h2>
              <span className="text-lg font-semibold">Marks: {questionData[lang.value].recievedMarks}/{questionData[lang.value].marks}</span>
            </div>
            <p className="text-lg mb-4 whitespace-pre-wrap">{questionData[lang.value].description}</p>
            <h3 className="text-xl font-semibold mb-2">Examples:</h3>
            {questionData[lang.value].examples.map((example, index) => (
              <div key={index} className="mb-2">
                <p className='whitespace-pre-wrap'><strong>Input:</strong><br/> {example.input}</p>
                <p className='whitespace-pre-wrap'><strong>Output:</strong><br/> {example.output}</p>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

