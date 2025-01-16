import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileUpload(file)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="file-upload">Upload Question File</Label>
      <div className="flex items-center space-x-2">
        <Input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
          accept=".txt,.pdf,.doc,.docx"
        />
        <Button type="button" onClick={handleButtonClick}>Choose File</Button>
        <span className="text-sm text-gray-500">{fileName || 'No file chosen'}</span>
      </div>
    </div>
  )
}

