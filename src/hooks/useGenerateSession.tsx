import { useContext } from 'react'

import { GenerateSessionContext } from '../contexts/GenerateSessionProvider'

export function useGenerateSession() {
  const context = useContext(GenerateSessionContext)

  return context
}