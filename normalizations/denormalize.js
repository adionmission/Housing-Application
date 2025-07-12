function denormalise(tensor, min, max) {
    const denormalisedTensor = tensor.mul(max.sub(min)).add(min);
    return denormalisedTensor;
}