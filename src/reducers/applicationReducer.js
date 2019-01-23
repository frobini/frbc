export default function applicationReducer(state = [], action) {
 switch(action.type){
   case 'CREATE_APPLICATION':
     return [...state,
       Object.assign({},action.application)
     ];


   default:
     return state;
 }
}
