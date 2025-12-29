'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { poppins } from '@/app/layout';
import { Icon } from '@iconify/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
	disableLoader?: boolean; // This option was added due to the fact that sometimes one may not want a loader, just disabled button (rare but needed)
}

const Button = ({
	children,
	className,
	loading,
	disableLoader,
	theme = 'primary',
	variant = 'contained',
	...props
}: ButtonProps) => {
	return (
		<button
			disabled={loading || props?.disabled}
			className={cn(
				'rounded-[2.5rem] p-[1rem_1.5rem] text-[1rem] flex gap-2 items-center text-nowrap cursor-pointer',
				variant === 'outlined'
					? 'border text-[#0A74EF] border-[#0A74EF]'
					: theme === 'primary'
					? 'bg-[#0A74EF] text-white'
					: 'bg-white text-[#0A74EF]',
				poppins?.className,
				className
			)}
			{...props}
		>
			{children}
			{((loading && !disableLoader) || (props?.icon && !loading)) && (
				<Icon
					height={props?.icon?.height || undefined}
					width={props?.icon?.width || undefined}
					icon={props?.icon?.url || 'svg-spinners:ring-resize'}
					color='inherit'
				/>
			)}
		</button>
	);
};

export { Button };
