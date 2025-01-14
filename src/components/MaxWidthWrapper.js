import { cn } from '@/lib/utils'
import React from 'react'

const MaxWidthWrapper = ({children,className}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl',className)}>
{children}

    </div>
  )
}

export default MaxWidthWrapper