import * as ActionTypes from "./ActionTypes";
import { baseUrl } from '../shared/baseUrl';


export const postFeedback = (email, confirmemail, password, name,day,month,
  year,sex) => (dispatch) => {

    const newFeedback = {
      email:email,
      confirmemail:confirmemail,
      password:password,
      name:name,
      day:day,
      month:month,
      year:year,
      sex:sex
    };
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'users', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};