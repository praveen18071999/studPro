import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCreateProblem } from '../hooks/useCreateProblem'

export function CreateProblemCard() {
  const {
    problemType,
    setProblemType,
    tags,
    setTags,
    difficultyLevel,
    setDifficultyLevel,
    handleSubmit
  } = useCreateProblem()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Problem Card</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            placeholder="Tags (comma-separated)" 
            value={tags} 
            onChange={(e) => setTags(e.target.value)}
          />
          <Input 
            placeholder="Difficulty Level" 
            value={difficultyLevel} 
            onChange={(e) => setDifficultyLevel(e.target.value)}
          />
          
          <RadioGroup value={problemType} onValueChange={setProblemType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upload" id="upload" />
              <Label htmlFor="upload">File Upload</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="link" id="link" />
              <Label htmlFor="link">Problem Link</Label>
            </div>
          </RadioGroup>
          
          {problemType === 'upload' ? (
            <Input type="file" />
          ) : (
            <Input placeholder="Paste problem link" />
          )}
          
          <div>
            <Label htmlFor="input-file">Input File Upload</Label>
            <Input id="input-file" type="file" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="output-file">Output File Upload</Label>
            <Input id="output-file" type="file" className="mt-1" />
          </div>
          <Button type="submit">Create Problem</Button>
        </form>
      </CardContent>
    </Card>
  )
}

