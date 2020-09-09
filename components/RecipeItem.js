import React from "react";

const RecipeIteam = (props) => {
    const {label, image, ingredientLines} = props;
    return (
                <div className="card py-2 text-center">
                    <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
                    <div className="card-body">
                        <h4>{label}</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {ingredientLines.map(ingredient => (
                            
                            <li className="list-group-item">{ingredient}</li>
                            ))
                        }
                    </ul>
                </div>
            
    )
}
export default RecipeIteam;