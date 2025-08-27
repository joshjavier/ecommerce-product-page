import IconMenu from '@/assets/images/icon-menu.svg'
import Logo from '@/assets/images/logo.svg'
import { ShoppingCart } from '@/feature/cart/shopping-cart'
import { Button } from '../ui/button'
import { UserAvatar } from '../user-avatar/user-avatar'

export function Header() {
  return (
    <header>
      <div className="mx-auto box-content max-w-[1110px] px-[23.75px] sm:px-1000">
        <div className="flex items-center justify-between pt-[19px] pb-300 sm:border-b sm:border-b-grey-100 sm:pt-7 sm:pb-400">
          {/* Left */}
          <div className="flex items-end gap-200">
            <Button
              variant="secondary"
              size="icon"
              aria-label="Menu"
              className="cursor-pointer rounded-none bg-transparent hover:bg-transparent"
            >
              <IconMenu aria-hidden="true" className="size-200" />
            </Button>
            <Logo className="h-5" aria-label="Sneakers logo" />
          </div>

          {/* Right */}
          <div className="flex items-center gap-300 sm:gap-600">
            <ShoppingCart />
            <UserAvatar />
          </div>
        </div>
      </div>
    </header>
  )
}
