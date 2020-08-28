//create the initial state
const initialState = {
  dogs: [],
  dogId: "",
  name: "",
  age: "",
  breed: "",
  heat: "",
  insemination: "",
  dateTaken: "",
  timeTaken: "",
  nanograms: "",
};

//action types
const UPDATE_DOGS = "UPDATE_DOGS";
const UPDATE_DOG_INFO = "UPDATE_DOG_INFO";
const UPDATE_INSEM = "UPDATE_INSEM";
// action builders
export function updateAboutDog(data) {
  console.log(data);
  return {
    type: UPDATE_DOGS,
    payload: data,
  };
}
export function updateDogInfo(data) {
  console.log('hit')
  console.log(data);
  return {
    type: UPDATE_DOG_INFO,
    payload: data,
  };
}
export function updateInsemination(data) {
  return {
    type: UPDATE_INSEM,
    payload: data,
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DOGS:
      return { ...state, dogs: [action.payload] };
    case UPDATE_DOG_INFO:
      let {dog_id, ng_ml, date_taken, time_taken} = action.payload
      return { ...state, dogId: dog_id, nanograms: ng_ml, dateTaken: date_taken, timeTaken: time_taken};
    case UPDATE_INSEM:
      return { ...state, insemination: action.payload };
    default:
      return state;
  }
}

// return { ...state, dogs: [...dogs, action.payload] };
