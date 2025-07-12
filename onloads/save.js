const storageID = `kc-house-dashboard-regression`;

async function save(){
    const saveResults = await model.save(`localstorage://${storageID}`);
    document.getElementById("model-status").innerHTML = `Saved ${saveResults.modelArtifactsInfo.dateSaved})`;
}
