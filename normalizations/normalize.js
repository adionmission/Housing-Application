function normalise(tensor, previousMin = null, previousMax = null){
    const min = previousMin || tensor.min();
    const max = previousMax || tensor.max();

    const normalisedTensor = tensor.sub(min).div(max.sub(min));
    
    return {
        tensor: normalisedTensor,
        min,
        max
    };
}
