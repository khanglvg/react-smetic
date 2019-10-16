const apiUrl = 'http://levogiakhang.com/Smetic';

class APIModel{
    getProductBySearch = async ({isForMale, isForFemale, skinType}) => {
        let skinValueUrl = encodeURIComponent(`'${skinType}'`);
        if(!skinType) {
            skinValueUrl = '';
        }
console.log(`${apiUrl}/getProductsByGender.php?forMale=${+isForMale}&forFemale=${+isForFemale}&skin=${skinValueUrl}`)
        return fetch(`${apiUrl}/getProductsByGender.php?forMale=${+isForMale}&forFemale=${+isForFemale}&skin=${skinValueUrl}`,
          {
              headers : {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          })
          .then(response => response.json())
          .then(data => {
              return data;
          })
          .catch(error => {
              console.log(error)
          });
    };

    getProduct = async ({productId}) => {
        return fetch(`${apiUrl}/getProduct.php?productId='${productId}'`,
          {
              headers : {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          })
          .then(response => response.json())
          .then(data => {
              return data;
          })
          .catch(error => {
              console.log(error)
          });
    };
}

const apiModel = new APIModel();

export default apiModel;