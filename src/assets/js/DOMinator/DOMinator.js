'use strict'
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

/**
 @function function Gets a set of css properties  element and check if one of them matches
 * 
 * @param {array} arraysMatcher Array with the valid css properties that will be matched  with the event element
 * @param {boolean} deepSearchSearch Espefifies the depth of the search   
 * @return {boolean} verification if the match with one of them
 */
function arraysMatchingHandler(element,arraysMatcher, deepSearchSearch) {
  let result = false;

  for (let matcher of arraysMatcher) {
    if (deepSearchSearch) {
      if (element.matches(`${matcher} , ${matcher} *`)) {
        result = true;
      }
    } else {
      if (element.matches(`${matcher}`)) {
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


// This function handles each handler and get the proper method for each data type
function DefaultEventHandler(e, handlersOption) {
  // console.log(handlersOption.matcher)
  const result  = handlersFactory(event.target,handlersOption.matcher,handlersOption.deepSearch);
  console.log(result)
  return handlersOption.handler({
    match: result,
    event: e,
  });
  
}

class DOMinator {
  constructor(
    ConfigObject = {
      DOMcontext: undefined,
      event: "click",
      handler: undefined,
      catchMatch: "",
      deepSearchSearch: true,
    }
  ) {
    this.event = ConfigObject.event;
    this.handler = ConfigObject.handler,
    this.deepSearchSearch = ConfigObject.deepSearchSearch;
    this.DOMcontext = ConfigObject.DOMcontext;
    // 
    this.catchMatch = ConfigObject.catchMatch;
    if (!this.matcher && !this.handler) {
      throw new Error("Must be one event matcher");
    }

    const DOMElement = document.querySelector(this.DOMcontext);

    DOMElement.addEventListener(this.event, () => {
      DefaultEventHandler(event, {
        deepSearchSearch: this.deepSearchSearch,
        catchMatch: this.catchMatch,
        handler: this.handler,
      });
      return;
    });
  }

  setHandler(handler) {
    this.handler = handler;
  }
  setDeepSearch(option) {
    if (typeof option == "boolean") {
      this.deepSearchSearch = option;
    } else {
      throw new Error(`Unexpected value ,it's not a boolean`);
    }
  }
  setDOMcontext(context) {
    this.DOMcontext = context;
  }
  // catchEventFrom(identifier) {
  
  // }
  addEvent() {
    this.DOMcontext.addEventListener(this.event, this.handler);
  }
  // addMoreEvents(event){
  //     // Add an event to the DOM context
  //     console.log(this.DOMcontext)

  //     this.DOMcontext.addEventListener(event,this.handler)
  // }
}

export default DOMinator;
