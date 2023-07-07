import React from "react";

function Finder() {

    const searchStyle = {
        backgroundColor: 'blueviolet'
    };

    return (
        <div className="container">
            <div className="row">
                <center>
                    <div className="input-group search-box finder">
                        <input
                            type="search"
                            id="search_input"
                            className="form-control bg-dark border-dark"
                            placeholder="Enter a city"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <button
                            type="button"
                            id="search_button"
                            style={searchStyle}
                            className="btn text-light"
                        >
                            Add City
                        </button>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Finder;