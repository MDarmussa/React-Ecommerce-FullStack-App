import { ADD_TO_WISHLIST, GET_ALL_CATEGORY, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../type"

const initial = {
     addWishList: [],
     removeWishList: [],
     allWishList: []
}

const addToWishListReducer = (state = initial, action) => {

     switch(action.type)
     {
          case ADD_TO_WISHLIST:
               return{
                    ...state,
                    addWishList: action.payload,
               }
          case REMOVE_FROM_WISHLIST:
               return{
                    ...state,
                    removeWishList: action.payload,
          }
          case USER_WISHLIST:
               return{
                    ...state,
                    allWishList: action.payload,
          }
          default:
               return state;
     }
}

export default addToWishListReducer