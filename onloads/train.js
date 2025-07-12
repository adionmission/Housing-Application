async function train(){
    ["train", "test", "load", "predict", "save"].forEach(id => {
        document.getElementById(`${id}-button`).setAttribute("disabled", "disabled");
    });

    document.getElementById("model-status").innerHTML = "Training...";

    const model = createModel();

    const result = await trainModel(model, trainingFeatureTensor, trainingLabelTensor);

    const trainingLoss = result.history.loss.pop();
    const validationLoss = result.history.val_loss.pop();

    document.getElementById("model-status").innerHTML = `Trained (unsaved)\nLoss: ${trainingLoss.toPrecision(5)}\nValidation loss: ${validationLoss.toPrecision(5)}`;

    document.getElementById("test-button").removeAttribute("disabled");
    document.getElementById("save-button").removeAttribute("disabled");
    document.getElementById("predict-button").removeAttribute("disabled");
}
