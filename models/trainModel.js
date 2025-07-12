async function trainModel (model, trainingFeatureTensor, trainingLabelTensor) {

    const container3 = document.getElementById('plt6');
    const { onBatchEnd, onEpochEnd } = tfvis.show.fitCallbacks(
      container3,
      ['loss']
    )

    return model.fit(trainingFeatureTensor, trainingLabelTensor, {
      batchSize: 32,
      epochs: 11,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd,
        onEpochBegin: async function(){
            await plotPredictionLine();
        }
      }
    });
}
