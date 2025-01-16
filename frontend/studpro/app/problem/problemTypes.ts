import { Extension } from '@codemirror/state'

export interface Language {
  name: string
  value: string
  extension: () => Extension
}

export interface QuestionLanguage {
  name: string
  value: string
}

export interface TestCase {
  id: number
  status: 'pending' | 'passed' | 'failed'
}

export interface CodeEditorProps {
  selectedLanguage: Language
  languages: Language[]
  code: string
  input: string
  output: string
  testCases: { id: number; status: string }[]
  onLanguageChange: (value: string) => void
  onCodeChange: (value: string) => void
  onInputChange: (value: string) => void
  onRunCode: () => void
  onSubmit: () => void
}
