// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;


//Constants 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const UNDO = "UNDO"
const REDO = "REDO"
//Action Builders

export function increment(amount){
    return {
        type: INCREMENT,
        amount
    }

}
export function decrement(amount){
    return {
        type: DECREMENT,
        amount
    }

}
export function undo(){
    return{
        type: UNDO
    }
}
export function redo(){
    return{
        type: REDO,
    }
}

//Make initial State
let initialState = {
    previousValues: [],
    futureValues: [],
    currentValue: 0
}

//Make Reducer Function
export default function(state = initialState, action){
    //Switch
    switch(action.type){
        case INCREMENT:
            let newValue = state.currentValue + action.amount
            let newArray = state.previousValues;
            newArray.push(state.currentValue)
            return Object.assign({}, state, {previousValues: newArray, currentValue: newValue})
        case DECREMENT:
            let newerValue = state.currentValue - action.amount    
            let newerArray = state.previousValues;
            newerArray.push(state.currentValue)
            return Object.assign({}, state, {previousValues: newerArray, currentValue: newerValue})
        case UNDO:
            let prevLength = state.previousValues.length;
            let futureArray = state.futureValues
            futureArray.push(state.currentValue)
            let undoValue = state.previousValues[state.previousValues.length-1];
            let undoArray = state.previousValues;
            undoArray.pop()
            if (prevLength > 0 ){
            return Object.assign({}, state, {currentValue: undoValue, previousValues: undoArray}) 
            }
        case REDO:
            let futureLength = state.futureValues.length;
            let prevArray = state.previousValues;
            prevArray.push(state.currentValue)
            let redoValue = state.futureValues.pop()
            let redoArray = state.futureValues;
            if (futureLength > 0){
            return Object.assign({},state, {currentValue: redoValue, futureValues: redoArray})
            }    
    }
    return state;
}
