async function load(){
    const storageKey = `localstorage://${storageID}`;

    const models = await tf.io.listModels();
    const modelInfo = models[storageKey];

    if (modelInfo) {
        model = await tf.loadLayersModel(storageKey);

        await plotPredictionLine();
        
        document.getElementById("model-status").innerHTML = `Trained (saved ${modelInfo.dateSaved})`;
        document.getElementById("test-button").removeAttribute("disabled");
        document.getElementById("predict-button").removeAttribute("disabled");
    }
    else {
        alert("Could not load: no saved model found");
    }
}
