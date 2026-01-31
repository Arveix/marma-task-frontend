import { useState } from "react"
import CloseIcon from '../assets/images/icons/close_icon.svg'
import DownArrow from '../assets/images/icons/arrow_down_icon.svg'
import UpArrow from '../assets/images/icons/arrow_up_icon.svg'
import LeftArrow from '../assets/images/icons/arrow_left_icon.svg'
import RightArrow from '../assets/images/icons/arrow_right_icon.svg'
import ProductGrid from "./ProductGrid"

function SingleOptionFilterElement() {
    return (
        <>
            <div className="border-b border-gray-300 p-6 lg:px-0">
                <label className="flex items-center gap-2 text-sm uppercase">
                    <input
                        type="checkbox"
                        className="h-4 w-4 accent-black"
                    />
                    Customizable
                </label>
            </div>
        </>
    )
}

function MultipleOptionsFilterElement({ title, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([]);

    const toggleOption = (option) => {
        setSelected((prev) => {
            return prev.includes(option)
                ? prev.filter((elem) => elem !== option)
                : [...prev, option]
        });
    }

    const unselectAll = () => {
        setSelected([]);
    }
    return (
        <>
            <div className="border-b border-gray-300 p-6 lg:px-0">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between text-sm font-medium cursor-pointer"
                >
                    <div className="flex flex-col justify-items-start text-left">
                        <span className="uppercase">{title}</span>
                        <span className="font-normal">
                            {selected.length == options.length ? "All" : selected.join(', ')}
                        </span>
                    </div>
                    <span className="text-gray-500">
                        {isOpen
                            ? <img src={UpArrow} alt="Close options" />
                            : <img src={DownArrow} alt="Open options" />
                        }
                    </span>
                </button>


                {isOpen && (
                    <div className="mt-3 space-y-2">
                        <button aria-label="Unselect all" className="text-gray-400 text-sm underline w-full text-left cursor-pointer" onClick={unselectAll}>Unselect all</button>
                        {options.map((option) => (
                            <label
                                key={option}
                                className="flex items-center gap-2 text-sm text-gray-700"
                            >
                                <input
                                    type="checkbox"
                                    checked={selected.includes(option)}
                                    onChange={() => toggleOption(option)}
                                    className="h-4 w-4 accent-black"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

function ProductCatalog() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState("recommended");

    const sortOptions = [{value: 'recommended', name: 'RECOMMENDED'}, {value: 'newest-first', name: "NEWEST FIRST"}, {value: 'popular', name:"POPULAR"} , {value: 'price-desc', name: 'PRICE: HIGH TO LOW'}, {value: 'price-asc', name: 'PRICE: LOW TO HIGH'}];

    return (
        <>
            <div className="border-y-1 border-gray-300 grid grid-cols-2 py-4 items-center text-center font-bold lg:flex lg:justify-between">

                    <button className="px-4 py-2 lg:hidden border-r border-gray-300 cursor-pointer" onClick={() => setIsFilterOpen(true)}>
                        FILTER
                    </button>
                <div className="hidden lg:flex items-center">
                    <span className="hidden lg:inline mr-5">3425 items</span>
                    <button className="px-4 py-2 cursor-pointer" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        {isFilterOpen
                            ? <div className="flex items-center"><img src={LeftArrow} /><span>Hide Filter</span></div>
                            : <div className="flex items-center"><img src={RightArrow} /><span>Show Filter</span></div>
                        }
                    </button>
                </div>

                <div className="flex justify-center px-3 py-2 text-center">
                    <select
                        id="sortSelect"
                        className="focus:outline-none text-center appearance-none cursor-pointer"
                    >
                        {
                            sortOptions.map((option) => {
                                console.log(option);
                                return <option key={option.value} value={option.value} className="text-right">{option.name}</option>
                            })
                        }
                        {/* <option value="recommended">RECOMMENDED</option>
                        <option value="newest-first">NEWEST FIRST</option>
                        <option value="popular">POPULAR</option>
                        <option value="price-desc">PRICE: HIGH TO LOW</option>
                        <option value="price-asc">PRICE: LOW TO HIGH</option> */}
                    </select>
                    <img src={DownArrow} />
                </div>
            </div>

            {isFilterOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setIsFilterOpen(false)}
                />
            )}
            <div className="flex max-w-full">
                <aside className={`fixed top-0 left-0 z-50 h-full bg-white w-full mr-4 sm:w-80 ${isFilterOpen ? 'block' : 'hidden'} lg:static lg:w-100`}
                >
                    {/* Mobile header */}
                    <div className="flex items-center justify-between p-4 lg:hidden">
                        <h2 className="text-lg text-center w-full font-semibold">Filters</h2>
                        <button onClick={() => setIsFilterOpen(false)}>
                            <img src={CloseIcon} alt="Close filters" />
                        </button>
                    </div>

                    {/* Filter content */}
                    <div>
                        <SingleOptionFilterElement />
                        <MultipleOptionsFilterElement title="Ideal for" options={["Men", "Women", "Baby & Kids"]} />
                        <MultipleOptionsFilterElement title="Occasion" options={["Casual", "Formal", "Festive", "Party"]} />
                        <MultipleOptionsFilterElement title="Work" options={["Office", "Remote", "Field", "Hybrid"]} />
                        <MultipleOptionsFilterElement title="Fabric" options={["Cotton", "Wool", "Linen", "Silk"]} />
                        <MultipleOptionsFilterElement title="Segment" options={["Premium", "Mid-Range", "Budget", "Luxury"]} />
                        <MultipleOptionsFilterElement title="Suitable For" options={["Summer", "Winter", "Monsoon", "All Seasons"]} />
                        <MultipleOptionsFilterElement title="Raw Material" options={["Organic", "Synthetic", "Blended", "Recycled"]} />
                        <MultipleOptionsFilterElement title="Pattern" options={["Solid", "Striped", "Printed", "Checked"]} />
                    </div>

                </aside>
                <ProductGrid />
            </div>
        </>
    )
}

export default ProductCatalog