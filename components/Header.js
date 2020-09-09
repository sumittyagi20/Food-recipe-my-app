import React from "react";

const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"><span className="material-icons brand-icon">
                fastfood</span> Food Reciepe</h1>

            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" 
                placeholder="Search Your Favourite Reciepes" 
                value={search}
                onChange ={onInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick = {onSearchClick}>Search Reciepe</button>
                </div>
            </div>
        </div>
    )
}
export default Header;