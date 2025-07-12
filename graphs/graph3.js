async function graph3(){

    const covid19Dataset = tf.data.csv("http://127.0.0.1:5500/datasets/kc_house_data.csv");
    
    // Extract x and y values to plot
    const pointsDataset = covid19Dataset.map(record => ({
        x: record.sqft_living,  // total_vaccination
        y: record.bathrooms        // people_vaccinated
    }));
    
    const points = await pointsDataset.toArray();
    
    const series = ['Original'];
    const data = { values: points, series }
    
    // Render to page
    const container = document.getElementById('plt4');
    tfvis.render.scatterplot(container, data, 
    {
        xLabel: 'Sqft Living',
        yLabel: 'Bedrooms',
        seriesColors: ['green']
    });
}
    
graph3()
