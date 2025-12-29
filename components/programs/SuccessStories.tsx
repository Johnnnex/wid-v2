import { Icon } from '@iconify/react';

const SuccessStories = () => {
	return (
		<section className='px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-20'>
			<div className='max-w-350 mx-auto'>
				<h2 className='text-black font-medium text-[2.5rem] tracking-[1.6px] text-center mb-10'>
					Success Stories
				</h2>
				<div className='grid grid-cols-4 gap-5'>
					{[
						{ url: '', text: `XYZ's Story` },
						{ url: '', text: `How WID changed everything` },
						{ url: '', text: `Life after Intro to DeFi 3.0` },
						{ url: '', text: `Building after Web3 Squad 3.0` },
					]?.map((item, index) => (
						<a
							href={item?.url}
							target='_blank'
							key={`__item__${index}`}
							className='aspect-[1.02] group flex flex-col rounded-t-[1.25rem] overflow-hidden'
						>
							<figure
								style={{
									backgroundImage: `url(/images/programs-img-${index + 1}.png)`,
								}}
								className='flex-1 bg-center bg-cover relative'
							>
								<Icon
									className='text-transparent group-hover:text-[#0A74EF] invisible group-hover:visible transition-all duration-[.4s] top-1/2 left-1/2 -translate-1/2 absolute'
									icon={'hugeicons:play-circle'}
									height={'5rem'}
									width={'5rem'}
								/>
							</figure>
							<p className='py-6 bg-white border border-[#0A74EF33] rounded-b-[1.25rem] text-[1rem] font-normal tracking-[.64px] text-black text-center'>
								{item?.text}
							</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export { SuccessStories };
