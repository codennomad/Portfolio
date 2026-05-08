"use client"

import { useEffect, useState } from "react"

interface TypedTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export function TypedText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[textIndex]

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timer)
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setTextIndex((i) => (i + 1) % texts.length)
        return
      }
      const timer = setTimeout(() => {
        setDisplayText((t) => t.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(timer)
    }

    if (displayText.length === currentText.length) {
      setIsPaused(true)
      return
    }

    const timer = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1))
    }, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, textIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <span className="cursor-blink inline-block w-0.5 h-[1em] bg-primary ml-0.5 align-middle" />
    </span>
  )
}
