const navigation = [
	{name: 'Toate produsele', href: '/'},
	{ name: 'Tricouri', href: '/categories/Tricou' },
	{ name: 'Hanorace', href: '/categories/Hanorac' },
	{ name: 'Bluze', href: '/categories/Bluza' },
	{ name: 'Blugi', href: '/categories/Blugi' },
	{ name: 'Pantaloni', href: '/categories/Pantaloni' },
	{ name: 'Camasi', href: '/categories/Camasa' },
];

const Navbar = () => {

	const renderMenuItems=()=>{
		return navigation?.map((item) => (
			<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
				{item.name}
			</a>
		))
	}

	return (
		<>
			<header className="bg-white mt-2 flex justify-end">
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 pt-1.5" aria-label="Global">
					<div className="hidden lg:flex lg:gap-x-12">
						{renderMenuItems()}
					</div>
				</nav>
			</header>
		</>
	)
};

export default Navbar;