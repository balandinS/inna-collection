import _ from 'lodash';
import {
FETCH_PRESENTATION,
} from '../action/types'

const initailState = {
    
    idModel: null,
    image: '',
    materials: [],
    nameModel: '',
    presentation:false,
    price: null,
    sizes: []

}
export default (state = initailState, action) => {
    switch(action.type) {
        case FETCH_PRESENTATION: 
          return  _.filter([...action.payload],function(o){return o.presentation===true})
        default: 
          return state
    }
}