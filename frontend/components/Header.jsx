import Link from 'next/link';
import Logo from '../assets/Headphones.com_Logo_March_6th_2020_235x@2x.webp';
// ref: https://react-icons.github.io/react-icons/
import {
	BsList,
	BsChevronDown,
	BsSearch,
	BsPerson,
	BsCart2,
} from 'react-icons/bs';

export default function Header() {
	return (
		<div className='p-4 sm:p-8 flex items-center'>
			{/* Hambuger Menu */}
			<div className='lg:hidden mr-2'>
				<BsList size='28px' />
			</div>

			{/* Logo */}
			<Link href='/'>
				<img src={Logo.src} className='h-12 md:h-16 cursor-pointer' />
			</Link>

			{/* Search and Filters */}
			<div className='grow sm:ml-8 rounded-sm overflow-hidden flex'>
				<input
					type='text'
					placeholder='Search...'
					className='grow px-4 hidden sm:block'
				/>
				<div className='hidden items-center bg-white px-6 border-l border-sky-200 lg:flex'>
					<p>All categories</p>
					<div className='ml-2'>
						<BsChevronDown />
					</div>
				</div>
				<div className='p-3 sm:text-white sm:bg-sky-400 ml-auto'>
					<BsSearch size='24px' />
				</div>
			</div>

			{/* Authentication */}
			<div>
				<div className='hidden lg:block px-8 border-r border-gray-200'>
					<p className='text-sky-400'>Login/Signup</p>
					<div className='flex items-center'>
						<p className='font-semibold'>My account</p>
						<div className='ml-2'>
							<BsChevronDown />
						</div>
					</div>	
				</div>

				<div className='lg:hidden ml-2 sm:ml-8'>
					<BsPerson size='28px' />
				</div>
			</div>

			{/* Cart */}
			<div className='relative'>
				<div className='ml-4 lg:ml-8 cursor-pointer flex items-center'>
					<div className='mr-4 relative'>
						<BsCart2 size='28px' />
						<div className='absolute -top-1 -right-2 w-5 h-5 text-xs text-white text-center font-bold leading-none bg-sky-400 p-1 rounded-full hover:scale-125'>
							0
						</div>
					</div>
					<p className='hidden lg:block font-semibold'>Cart</p>
				</div>
			</div>

			{/* End */}
		</div>
	);
}