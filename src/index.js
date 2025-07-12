async function run () {
    // Import from CSV
    const houseData = tf.data.csv("http://127.0.0.1:5500/datasets/kc_house_data.csv");

    // Extract x and y values to plot
    const pointsDataset = houseData.map(record => ({
        x: record.sqft_living,
        y: record.price
    }));
  
    // Cleaning the dataset
    points = await pointsDataset.toArray();
    if(points.length % 2 !== 0) {
        points.pop();
    }
  
    // Shuffling the dataset
    tf.util.shuffle(points);

    // Plotting the scatter plot of the dataset
    plot(points, "Sqft Living");

    // Extract Features (inputs)
    const featureValues = points.map(p => p.x);
    const featureTensor = tf.tensor2d(featureValues, [featureValues.length, 1]);

    // Extract Labels (outputs)
    const labelValues = points.map(p => p.y);
    const labelTensor = tf.tensor2d(labelValues, [labelValues.length, 1]);

    // Normalise features and labels
    normalisedFeature = normalise(featureTensor);
    normalisedLabel = normalise(labelTensor);

    // Memory Management
    featureTensor.dispose();
    labelTensor.dispose();

    // Splitting dataset into training and testing
    [trainingFeatureTensor, testingFeatureTensor] = tf.split(normalisedFeature.tensor, 2);
    [trainingLabelTensor, testingLabelTensor] = tf.split(normalisedLabel.tensor, 2);

    // Showing model Summary
    model = createModel();
    const container2 = document.getElementById('plt1');
    tfvis.show.modelSummary(container2, model);

    // Update status and enable train button
    document.getElementById("model-status").innerHTML = "No model trained";
    document.getElementById("train-button").removeAttribute("disabled");  // from the train()
    document.getElementById("load-button").removeAttribute("disabled");  // from the load()
}

run()
