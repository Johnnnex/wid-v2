import { Button } from './Button';

const CTA = ({
	title,
	content,
	cta,
}: {
	title: string;
	content: string;
	cta: { text: string; onClick: () => void };
}) => {
	return (
		<section className='px-10 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-10'>
			<div className='max-w-350 mx-auto'>
				<h3 className='text-[2.5rem] text-white font-medium tracking-[1.6px] text-center'>
					{title}
				</h3>
				<p className='text-white max-w-232.25 mx-auto text-[1rem] font-normal mb-5 text-center'>
					{content}
				</p>
				<Button
					onClick={cta?.onClick}
					theme='secondary'
					className='mx-auto p-[1.25rem_2.5rem] w-fit block'
				>
					{cta?.text}
				</Button>
			</div>
		</section>
	);
};

export { CTA };
