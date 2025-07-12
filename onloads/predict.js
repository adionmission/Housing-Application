async function predict(){
    const predictionInput = parseInt(document.getElementById("prediction-input").value);

    if (isNaN(predictionInput)) {
        alert("Please enter a valid number");
    }
    else if (predictionInput < 200){
        alert("Please enter a number above 200 sqft.");
    }
    else {
        tf.tidy(function(){   // memory usage freed up
            const inputTensor = tf.tensor1d([predictionInput]);
            const normalisedInput = normalise(inputTensor, normalisedFeature.min, normalisedFeature.max);
            const normalisedOutputTensor = model.predict(normalisedInput.tensor);
            const outputTensor = denormalise(normalisedOutputTensor, normalisedLabel.min, normalisedLabel.max);
            const outputValue = outputTensor.dataSync()[0];
            const outputValueRounded = (outputValue/1000).toFixed(0)*1000

            document.getElementById("prediction-output").innerHTML = `The predicted house price is: <br />`
            + `<span style="font-size: 2em">\$${outputValueRounded}</span>`;
        });
    }
}
