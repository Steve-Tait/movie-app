import Link from 'next/link';

export default function PaginationButton({ isDisabled, href, children }:
    { isDisabled: boolean, href: string, children: React.ReactNode }) {
    const classes = "p-2 rounded text-white border-2 border-blue-500 bg-blue-500 duration-200 hover:bg-blue-900";

    return (
        <Link
            className={isDisabled ? `pointer-events-none opacity-50 ${classes}` : classes}
            href={href}>{children}</Link >
    )
}
