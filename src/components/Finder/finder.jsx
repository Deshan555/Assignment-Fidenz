import React from "react";

function Finder(props) {

    const searchStyle = {

        backgroundColor: 'blueviolet'
    };
    
    return (
        <div class="container">
            <div class="row">
                <center>
                <div class="input-group search-box finder">
                    <input
                        type="search"
                        id="search_input"
                        class="form-control bg-dark border-dark"
                        placeholder="Enter a city"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <button
                        type="button"
                        id="search_button"
                        style= {searchStyle}
                        class="btn text-light"
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