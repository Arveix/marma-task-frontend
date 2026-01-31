import { useState } from 'react'
import MenuIcon from '../assets/images/icons/hamburger_menu.svg'
import Logo from '../assets/images/company_logo.svg'
import SearchIcon from '../assets/images/icons/search_icon.svg'
import FavouriteOutline from '../assets/images/icons/favourite_outline.svg'
import CartIcon from '../assets/images/icons/cart_icon.svg'
import CloseIcon from '../assets/images/icons/close_icon.svg'
import ProfileIcon from '../assets/images/icons/profile_icon.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    const navLinks = [
        {label: "Shop", href: "#"},
        {label: "Skills", href: "#"},
        {label: "Stories", href: "#"},
        {label: "About", href: "#"},
        {label: "Contact Us", href: "#"}
    ];

    const languages = ["EN", "MR", "HI"];
    return (
        <header className="bg-white border-b border-gray-200 p-4">
            <div className="max-w-7xl mx-auto px-4 h-16 grid grid-cols-3 items-center">

                <div className="flex items-center gap-3">
                    <button aria-label="Open menu" className="lg:hidden" onClick={() => {setIsOpen(true)}}>
                        <img
                            src={MenuIcon}
                            alt="Menu"
                            className="w-6 h-6"
                        />
                    </button>
                    {isOpen && (
                        <div
                            className="hidden sm:block fixed inset-0 bg-black opacity-70"
                            onClick={() => setIsOpen(false)}
                        />
                    )}

                    {/* Drawer */}
                    {isOpen && (
                        <aside className="fixed inset-0 bg-white sm:inset-y-0 sm:left-0 sm:w-72 flex flex-col justify-between">
                            {/* Top */}
                            <div>
                                <div className="flex items-center justify-between px-4 py-4 mb-4">

                                    <div className="flex items-center gap-2">
                                        <img
                                            src={Logo}
                                            alt="Logo"
                                            className="w-6 h-6"
                                        />
                                        <span className="text-lg font-semibold">
                                            NAME
                                        </span>

                                    </div>
                                    <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                                        <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="px-6 mb-4">
                                    <a href="/profile" className="text-lg font-medium">
                                        Profile
                                    </a>
                                </div>

                                {/* Nav links */}
                                <nav className="flex flex-col px-6 space-y-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-lg font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Bottom */}
                            <div className="px-6 mb-6">
                                <label className="block text-sm text-gray-500 mb-1">
                                    Language
                                </label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </aside>
                    )}

                    <img
                        src={Logo}
                        alt="Company logo"
                        className="h-12 w-12"
                    />
                </div>

                <div className="text-center">
                    <span className="text-4xl font-bold">
                        LOGO
                    </span>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <button aria-label="Search">
                        <img
                            src={SearchIcon}
                            alt="Search"
                            className="w-6 h-6"
                        />
                    </button>

                    <button aria-label="Wishlist">
                        <img
                            src={FavouriteOutline}
                            alt="Wishlist"
                            className="w-6 h-6"
                        />
                    </button>

                    <button aria-label="Cart">
                        <img
                            src={CartIcon}
                            alt="Cart"
                            className="w-6 h-6"
                        />
                    </button>

                    <button aria-label="Profile" className="hidden lg:inline-block">
                        <img
                            src={ProfileIcon}
                            alt="Profile"
                            className="w-6 h-6"
                        />
                    </button>

                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="hidden lg:inline-block h-6 text-sm bg-transparent focus:outline-none cursor-pointer"
                    >
                        <option value="EN">EN</option>
                        <option value="MR">MR</option>
                        <option value="HI">HI</option>
                    </select>
                </div>

            </div>
            
            <nav className="hidden md:flex justify-center mt-6">
                <ul className="flex gap-15 py-4">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="text-lg font-bold hover:text-gray-600"
                            >
                                {item.label.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}

export default Header