import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";

import img from '../tools/images'

const TableContentBikes = ({bike, id, detailChange}) => {


    return (
        <>
            <div className="tableContents" key={id}
                 onClick={()=>detailChange(bike.serial)}

            >
                <div className="item-contents-table ">
                    <img
                        src={bike?.large_img !== null ? bike?.large_img : img.ImgNotFound}
                        alt={bike?.title}
                        className="contentImg__img"
                    />
                    <div className="grid-info-table">
                        <h2>{bike?.title}</h2>
                        <p>{bike?.description}</p>
                        <p>{bike?.date_stolen}</p>
                        <p>{bike?.stolen_location}</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TableContentBikes;

