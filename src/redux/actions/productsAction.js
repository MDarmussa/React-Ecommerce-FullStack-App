import { CREATE_PRODUCTS, GET_All_PRODUCTS, GET_PRODUCT_DETAILS, GET_ERROR, GET_PRODUCT_LIKE, DELETE_PRODUCT, UPDATE_PRODUCT, GET_All_PRODUCTS_BY_CATEGORY, GET_All_PRODUCTS_BY_BRAND } from "../type";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useGetData } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";



//create products
export const createProduct = (formatData) => async(dispatch) => {
     try {
          const response = await useInsertDataWithImage("/api/v1/products/", formatData)
          dispatch({
               type: CREATE_PRODUCTS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}


//gat All products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products/?limit=${limit}`) //useGetData from hooks, it use to retrieve data from our database
          dispatch({
               type: GET_All_PRODUCTS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}

//gat All products with pagination and page number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`) //useGetData from hooks, it use to retrieve data from our database
          dispatch({
               type: GET_All_PRODUCTS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}

//get one products with id
export const getOneProducts = (id) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products/${id}`)
          dispatch({
               type: GET_PRODUCT_DETAILS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}

//get one products with id
export const getProductLike = (id) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products?category=${id}`)
          dispatch({
               type: GET_PRODUCT_LIKE,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}

//delete one product with id
export const deleteProducts = (id) => async (dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/products/${id}`)
          dispatch({
               type: DELETE_PRODUCT,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}


//update product with id
export const updateProducts = (id, data) => async (dispatch) => {
     try {
          const response = await useUpdateDataWithImage(`/api/v1/products/${id}`, data)
          dispatch({
               type: UPDATE_PRODUCT,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}


//gat All products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => { //this action doesn't have new reducer because we need same data // it user a previous reducer
     try {
          const response = await useGetData(`/api/v1/products?${queryString}`) 
          dispatch({
               type: GET_All_PRODUCTS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}



//gat All products by category
export const getAllProductsByCategory = (page, limit, categoryID) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}&category=${categoryID}`)
          dispatch({
               type: GET_All_PRODUCTS_BY_CATEGORY,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_All_PRODUCTS_BY_CATEGORY,
               payload: e.response,
          })
     }
}


//gat All products by brand
export const getAllProductsByBrand = (page, limit, brandID) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}&brand=${brandID}`)
          dispatch({
               type: GET_All_PRODUCTS_BY_BRAND,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_All_PRODUCTS_BY_BRAND,
               payload: e.response,
          })
     }
}