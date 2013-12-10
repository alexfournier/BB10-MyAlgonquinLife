/***********************
    OC TRANSPO MOBILE
***********************/

function onInvokeSuccess() {
    console.log("Invocation successful!");
}

function onInvokeError(error) {
    console.log("Invocation failed, error: " + error);
}

function invokeBrowser() {
    // invoke web link - allows the system to choose an appropriate target that handles http://
    blackberry.invoke.invoke({
    uri: "http://www.octranspo.com/mobi"
    }, onInvokeSuccess, onInvokeError);
}
