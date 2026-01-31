function Breadcrumbs() {
    return (
        <>
            <nav className="text-sm text-gray-400 p-4 lg:hidden" aria-label="breadcrumb">
                <ol className="flex items-center space-x-2">
                    <li>HOME</li>
                    <li>
                        <span className="mx-2">|</span>
                    </li>
                    <li className="text-gray-900 font-medium">SHOP</li>
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumbs