import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface AddTestCaseFormProps {
  onAdd: (type: 'base' | 'actual', input: string, output: string, explanation?: string) => void
  baseTestCasesCount: number
  actualTestCasesCount: number
}

export function AddTestCaseForm({ onAdd, baseTestCasesCount, actualTestCasesCount }: AddTestCaseFormProps) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [explanation, setExplanation] = useState('')
  const [type, setType] = useState<'base' | 'actual'>('base')

  const handleAddTestCase = () => {
    if (input && output && (type === 'actual' || (type === 'base' && explanation))) {
      onAdd(type, input, output, explanation)
      setInput('')
      setOutput('')
      setExplanation('')
    }
  }

  const isBaseDisabled = baseTestCasesCount >= 3
  const isActualDisabled = actualTestCasesCount >= 10

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="input">Input</Label>
        <Textarea id="input" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Input'></Textarea>
        
      </div>
      <div className="space-y-2">
        <Label htmlFor="output">Output</Label>
        <Textarea id="output" value={output} onChange={(e)=>setOutput(e.target.value)} placeholder='Enter Output'></Textarea>
       
      </div>
      <RadioGroup value={type} onValueChange={(value) => setType(value as 'base' | 'actual')}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="base" id="base" disabled={isBaseDisabled} />
          <Label htmlFor="base">Base Test Case</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="actual" id="actual" disabled={isActualDisabled} />
          <Label htmlFor="actual">Actual Test Case</Label>
        </div>
      </RadioGroup>
      {type === 'base' && (
        <div className="space-y-2">
          <Label htmlFor="explanation">Explanation</Label>
          <Textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Enter explanation for base test case"
          />
        </div>
      )}
      <Button onClick={handleAddTestCase} disabled={(isBaseDisabled && isActualDisabled) || (type === 'base' && !explanation)}>
        Add Test Case
      </Button>
    </div>
  )
}

