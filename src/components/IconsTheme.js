import React from 'react';
import { useSelector } from 'react-redux';
import { BsSun, BsMoon } from 'react-icons/bs';


export const IconsTheme = ({darkMode, clickLight, clickDark}) => {

    const {widthScreen} = useSelector(state => state.appReducer);

    return (
        darkMode ?
            <BsSun
                size={widthScreen > 1024 ? "2.5rem" : '2rem'}
                className="icon-sun"
                onClick={clickLight}
            />
            :
            <BsMoon
                className="icon-sun"
                size={widthScreen > 1024 ? "2.5rem" : '2rem'}
                onClick={clickDark}
            />
    )
}
