import nameInitials from 'name-initials'
import IconCart from '@/assets/images/icon-cart.svg'
import IconMenu from '@/assets/images/icon-menu.svg'
import Logo from '@/assets/images/logo.svg'
import { getCurrentUser } from '@/lib/data'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

export function Header() {
  const user = getCurrentUser()
  return (
    <header className="w-full px-[23.75px] pt-[19px] pb-300">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-end gap-200">
          <Button
            variant="secondary"
            size="icon"
            aria-label="Menu"
            className="cursor-pointer rounded-none"
          >
            <IconMenu aria-hidden="true" className="size-200" />
          </Button>
          <Logo className="h-5" aria-label="Sneakers logo" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-300">
          <Button
            variant="secondary"
            size="icon"
            aria-label="Shopping cart"
            className="size-[22px] cursor-pointer rounded-none text-grey-500 hover:text-grey-950 aria-pressed:text-grey-950"
          >
            <IconCart aria-hidden="true" className="size-[22px]" />
          </Button>
          <Avatar asChild>
            <Button
              variant="secondary"
              size="icon"
              className="size-300 cursor-pointer"
            >
              <AvatarImage src={user.image} alt="" />
              <AvatarFallback>{nameInitials(user.name)}</AvatarFallback>
            </Button>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
