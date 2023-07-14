import * as actions from '../actionType/actionType';

const initialState = {
    products: [],
    search: [],
    detail: [],
    category: [],
    color: [],
    sizes: [],
    price: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case actions.GET_BY_NAME:
            return {
                ...state,
                search: action.payload,
            };
        case actions.GET_DETAIL_PRODUCTS:
            return {
                ...state,
                detail: action.payload,
            };
        case actions.MODIFY_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case actions.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case actions.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case actions.GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };
        case actions.ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, action.payload],
            };
        case actions.MODIFY_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };
        case actions.DELETE_CATEGORY:
            return {
                ...state,
                category: {},
            };

        case actions.GET_ALL_COLOR:
            return {
                ...state,
                color: action.payload,
            }
        case actions.ADD_COLOR:
            return {
                ...state,
                color: [...state.color, action.payload],
            }
        case actions.MODIFY_COLOR:
            return {
                ...state,
                color: action.payload,
            }
        case actions.DELETE_COLOR:
            return {
                ...state,
                color: {},
            }
        case actions.GET_ALL_SIZE:
            return {
                ...state,
                sizes: action.payload,
            }
        case actions.ADD_SIZE:
            return {
                ...state,
                sizes: [...state.sizes, action.payload],
            }
        case actions.MODIFY_SIZE:
            return {
                ...state,
                sizes: action.payload,
            }
        case actions.DELETE_SIZE:
            return {
                ...state,
                sizes: {},
            }
            case actions.GET_ALL_PRICE:
                return {
                    ...state,
                    price: action.payload,
                }
        case actions.GET_BY_CATEGORY:
            return {
                ...state,
                products: action.payload,
            }
        case actions.GET_BY_SIZE:
            return {
                ...state,
                products: action.payload,
            }
        case actions.GET_BY_COLOR:
            return {
                ...state,
                products: action.payload,
            }
        case actions.GET_BY_PRICE:
            return {
                ...state,
                products: action.payload,
            }
        case actions.FILTERS:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;