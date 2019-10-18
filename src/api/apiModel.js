const apiUrl = 'http://levogiakhang.com/Smetic';

class APIModel {
    getProductBySearch = async ({isForMale, isForFemale, skinType}) => {
        let skinValueUrl = encodeURIComponent(`'${skinType}'`);
        if (!skinType) {
            skinValueUrl = '';
        }

        return fetch(`${apiUrl}/getProductsByGender.php?forMale=${+isForMale}&forFemale=${+isForFemale}&skin=${skinValueUrl}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    };

    getProduct = async ({productId}) => {
        return fetch(`${apiUrl}/getProduct.php?productId='${productId}'`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    };

    getProducts = async () => {
        return fetch(`${apiUrl}/getProducts.php`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    };

    getUser = async ({userId: userId}) => {
        console.log(`${apiUrl}/getUser.php?userId='${userId}'`);
        return fetch(`${apiUrl}/getUser.php?userId='${userId}'`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    };

    getOrdersByStatus = async (status) => {
        const validStatus = !isNaN(parseInt(status)) ?
            parseInt(status) :
            -1;
        if (validStatus === -1) {
            return [];
        }
        else {
            return fetch(`${apiUrl}/getOrdersByStatus.php?orderStatus=${validStatus}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                })
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
}

const apiModel = new APIModel();

export default apiModel;