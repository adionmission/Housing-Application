function createModel() {
    model = tf.sequential();

    model.add(tf.layers.dense({
        units: 10,
        useBias: true,
        activation: 'relu',
        inputDim: 1
    }));
      model.add(tf.layers.dense({
        units: 10,
        useBias: true,
        activation: 'relu'
    }));
    model.add(tf.layers.dense({
      units: 1,
      useBias: true,
      activation: 'sigmoid'
    }));

    //const opt = tf.train.adam(0.001);
    model.compile({
        optimizer: 'adam',
        loss: 'meanSquaredError',
    })

    return model;
}
