import React from 'react';
import { useSelector } from 'react-redux';


export const InfoIP = ({country, region, city, ip}) => {

    const {widthScreen} = useSelector(state => state.appReducer);

    return (
        widthScreen > 1024 ? 
            <div className="info-ip-container">
                <h4>{`IP: ${ip}`}</h4>
                <h4>{`Pais: ${country}`}</h4>
                <h4>{`Estado: ${region}`}</h4>
                <h4>{`Ciudad: ${city}`}</h4>
            </div>
            :
            <div></div>
    )
}
