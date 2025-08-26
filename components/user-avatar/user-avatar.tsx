'use client'

import { useState } from 'react'
import nameInitials from 'name-initials'
import { getCurrentUser } from '@/lib/data'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function UserAvatar() {
  const user = getCurrentUser()
  const [pressed, setPressed] = useState(false)
  return (
    <Avatar
      asChild
      className="group size-300 cursor-pointer transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:size-[50px]"
    >
      <button onClick={() => setPressed(!pressed)} aria-pressed={pressed}>
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-aria-[pressed=true]:border-orange-500" />
        <AvatarImage src={user.image} alt="" />
        <AvatarFallback>{nameInitials(user.name)}</AvatarFallback>
      </button>
    </Avatar>
  )
}
