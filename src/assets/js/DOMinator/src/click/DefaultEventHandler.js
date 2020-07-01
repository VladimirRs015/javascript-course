'use strict'
import handlersFactory from './handlersFactory'
// This function handles each handler and get the proper method for each data type
function DefaultEventHandler(e, handlersOption) {
  console.log(e)
  const result  = handlersFactory(e,handlersOption,handlersOption.deepSearch);
  return handlersOption.handler({
    match: result,
    event: e,
  });
  
}

export default DefaultEventHandler
