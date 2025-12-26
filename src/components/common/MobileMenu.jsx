import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../../utils/constants";
import Button from "../ui/Button";

const MobileMenu = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    if (!isOpen) return null;

    const isActive = (href) => {
        if (href === '/') return pathname === href;
        return pathname.startsWith(href);
    }

    return (
        <div className="fixed inset-0 z-[200] xl:hidden">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            {/* Menu Content */}
            <div className="fixed top-0 right-0 h-[100dvh] w-64 bg-[#0F2A44] shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col">
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <span className="text-xl font-bold text-white">Menu</span>
                    <button onClick={onClose} className="text-gray-300 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4 overflow-y-auto flex-1 pb-32">
                    {NAV_LINKS.map((link) => {
                        if (link.isButton) {
                            return (
                                <Button key={link.href} href={link.href} variant="primary" className="w-full text-center" onClick={onClose}>
                                    {link.label}
                                </Button>
                            );
                        }
                        if (link.children) {
                            const isParentActive = link.children.some(child => isActive(child.href));
                            return (
                                <div key={link.label} className="space-y-1">
                                    <div className={`text-sm font-semibold uppercase tracking-wider px-2 py-2 ${isParentActive ? "text-[#1E9E6A]" : "text-gray-400"}`}>
                                        {link.label}
                                    </div>
                                    <div className="space-y-1">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className={`block px-4 py-3 rounded-lg transition-all transform active:scale-98 ${isActive(child.href)
                                                    ? "bg-[#1E9E6A] text-white font-bold shadow-md"
                                                    : "bg-[#163A5C] text-gray-200 hover:bg-[#1E9E6A] hover:text-white"
                                                    }`}
                                                onClick={onClose}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium transition-colors block px-2 py-1 border-b border-gray-700 pb-2 ${isActive(link.href)
                                    ? "text-[#1E9E6A] font-bold border-[#1E9E6A]"
                                    : "text-gray-300 hover:text-[#1E9E6A]"
                                    }`}
                                onClick={onClose}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
