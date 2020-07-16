import DefaultEventHandler from './handlersFactory' 
class DOMinator {
    constructor(
      ConfigObject = {
        DOMcontext: undefined,
        event: "click",
        handler: undefined,
        catchMatch: "",
        deepSearch: true,
      }
    ) {

      this.event = ConfigObject.event;
      this.handler = ConfigObject.handler,
      this.deepSearch = ConfigObject.deepSearch;
      this.DOMcontext = ConfigObject.DOMcontext;
      // 
      this.catchMatch = ConfigObject.catchMatch;
      if (!this.matcher && !this.handler) {
        throw new Error("Must be one event matcher");
      }
      const DOMElement = document.querySelector(this.DOMcontext);
      DOMElement.addEventListener(this.event, () => {
        DefaultEventHandler(event, {
          deepSearch:this.deepSearch,
          catchMatch: this.catchMatch,
          handler: this.handler,
        });
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
  }
  export default DOMinator