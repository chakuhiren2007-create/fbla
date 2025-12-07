// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006060606060606060606060606060606060202020202020202020202020202060602020202020302020201020202020606030205020303030402020302040206060302020303020303030203030202060602010203030303030303030302020606020203030203030103050303030206060202020202050303030303030303060602020202020203030303030304030606020202040202030302020303030306060202020202030202030203030303060602020502020202030503030303030606020202020201020203030103030306060202020202020202020203030304060602020202020204020202020202030606060606060606060606060606060606`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . . . . 2 . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.swamp.swampTile2,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
