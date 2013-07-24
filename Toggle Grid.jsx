#target photoshop

/*
 *  Toggle Grid
 *  -----------
 *
 *  By Paul Williamson - https://github.com/squarefrog
 *
 *  This script will look in your active Photoshop document for
 *  a layer set with the name of "GRID" then toggle the layer's
 *  visibility.
 *
 */


var gridName = "GRID"; // Change to whatever you call your grid layer set.

function toggleGridLayer() {
    if (app.documents.length > 0) {
        var gridLayer = app.activeDocument.layerSets.getByName(gridName);
        gridLayer.visible = !gridLayer.visible;
    }
}

toggleGridLayer();