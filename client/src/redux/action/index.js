import axios from 'axios';
import * as actions from '../actionType/actionType';
const baseURL = 'http://localhost:3001';

//--------------------PRODUCTS---------------------------

export const getAllProducts = () => {
    return async function (dispatch) {
        try {
            let products = await axios.get(`${baseURL}/products`);
            return dispatch({
                type: actions.GET_ALL_PRODUCTS,
                payload: products.data
              
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getProductsByName = (name) => {
    return async function (dispatch) {
        try {
            const name = await axios.get(`${baseURL}/products/${name}`);
            dispatch({
                type: actions.GET_BY_NAME,
                payload: name.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getProductsDetail = (id) => {
    return async function (dispatch) {
        try {
            const detail = await axios.get(`${baseURL}/products/${id}`);
            dispatch({
                type: actions.GET_DETAIL_PRODUCTS,
                payload: detail.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const modifyProduct = (data) => {
    return async function (dispatch) {
        try {
            const modify = await axios.put(`${baseURL}/products/${data.id}`, data);
            dispatch({
                type: actions.MODIFY_PRODUCT,
                payload: modify.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteProduct = (id) => {
    return async function (dispatch) {
        try {
             await axios.delete(`${baseURL}/products/${id}`);
            dispatch({
                type: actions.DELETE_PRODUCT,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const addProducts = (data) => {
    return async function (dispatch) {
        try {
            const addP = await axios.post(`${baseURL}/products`, data);
            dispatch({
                type: actions.ADD_PRODUCT,
                payload: addP.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

//--------------------CATEGORY---------------------------

export const getAllCategory = () => {
    return async function (dispatch) {
        try {
            const category = await axios.get(`${baseURL}/category`);
            dispatch({
                type: actions.GET_ALL_CATEGORY,
                payload: category.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const addCategory = (data) => {
    return async function (dispatch) {
        try {
            const addC = await axios.post(`${baseURL}/category`, data);
            dispatch({
                type: actions.ADD_CATEGORY,
                payload: addC.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const modifyCategory = (data) => {
    return async function (dispatch) {
        try {
            const modify = await axios.put(`${baseURL}/category/${data.id}`, data);
            dispatch({
                type: actions.MODIFY_CATEGORY,
                payload: modify.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteCategory = (id) => {
    return async function (dispatch) {
        try {
             await axios.delete(`${baseURL}/category/${id}`);
            dispatch({
                type: actions.DELETE_CATEGORY,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getByCategory = (category) => {
    return async function (dispatch) {
        try {
            const categoty = await axios.get(`${baseURL}/filters/${category}`);
            dispatch({
                type: actions.GET_BY_CATEGORY,
                payload: category.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

//--------------------COLOR---------------------------

export const getAllColor = () => {
    return async function (dispatch) {
        try {
            const color = await axios.get(`${baseURL}/color`);
            dispatch({
                type: actions.GET_ALL_COLOR,
                payload: color.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const addColor = (data) => {
    return async function (dispatch) {
        try {
            const addC = await axios.post(`${baseURL}/color`, data);
            dispatch({
                type: actions.ADD_COLOR,
                payload: addC.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const modifyColor = (data) => {
    return async function (dispatch) {
        try {
            const modify = await axios.put(`${baseURL}/color`, data);
            dispatch({
                type: actions.MODIFY_COLOR,
                payload: modify.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteColor = (id) => {
    return async function (dispatch) {
        try {
            await axios.delete(`${baseURL}/color/${id}`);
            dispatch({
                type: actions.DELETE_COLOR,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getByColor = (color) => {
    return async function (dispatch) {
        try {
            const byColor = await axios.get(`${baseURL}/filter/${color}`);
            dispatch({
                type: actions.GET_BY_COLOR,
                payload: byColor.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

//--------------------FILTERS---------------------------

export const filter = (payload) => ({
    type: actions.FILTERS,
    payload,
});

//--------------------PRICE---------------------------

export const getByPrice = (price) => {
    return async function (dispatch) {
        try {
            const byPrice = await axios.get(`${baseURL}/filter/${price}`);
            dispatch({
                type: actions.GET_BY_PRICE,
                payload: byPrice.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

//--------------------SIZE---------------------------

export const getBySizes = (size) => {
    return async function (dispatch) {
        try {
            const bySizes = await axios.get(`${baseURL}/filter/${size}`);
            dispatch({
                type: actions.GET_BY_SIZE,
                payload: bySizes.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};


