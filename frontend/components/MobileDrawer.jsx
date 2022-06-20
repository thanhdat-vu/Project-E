import { useState } from 'react';
import {
	BsList,
	BsX,
	BsChevronRight,
	BsChevronLeft,
	BsEnvelope,
} from 'react-icons/bs';
import Link from 'next/link';

export default function MobileDrawer({ collections }) {
	const [showDrawer, setShowDrawer] = useState(false);
	const [showSubDrawer, setSubDrawer] = useState(false);

	const handleClick = () => {
		setSubDrawer(false);
		setShowDrawer(false);
	};

	return (
		<div className='lg:hidden ml-1 mr-2 relative'>
			{/* Hamburger Menu Button */}
			{!showDrawer ? (
				<button onClick={() => setShowDrawer(true)}>
					<BsList size='28px' />
				</button>
			) : (
				<>
					<button onClick={() => handleClick()}>
						<BsX size='28px' />
					</button>
					{/* Collections Menu */}
					<div className='absolute top-14 -left-5 sm:-left-7 w-screen z-10 p-8 bg-white space-y-6'>
						{collections.map((collection) =>
							collection.subCollections ? (
								<button
									className='w-full flex items-center'
									onClick={() =>
										setSubDrawer({
											collection,
											subCollections: collection.subCollections,
										})
									}
								>
									{collection.label}
									<BsChevronRight className='text-xs ml-auto' />
								</button>
							) : (
								<Link href={`/collections/${collection.slug.current}`}>
									<a className='block' onClick={() => handleClick()}>
										{collection.label}
									</a>
								</Link>
							)
						)}
						<hr className='-mx-8' />
						<p className='font-semibold'>NEED HELP?</p>
						<div className='flex items-center'>
							<BsEnvelope size='24px' />
							<p className='ml-4'>info@headphones.com</p>
						</div>
						{/* Sub Collections Menu */}
						{showSubDrawer && (
							<div className='absolute -top-6 left-0 w-screen min-h-full z-10 p-8 bg-white space-y-6'>
								<button
									className='flex items-center'
									onClick={() => setSubDrawer(false)}
								>
									<BsChevronLeft className='text-xs mr-2' />
									Back
								</button>
								<hr className='-mx-8' />
								<Link
									href={`/collections/${showSubDrawer.collection.slug.current}`}
								>
									<a
										className='block font-semibold'
										onClick={() => handleClick()}
									>
										{showSubDrawer.collection.label}
									</a>
								</Link>
								{showSubDrawer.subCollections.map((subCollection) => (
									<Link href={`/collections/${subCollection.slug.current}`}>
										<a
											className='flex items-center'
											onClick={() => handleClick()}
										>
											{subCollection.label}
										</a>
									</Link>
								))}
								<Link
									href={`/collections/${showSubDrawer.collection.slug.current}`}
								>
									<a
										className='flex items-center'
										onClick={() => handleClick()}
									>
										Shop All
									</a>
								</Link>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}