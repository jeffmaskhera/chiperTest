import React from 'react';
import {useSelector} from "react-redux";
import img from '../tools/images'
import { useHistory } from 'react-router-dom';

const DetailView = ({}) => {

    const bikeInAction = useSelector((state) => state.product?.currentBike)
    const history = useHistory();

    const backHome=()=> {
        history.push("/")
    }


    return (
        <div className="detailPage">
            {
                bikeInAction ?
                    <div className="box-detail">
                        <h2>Title: {bikeInAction?.title ? bikeInAction?.title : "Not title"}</h2>
                        <p>Description: {bikeInAction?.description ? bikeInAction?.description : "None description"}</p>
                        <p>Stolen Location: {bikeInAction?.stolen_location ? bikeInAction?.stolen_location : "Not stolen location"}</p>
                        {bikeInAction?.stolen_coordinates ?
                            <>
                                <p>Coordinates: Lat: {bikeInAction?.stolen_coordinates[0] ? bikeInAction?.stolen_coordinates[0] : "Not availabe"} Long: {bikeInAction?.stolen_coordinates[0] ? bikeInAction?.stolen_coordinates[0] : "Not available"}</p>
                            </>
                            :
                            <p>Coordinates: none cordinates</p>
                        }
                        <p>Serial: {bikeInAction?.serial ? bikeInAction?.serial : "Not serial"}</p>
                        {
                            bikeInAction.frame_colors ?
                                <p>Colors: {bikeInAction.frame_colors.map((i) => (<span key={i}>{i}, </span>))}</p>
                                :
                                <p>Colors: none colors</p>
                        }
                        <div className="content-img">
                            <img
                                src={bikeInAction?.large_img !== null ? bikeInAction?.large_img : img.ImgNotFound}
                                alt={bikeInAction?.title}
                                className="contentImg__img"
                            />
                        </div>
                        <div className="btn-back-errors" onClick={backHome}>Go home</div>
                    </div>
                    :
                    <div className="errorsView">
                        <h2>something went wrong, we cannot show the detail view</h2>
                        <div className="btn-back-errors" onClick={backHome}>Go home</div>
                    </div>
            }
        </div>
    );
};

export default DetailView;

