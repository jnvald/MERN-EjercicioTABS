import {useState} from 'react'




    const TabApp = () => {
        const [value, setValue] = useState(" ")

            return (
            <div className="container">
                <button 
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    onClick={() => setValue("Tab 1 content is showing")} >TAB1

                </button>
                <button 
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    onClick={() => setValue("Tab 2 content is showing")} >TAB2
                </button>
                <button
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    onClick={() => setValue("Tab 3 content is showing")} >TAB3
                </button>
                    <div className="card">
                        <div className="card-header">
                            Salida aqui:
                        </div>  
                            { value && <div className="card-body"><h2 className="card-title">{value}</h2></div>}  
                        </div>     
            </div>
    )
}

export default TabApp
