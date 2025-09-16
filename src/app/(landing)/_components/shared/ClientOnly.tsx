"use client"
import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const ClientOnly: React.FC<Props> = ({ children, fallback = null }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <>{fallback}</>
  return <>{children}</>
}

export default ClientOnly
