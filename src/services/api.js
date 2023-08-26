// import axios from 'axios';

// const API_URI = 'http://localhost:8000'

// const API_GMAIL = async (urlObject, payload, type) => {
   
//     return await axios({
//         method: urlObject.method,
//         url: `${API_URI}/${urlObject.endpoint}/${type}`,
//         data: payload
//     })
// }

// export default API_GMAIL;

import axios from 'axios';

const API_URI = 'http://localhost:8000'

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: requestData
    })
}

export default API_GMAIL;