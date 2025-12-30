'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { inter } from '../layout';
import { CTA } from '@/components/common';

const Team = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<section className='pt-39 bg-white'>
				<section className='px-20 bg-[url(/images/texture-bg-fullx2.png)] bg-center bg-cover py-30'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-[2.5rem] font-semibold text-center mb-3'>
							Meet the Team
						</h1>
						<p className='text-black text-[1rem] font-normal leading-8! text-center max-w-271.75 mx-auto mb-10'>
							Meet the people who turn our initiatives into impact. These are the
							committed builders and strategists working daily to provide the
							education, mentorship, and support that empowers women to thrive in the
							decentralized finance space.
						</p>

						<div className='flex gap-5 bg-[#FAF9FF] mx-auto w-fit rounded-[2.5rem] border border-[#0A74EF33] p-5'>
							{['Leadership Team', 'Support Team']?.map((buttonText, index) => (
								<button
									key={`__button__${index}`}
									onClick={() => setActiveTab(index)}
									className={cn(
										'px-12 transition-all w-85.5 py-3.75 font-normal text-[1rem] duration-[.4s] rounded-[2.5rem]',
										index === activeTab
											? 'bg-[#0A74EF] text-white'
											: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]'
									)}
								>
									{buttonText}
								</button>
							))}
						</div>

						{/* Leadership Team */}
						<div
							className={cn(
								'py-10 grid grid-cols-3 gap-10 transition-opacity duration-300',
								activeTab === 0 ? 'opacity-100' : 'opacity-0 hidden'
							)}
						>
							{[
								{ name: 'Sarah Idahosa', title: 'Founder' },
								{ name: 'Onone Peace Ega', title: 'Programs Lead' },
								{ name: 'Angela Obiesie', title: 'Community Lead' },
								{ name: 'Francis Rachael Biabelemoye', title: 'Partnership Manager' },
								{ name: 'Progress Ochuko Eyaadah', title: 'DevRel Lead' },
								{ name: 'Victory Adewojo', title: 'Integration Specialist' },
								{ name: 'Ogechi Welechi', title: 'Marketing & PR Lead' },
								{ name: 'Tega Claire Agbadagri', title: 'Content Lead' },
								{ name: 'Owuo Ofure Blessing', title: 'Designer' },
							]?.map((item, index, array) => (
								<div
									key={`__item__${index}`}
									className={cn(
										'aspect-25/33 flex flex-col rounded-t-[1.25rem] overflow-hidden',
										array.length % 3 === 1 && index === array.length - 1 && 'col-start-2'
									)}
								>
									<figure
										style={{ backgroundImage: `url(/images/team-img-${index + 1}.png)` }}
										className='flex-1 bg-cover'
									></figure>
									<div className='p-5 bg-white border border-[#0A74EF80] rounded-b-[1.25rem]'>
										<h6 className='text-black text-[1rem] font-medium leading-8!'>
											{item?.name}
										</h6>
										<p
											className={cn(
												inter?.className,
												'text-[1rem] font-normal leading-8! text-black'
											)}
										>
											{item?.title}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Support Team */}
						<div
							className={cn(
								'py-10 grid grid-cols-3 gap-10 transition-opacity duration-300',
								activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden'
							)}
						>
							{[
								{ name: 'Mary Sule', title: 'Programs Associate' },
								{ name: 'Aishat Inioluwa Abdullahi', title: 'Programs Associate' },
								{ name: 'Ayo Ibrahim', title: 'Community Associate' },
								{ name: 'Yunusa Oluwatoliloba', title: 'Community Associate' },
								{ name: 'Praise Abisiyuwa', title: 'Associate Partnership Manager' },
								{
									name: 'Owolawi Boluwotife Mercy',
									title: 'Marketing and PR Associate',
								},
								{ name: 'Ayomide Akinwale', title: 'Content Associate' },
								{ name: 'Ofili Ifeanyi Christabel', title: 'Partnership Support' },
								{ name: 'Victoria Adedayo', title: 'DevRel Support' },
								{ name: 'Orjimari Favour', title: 'DevRel Support' },
								{ name: 'Choice Gift Olowu', title: 'DevRel Support' },
								{ name: 'Stephanie Okudo', title: 'Content Support' },
								{ name: 'Lawal Simibat Olamide', title: 'Content Support' },
							]?.map((item, index, array) => (
								<div
									key={`__item__${index}`}
									className={cn(
										'aspect-25/33 flex flex-col rounded-t-[1.25rem] overflow-hidden',
										array.length % 3 === 1 && index === array.length - 1 && 'col-start-2'
									)}
								>
									<figure
										style={{ backgroundImage: `url(/images/team-img-${index + 10}.png)` }}
										className='flex-1 bg-cover'
									/>
									<div className='p-5 bg-white border border-[#0A74EF80] rounded-b-[1.25rem]'>
										<h6 className='text-black text-[1rem] font-medium leading-8!'>
											{item?.name}
										</h6>
										<p
											className={cn(
												inter?.className,
												'text-[1rem] font-normal leading-8! text-black'
											)}
										>
											{item?.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</section>

			<CTA
				title='Tired of building alone?'
				content={`Success in Web3 shouldn't be solitary. Join Women in DeFi: a
					supportive community dedicated to seeing every woman succeed. Connect with
					builders, unlock exclusive resources, and collaboratively shape a more
					equitable industry future.`}
				cta={{
					text: 'Join the Sisterhood',
				}}
			/>
		</>
	);
};

export default Team;
