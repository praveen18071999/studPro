import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TestCase {
  id: string
  input: string
  output: string
  explanation?: string
}

interface TestCaseListProps {
  testCases: TestCase[]
  onRemove: (id: string) => void
  type: 'base' | 'actual'
}

export function TestCaseList({ testCases, onRemove, type }: TestCaseListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{type === 'base' ? 'Base' : 'Actual'} Test Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {testCases.map((testCase) => (
              <Card key={testCase.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p><strong>Input:</strong> {testCase.input}</p>
                      <p><strong>Output:</strong> {testCase.output}</p>
                      {type === 'base' && testCase.explanation && (
                        <p><strong>Explanation:</strong> {testCase.explanation}</p>
                      )}
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => onRemove(testCase.id)}>Remove</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

