import axios from 'axios';
import * as actions from '../actionType/actionType';

//--------------------PRODUCTS---------------------------

export const getAllProducts = () => {
    return async function (dispatch) {
        const products = await axios.get("/products");
        dispatch({
            type: actions.GET_ALL_PRODUCTS,
            payload: products.data
        });
    };
};

export const getProductsByName = (name) => {
    return async function (dispatch) {
        const name = await axios.get(`/products/${name}`);
        dispatch({
            type:  actions.GET_BY_NAME,
            payload: name.data
        });
    };
};

export const getProductsDetail = (id) => {
    return async function (dispatch) {
        const detail = await axios.get(`/products/${id}`);
        dispatch({
            type:  actions.GET_DETAIL_PRODUCTS,
            payload: detail.data
        });
    };
};

export const modifyProduct = (data) => {
    return async function (dispatch) {
        const modify = await axios.get(`/products`, data);
        dispatch({
            type:  actions.MODIFY_PRODUCT,
            payload: modify.data
        });
    };
};

export const deleteProduct = (id) => {
    return async function (dispatch) {
        const deleteP = await axios.get(`/products/${id}`);
        dispatch({
            type:  actions.DELETE_PRODUCT,
            payload: id
        });
    };
};

export const addProducts = (data) => {
    return async function (dispatch) {
        const addP = await axios.get("/products", data);
        dispatch({
            type:  actions.ADD_PRODUCT,
            payload: addP.data
        });
    };
};

//--------------------CATEGORY---------------------------

export const getAllCategory = () => {
    return async function (dispatch) {
        const category = await axios.get("/category");
        dispatch({
            type:  actions.GET_ALL_CATEGORY,
            payload: products.data
        });
    };
};

export const addCategory = (data) => {
    return async function (dispatch) {
        const addC = await axios.get("/category", data);
        dispatch({
            type:  actions.ADD_CATEGORY,
            payload: addC.data
        });
    };
};

export const modifyCategory = (data) => {
    return async function (dispatch) {
        const modify = await axios.get(`/category`, data);
        dispatch({
            type:  actions.MODIFY_CATEGORY,
            payload: modify.data
        });
    };
};

export const deleteCategory = (id) => {
    return async function (dispatch) {
        const deleteC = await axios.get(`/category/${id}`);
        dispatch({
            type:  actions.DELETE_CATEGORY,
            payload: id
        });
    };
};

export const getByCategory = (category) => {
    return async function (dispatch) {
        const categoty = await axios.get(`filters/${category}`);
        dispatch({
            type:  actions.GET_BY_CATEGORY,
            payload: category.data
        });
    };
};

//--------------------COLOR---------------------------

export const getAllColor = () => {
    return async function (dispatch) {
        const color = await axios.get("/color");
        dispatch({
            type:  actions.GET_ALL_COLOR,
            payload: color.data
        });
    };
};

export const addColor = (data) => {
    return async function (dispatch) {
        const addC = await axios.get("/color", data);
        dispatch({
            type:  actions.ADD_COLOR,
            payload: addC.data
        });
    };
};

export const modifyColor = (data) => {
    return async function (dispatch) {
        const modify = await axios.get(`/color`, data);
        dispatch({
            type:  actions.MODIFY_COLOR,
            payload: modify.data
        });
    };
};

export const deleteColor = (id) => {
    return async function (dispatch) {
        const deleteC = await axios.get(`/color/${id}`);
        dispatch({
            type: actions.DELETE_COLOR,
            payload: id
        });
    };
};

export const getByColor = (color) => {
    return async function (dispatch) {
        const byColor = await axios.get(`/filter/${color}`);
        dispatch({
            type:  actions.GET_BY_COLOR,
            payload: byColor.data
        });
    };
};

//--------------------FILTERS---------------------------

export const filter = (payload) => ({
    type:  actions.FILTERS,
    payload,
});

//--------------------PRICE---------------------------

export const getByPrice = (price) => {
    return async function (dispatch) {
        const byPrice = await axios.get(`/filter/${price}`);
        dispatch({
            type:  actions.GET_BY_PRICE,
            payload: byPrice.data
        });
    };
};

//--------------------SIZE---------------------------

export const getBySizes = (size) => {
    return async function (dispatch) {
        const bySizes = await axios.get(`/filter/${price}`);
        dispatch({
            type:  actions.GET_BY_SIZE,
            payload: bySizes.data
        });
    };
};


