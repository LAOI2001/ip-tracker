
export const httpGetMyIP = async () => {
    
    let result;
    
    await fetch('http://ip-api.com/json').then(async response =>{
        const data = await response.json();

        result = data;
    });

    return result;
};


export const httpSearchIP = async (ipAdress) => {

    let result;
    
    await fetch(`http://ip-api.com/json/${ipAdress}`)
        .then(async response =>{
            const data = await response.json();

            result = data;
        });

    return result;
}