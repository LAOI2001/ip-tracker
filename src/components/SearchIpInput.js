import React from 'react';
import { useSelector } from 'react-redux';

export const SearchIpInput = ({
    clickGetMyIP, clickSearchIP,
    valueInput, changeInput
}) => {

    const {widthScreen} = useSelector(state => state.appReducer);
    
    const handleClickMyIP = () => {
        clickGetMyIP();
    };

    const handleClickSearchIP = () => {
        if(valueInput.trim().length > 0){
            clickSearchIP();
        }
    };

    return (
        <div className="container-main-search">
            <h3>Buscar IP</h3>

            <div 
                className="search-ip-container"
                style={{
                    flexDirection: widthScreen < 1024 ?
                        'column': ''
                }}
            >
                {widthScreen > 1024 ? 
                    <button onClick={handleClickMyIP}>
                        Obtener mi IP
                    </button>
                    :
                    null
                }

                <input
                    name="searchIP"
                    type="text"
                    value={valueInput}
                    onChange={changeInput}
                    autoComplete="off"
                    style={{
                        margin: widthScreen < 1024 ? '0px' : '',
                        fontSize: widthScreen < 1024 ? '1rem': ''
                    }}
                />

                {widthScreen > 1024 ?
                    <button onClick={handleClickSearchIP}>
                        Buscar
                    </button>
                    :
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <button 
                            onClick={handleClickSearchIP}
                            style={{
                                marginRight: '30px'
                            }}
                        >
                            Buscar
                        </button>

                        <button onClick={handleClickMyIP}>
                            Mi IP
                        </button>

                    </div>
                }
            </div>
        </div>
    )
}

