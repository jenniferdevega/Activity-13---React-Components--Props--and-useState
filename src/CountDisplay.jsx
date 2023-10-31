function CountDisplay({count}){

    return(
        <>
            {
            count > 5
                    ?
                (
                    <h2>
                        Counter: <span className="fs-1 fw-bold text-primary">{count}</span>
                    </h2>
                )
                    :
                (  <h2>
                    Counter: <span className="fs-1 fw-bold text-danger">{count}</span>
                    </h2>
                )
             }
        </>
    )
}

export default CountDisplay;