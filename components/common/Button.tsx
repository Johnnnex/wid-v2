'use client';

import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { poppins } from '@/app/layout';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface BaseButtonProps {
	children: ReactNode;
	className?: string;
	variant?: 'outlined' | 'contained';
	theme?: 'primary' | 'secondary';
	icon?: {
		url?: string;
		height?: string;
		width?: string;
	};
	loading?: boolean;
	disableLoader?: boolean;
}

interface ButtonAsButton
	extends BaseButtonProps,
		Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
	url?: never;
	target?: never;
}

interface ButtonAsLink
	extends BaseButtonProps,
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
	url: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
}

type ButtonProps = (ButtonAsButton | ButtonAsLink) & { disabled?: boolean };

const Button = ({
	children,
	className,
	loading,
	disableLoader,
	theme = 'primary',
	variant = 'contained',
	url,
	target = '_blank',
	...props
}: ButtonProps) => {
	const baseStyles = cn(
		'rounded-[2.5rem] p-[1rem_1.5rem] text-center justify-center text-[1rem] flex gap-2 items-center text-nowrap cursor-pointer transition-colors duration-[.4s]',
		variant === 'outlined'
			? 'border text-[#0A74EF] border-[#0A74EF] hover:bg-[#0A74EF08] focus:bg-[#0A74EF12] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
			: theme === 'primary'
			? 'bg-[#0A74EF] text-white hover:bg-[#0862d4] focus:bg-[#0756bd] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0A74EF]'
			: 'bg-white text-[#0A74EF] hover:bg-[#f5f5f5] focus:bg-[#ebebeb] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white',
		poppins?.className,
		className
	);

	const content = (
		<>
			{children}
			{((loading && !disableLoader) ||
				((props as ButtonAsButton)?.icon && !loading)) && (
				<Icon
					height={(props as ButtonAsButton)?.icon?.height || undefined}
					width={(props as ButtonAsButton)?.icon?.width || undefined}
					icon={(props as ButtonAsButton)?.icon?.url || 'svg-spinners:ring-resize'}
					color='inherit'
				/>
			)}
		</>
	);

	// If url is provided, determine if it's external or internal
	if (url) {
		const isExternal =
			url.startsWith('http://') ||
			url.startsWith('https://') ||
			url.startsWith('mailto:') ||
			url.startsWith('tel:');

		if (isExternal) {
			// Render as anchor tag
			return (
				<a
					href={url}
					target={target}
					rel={target === '_blank' ? 'noopener noreferrer' : undefined}
					className={baseStyles}
					{...(props as Omit<
						AnchorHTMLAttributes<HTMLAnchorElement>,
						'href' | 'children'
					>)}
				>
					{content}
				</a>
			);
		}

		// Render as Next.js Link
		return (
			<Link
				href={url}
				target={target}
				rel={target === '_blank' ? 'noopener noreferrer' : undefined}
				className={baseStyles}
				{...(props as Omit<
					AnchorHTMLAttributes<HTMLAnchorElement>,
					'href' | 'children'
				>)}
			>
				{content}
			</Link>
		);
	}

	// Render as button
	return (
		<button
			disabled={loading || (props as ButtonAsButton)?.disabled}
			className={baseStyles}
			{...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>)}
		>
			{content}
		</button>
	);
};

export { Button };
