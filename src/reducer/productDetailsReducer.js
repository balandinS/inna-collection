import _ from 'lodash';
import {
FETCH_PRODUCTS,
FETCH_PRODUCT
} from '../action/types'

const initailState = {
    
    idModel: null,
    image: '',
    materials: {},
    nameModel: '',
    presentation: null,
    price: null,
    sizes: {}

}
export default (state = initailState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
          return _.filter([...action.payload.data],function(o){return o.nameModel=== +action.payload.nameModel})
        default: 
          return state
    }
}