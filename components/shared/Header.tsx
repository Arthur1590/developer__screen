import React from 'react'
import { ThemeSwitch } from '../ui/ThemeSwitch'
import { Navbar } from './Navbar'
import { Container } from './Container'
import { LangSwitch } from '../ui/LangSwitch'

export const Header = () => {
	return (
		<Container>
			<header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 py-[1rem] px-8 rounded-b-lg'>
				<div className='flex items-center justify-between'>
					<h1 className='text-primary'>Elysian Escorts</h1>
					<Navbar className='hidden sm:flex items-center gap-4' />
					<div className='flex items-center gap-4'>
						<ThemeSwitch />
						<LangSwitch />
					</div>
				</div>
			</header>
		</Container>
	)
}
