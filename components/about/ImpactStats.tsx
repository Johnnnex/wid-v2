import { cn } from '@/lib/utils';

const ImpactStats = () => {
	return (
		<section className='px-20 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-14.5'>
			<div className='max-w-350 items-center mx-auto gap-15.25 flex'>
				<h4 className='text-white text-[2.25rem] font-semibold w-33.25'>
					Our Impact
				</h4>
				<div className='w-0.5 h-48.25 bg-white' />
				<div className='flex flex-1 justify-between items-center'>
					{[
						{ number: 8, suffix: 'k+', content: 'Community Members' },
						{ number: 16, suffix: '+', content: 'Chapters across Africa' },
						{ number: 1, suffix: 'M+', content: 'Online Impressions' },
						{ number: 4, suffix: 'k+', content: 'Program Beneficiaries' },
						{ number: 4, suffix: '+', content: 'Physical Events' },
					]?.map(({ number, suffix, content }, index) => (
						<div
							key={`__item__${index}`}
							className='flex flex-col items-center gap-2'
						>
							<h5 className='text-white font-bold text-[2.5rem]'>
								{number}
								{suffix}
							</h5>
							<p
								className={cn(
									`text-white font-medium text-[1.5rem] text-center`,
									index === 4 ? 'w-40' : 'w-50.75'
								)}
							>
								{content}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { ImpactStats };
