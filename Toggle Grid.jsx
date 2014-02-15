#target photoshop

/*
 *  Toggle Grid
 *  -----------
 *
 *  By gfreezy - https://github.com/gfreezy
 *  Forked from Paul Williamson - https://github.com/squarefrog
 *
 *  This script will look in your active Photoshop document for
 *  a layer or layer set with the name of "GRID" then toggle the layer's
 *  visibility. It also automatically locks the "GRID" layer or layer set.
 *
 */


var gridName = "GRID"; // Change to whatever you call your grid layer set.

function toggleGridLayer() {
    if (app.documents.length > 0) {
        var gridLayer;
        try {
            gridLayer = app.activeDocument.layerSets.getByName(gridName);
        } catch (e) {
            try {
                gridLayer = app.activeDocument.layers.getByName(gridName);
            } catch (e) {
                return;
            }
        }
        if (gridLayer) {
            gridLayer.allLocked = false;
            gridLayer.visible = !gridLayer.visible;
            gridLayer.allLocked = true;
        }
    }
}

toggleGridLayer();
