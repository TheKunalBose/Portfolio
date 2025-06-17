'use client'

import dynamic from 'next/dynamic'

// Dynamic import with SSR disabled
const PinContainerOriginal = dynamic(
  () => import('./3d-pin').then(mod => ({ default: mod.PinContainer })),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[20rem] w-96 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
    )
  }
)

const PinPerspectiveOriginal = dynamic(
  () => import('./3d-pin').then(mod => ({ default: mod.PinPerspective })),
  { 
    ssr: false,
    loading: () => (
      <div className="h-80 w-96 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
    )
  }
)

// Export the wrapped components
export const PinContainer = PinContainerOriginal
export const PinPerspective = PinPerspectiveOriginal