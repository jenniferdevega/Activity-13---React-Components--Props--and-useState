import { useState } from "react";
import CountDisplay from "./CountDisplay";

function Counter(){

    const [counter, setCounter] = useState(0);

    return(
        <main className="container d-flex justify-content-center mt-5 mb-4">
            <div className="card shadow px-5 py-1 text-center d-flex justify-content-center w-75 mb-5">
                <div className="card-body">
                    <div className="container">
                        <CountDisplay count={counter} />
                        <button className="btn btn-info text-light fw-bold mt-3" onClick={
                            () => {
                                setCounter(counter + 1)
                            }
                        }>
                            + Increment
                        </button>

                        <button className="ms-3 btn btn-info text-light fw-bold mt-3" onClick={
                            () =>{
                                if(counter > 0){
                                    setCounter(counter - 1)
                                }
                            }
                        }>
                            - Decrement
                        </button>


                    </div>

                    <div className="mt-3">
                    {
                        counter > 5 
                            ?
                        (<h1 className="text-primary fw-bold">Congratulations!</h1>)
                            : 
                        (<h1 className="text-danger fw-bold">Not yet</h1>)
                    }
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Counter;