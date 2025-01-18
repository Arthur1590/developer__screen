import { Container } from '@/components/shared'
import { Telegram } from '@/components/shared/Icons'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations('Home')
	return (
		<section className='w-full'>
			<Container className='pb-[1rem]'>
				<figure className='flex flex-col gap-4 items-center justify-center w-full h-full relative bg-1 rounded-lg'>
					<article className='flex gap-4 flex-col items-center justify-center relative z-[999] min-h-[500px]'>
						<h1 className='text-[#fff] text-center text-3xl md:text-4xl'>
							{t('vip')}
						</h1>
						<span className='w-full min-h-[1px] max-h-[1px] bg-gray-800'></span>
						<h3 className='text-[#fff] text-center text-lg md:text-xl max-w-[60%]'>
							{t('forthem')}
						</h3>

						<a href="https://t.me/elysianescorts" target="_blank" rel="noopener noreferrer">
						<Button variant={'default'} className='mt-4 bg-[#26A5E4]'>
							{t('deal')} <Telegram />
						</Button>
						</a>
					</article>
				</figure>
			</Container>
		</section>
	)
}
