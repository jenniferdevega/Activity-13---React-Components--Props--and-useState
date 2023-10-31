function Header({title}, {count}){

    return(
        <>
            <header className="container-fluid text-center p-3 badge bg-primary fs-1 mt-5 fw-bold">
                <h1>
                    {title}
                </h1>
            </header>
        </>
    )

}

export default Header;