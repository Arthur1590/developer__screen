'use client'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Hover, MotionDiv } from '@/components/ui/Motion'
import Image from 'next/image'
export default function Home() {
	const t = useTranslations('Home')

	return (
		<section className='w-full'>
			<Container className='pb-[1rem]'>
				<MotionDiv className='w-full'>
					<figure className='flex flex-col gap-4 items-center justify-center w-full h-full relative'>
						<Image
							width={1920}
							height={1080}
							src='/girl.jpg'
							alt='girl'
							className='absolute top-0 left-[50%] translate-x-[-50%] w-full h-full object-cover max-w-[44%]  brightness-50'
						/>
						<article className='flex gap-4 flex-col items-center justify-center z-[999] min-h-[500px] rounded-lg'>
							<h1 className='text-[#fff] font-medium text-center text-3xl md:text-4xl'>
								{t('vip')}
							</h1>
							<span className='max-w-[35%] sm:max-w-[50%] w-full min-h-[1px] max-h-[1px] bg-gray-800'></span>
							<h3 className='text-[#fff] font-medium text-center text-lg md:text-xl max-w-[60%]'>
								{t('forthem')}
							</h3>

							<Hover className='mt-[4rem]'>
								<a
									href='https://t.me/elysianescorts'
									target='_blank'
									rel='noopener noreferrer'
									className='w-fit h-fit '
								>
									<Button
										variant={'default'}
										className=' bg-[#26A5E4] text-medium xl:text-[32px] text-[#fff] py-[1.5rem]'
									>
										{t('deal')}{' '}
										<Send
											strokeWidth={2}
											className='min-h-[25px] min-w-[25px]'
										/>
									</Button>
								</a>
							</Hover>
						</article>
					</figure>
				</MotionDiv>
			</Container>
		</section>
	)
}
