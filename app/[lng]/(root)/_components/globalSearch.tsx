import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Search } from 'lucide-react'

function GlobalSearch() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' className='space-x-2'>
					<Search />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<Logo />
				</SheetHeader>
				<hr className='mt-2' />
				<div className='mt-2'>
					<Input placeholder='Search to lessons !' />
				</div>
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default GlobalSearch
