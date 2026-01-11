import { inter } from '@/app/layout';
import { cn } from '@/lib/utils';

const UpcomingEvents = () => {
	return (
		<section className='px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-[5rem_21.25rem]'>
			<div className='max-w-350 mx-auto'>
				<h2 className='font-semibold text-center text-[2.5rem] mb-5'>
					Upcoming Events
				</h2>
				<p
					className={cn(
						inter?.className,
						'text-[1rem] font-normal text-center leading-8! mb-30'
					)}
				>
					Have a quick perusal of our catalogue of upcoming events, and join us.
				</p>
				<p className='text-[2.5rem] font-medium text-black text-center'>
					No upcoming Events at the moment
				</p>
			</div>
		</section>
	);
};

export { UpcomingEvents };
