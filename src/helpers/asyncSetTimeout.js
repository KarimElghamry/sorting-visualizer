const asyncSetTimeout = ({timeout} = {}) =>{
    return new Promise((resolve,reject) => setTimeout(() => resolve(), timeout));
}

export default asyncSetTimeout;