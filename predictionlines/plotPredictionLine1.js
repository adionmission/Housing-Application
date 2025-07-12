async function plotPredictionLine () {
    const [xs, ys] = tf.tidy(function(){   // cleaning up tensors from memory
   
        const normalisedXs = tf.linspace(0, 1, 100);
        const normalisedYs = model.predict(normalisedXs.reshape([100, 1]));
   
        const xs = denormalise(normalisedXs, normalisedFeature.min, normalisedFeature.max);
        const ys = denormalise(normalisedYs, normalisedLabel.min, normalisedLabel.max);
   
        return [ xs.dataSync(), ys.dataSync() ];
    });
   
    const predictedPoints = Array.from(xs).map((val, index) => {
        return {x: val, y: ys[index]}
    });
   
    await plot(points, "Sqft Living", predictedPoints);
}
