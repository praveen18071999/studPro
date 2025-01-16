'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from 'lucide-react'

interface SpeechButtonProps {
  text: string
  lang: string
}

export function SpeechButton({ text, lang }: SpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null)

  useEffect(() => {
    setSpeechSynthesis(window.speechSynthesis)
  }, [])

  const speak = () => {
    if (speechSynthesis) {
      if (isSpeaking) {
        speechSynthesis.cancel()
        setIsSpeaking(false)
      } else {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = lang
        utterance.onend = () => setIsSpeaking(false)
        speechSynthesis.speak(utterance)
        setIsSpeaking(true)
      }
    }
  }

  return (
    <Button
      onClick={speak}
      variant="outline"
      size="icon"
      aria-label={isSpeaking ? "Stop speaking" : "Start speaking"}
    >
      {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
    </Button>
  )
}

