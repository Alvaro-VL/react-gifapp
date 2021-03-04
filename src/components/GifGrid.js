import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data,loading}=  useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        
        <div className="card-grid">
            {loading && <p>Loading</p>}
                {
                    data.map( (img) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}