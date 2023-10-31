function Header({title}){

    return(
        <>
            <header className="text-center">
                <h1 className="p-3 badge bg-primary fs-1 mt-5 fw-bold">
                    {title}
                </h1>
            </header>
        </>
    )
}

export default Header;