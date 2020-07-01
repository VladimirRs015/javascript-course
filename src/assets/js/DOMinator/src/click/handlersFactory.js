'use strict'
/**
 @function function Gets a set of css properties  element and check if one of them matches
 * 
 * @param {array} arraysMatcher Array with the valid css properties that will be matched  with the event element
 * @param {boolean} deepSearchSearch Espefifies the depth of the search   
 * @return {boolean} verification if the match with one of them
 */
function arraysMatchingHandler(element,arraysMatcher, deepSearchSearch) {
 console.log(deepSearchSearch)
  let result = true;
    for (let matcher of arraysMatcher.catchMatch) {
      if (deepSearchSearch) {
        if (element.target.matches(`${matcher} , ${matcher} *`)) {
          result = true;
        }
      } else {
        if (element.target.matches(`${matcher}`)) {
          result = true;
        }
      }
    }
    return result;
  }
  
  // Also this function gets a matcher property but this is to strings
  function stringMatchingHandler(element,stringMatcher, deepSearchSearch) {
    let result = false;
    if (deepSearchSearch) {
      if (element.matches(`${stringMatcher} , ${stringMatcher} *`)) {
        result = true;
      }
    } 
    else {
      if (element.matches(`${stringMatcher}`)) {
        result = true;
      }
    }
    return result
  }
  
  function handlersFactory(element,matchers,deepSearch) {
    //  Type validation
    const type = typeof matchers;
    if (type == "object") {
      return arraysMatchingHandler(element,matchers,deepSearch);
    }
    if (type == "string") {
      return stringMatchingHandler(element,matchers,deepSearch)
    } else {
      throw new Error(
        `Unexpected type , it must be an object or string, but the value given was an ${typeof matchers}`
      );
    }
  }
  module.exports = handlersFactory