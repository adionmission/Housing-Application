async function plot (pointsArray, featureName, predictedPointsArray = null) {
    const values = [pointsArray.slice(0, 1000)];
    const series = ["Original"];

    if (Array.isArray(predictedPointsArray)) {
        values.push(predictedPointsArray);  // pushing the value in the scatter plot
        series.push("predicted");
    }
    
    const container1 = document.getElementById('plt2');
    tfvis.render.scatterplot(container1, {values, series},
        {
            xLabel: featureName,
            yLabel: "Price"
        }
    );
}
