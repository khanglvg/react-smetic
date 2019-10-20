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

    getProductsByVendor = async (vendorId) => {
        return fetch(`${apiUrl}/getProductsByVendor.php?vendorId='${vendorId}'`,
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

    getOrdersById = async (orderId) => {
        return fetch(`${apiUrl}/getOrderById.php?orderId='${orderId}'`,
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

    getOrders = async () => {
        return fetch(`${apiUrl}/getOrders.php`,
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

    getVendorsName = async () => {
        return fetch(`${apiUrl}/getVendorsName.php`)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    };

    postOrder = async (orderData) => {
        return fetch(`${apiUrl}/postOrder.php`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });

    };

    updateOrder = async (orderData) => {
        return fetch(`${apiUrl}/updateOrderStatus.php`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });

    };
}

const apiModel = new APIModel();

export default apiModel;