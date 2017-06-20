module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    context.bindings.outputBlob = { test: context.bindingData.name }
    context.bindingData.outputFileName = context.bindingData.name + "NEW";

    context.done();
};