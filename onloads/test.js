async function test(){
    const lossTensor = model.evaluate(testingFeatureTensor, testingLabelTensor);
    const loss = lossTensor.dataSync()[0];
    document.getElementById("testing-status").innerHTML = `Testing set loss: ${loss.toPrecision(5)}`;
}
