enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const tree = SpriteKind.create()
    export const Boat = SpriteKind.create()
    export const W = SpriteKind.create()
    export const randomtree = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CColumbos,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tree, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.tree)
    for (let index = 0; index < 4; index++) {
        hfhrfth = sprites.create(img`
            ........................................
            ........................................
            .......................6............6...
            ......................676..........676..
            .....................6776e........6776..
            ........bbccee......67776effffffe67776..
            .......bdddbceeeeeeee6668ceeeccfff6768ee
            ......bdbbbdbceeeeeeee668eeeeeeeeee668ec
            .....bdbbdbbdceeeeeeee67776eeeeeeee67776
            .....bdbdbdbdbceeeeeee6777eeeeeeeee6776e
            ....bdbdbdbdbdceeeeeeee76eeeeeeeeeee76ee
            ....bdbdbdbdbdceeeeeeee68eeeeeeeeeee78ee
            ....bdbdbdbdbdceeeeeeee68eeeeeeeeeee78ee
            ....bdbdbdbdbdfeeeeeeee76eeeeeeeeeee76ee
            .....bdbdbdbdbfeeeeeee6777eeeeeeeee6777e
            .....bdbbdbbdfeeeeeeee66776eeeeeeee66776
            ......bdbbbdbfeeeeeec66eeeeeeeeeee66eeee
            .......bdddbfeeeeecff778eeeeeeccff77eeee
            ........bbcceeeccfc.67768........67768..
            .....................6776.........6776..
            ......................676..........676..
            .......................6............6...
            ........................................
            ........................................
            `, SpriteKind.tree)
        tiles.placeOnRandomTile(hfhrfth, sprites.castle.tileGrass3)
    }
    if (info.score() >= 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.tree)
        info.setScore(5)
        tiles.setCurrentTilemap(tilemap`level6`)
        King = sprites.create(img`
            ........ffffffffff.................
            ......ffffffffffffff...............
            ....ffffffffffffffffff.............
            ....fffffffffffffffffff............
            .....ffffffffffffffffff............
            ......fffffffffffffffff............
            ......ffff4444444ffff..............
            .......eef44444444ee...............
            .......ee44f444f44ee...............
            .......ee444444444ee...............
            .......eee44444444ee...............
            ........ee44fff44eee...............
            ........eeee4444eeee...............
            .........eeeeeeeeeee...............
            ...........444444..................
            ........eeeeeffeeeeee..............
            .......eeeeeeffeeeeee..............
            ......eeeeeeeffeeeeeee.............
            ......eeeeeeeffeeeeeee.............
            ......eeeeeeeffeeeeeeee............
            ......eeeeeeeffeeeeeeee............
            ......eee.eeeeeeeee.eee............
            .....eeee.eeeeeeeee.eee............
            .....eeee.eeeeeeeee.eee............
            ...eeeeee.eeeeeeeee.eee............
            ...ee.eeeeeeeeeeeee.eee............
            .....4444.dddddddddeeeee...........
            .....4.44ddddddddddeeeee...........
            ......44.ddddd.dddd.4eee...........
            .........ddddd.dddd................
            ..........dddd.ddddd...............
            ..........dddd.ddddd...............
            ..........dddd.ddddd...............
            ..........1111.11dd................
            ..........1111.1111................
            `, SpriteKind.Player)
        tiles.placeOnTile(King, tiles.getTileLocation(3, 17))
        Queen = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . 5 5 5 2 5 5 5 5 . . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e e f f f e e e f . . . 
            . . . e e f f d d f e e f . . . 
            . . f e f d f d d f d e e f . . 
            . . f e f d 3 d d 3 d f e f . . 
            . . f e e f d d d d f e e f . . 
            . f e e f e f f f f e f e e f . 
            . . f f e e e e e e e e f f . . 
            . . f e e e e e e e f e e f . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Queen, tiles.getTileLocation(8, 17))
        Queen.sayText("I am queen Isabella of Spain. I ruled from 1479 to 1504. We give you money for you expedition ", 35000, false)
        King.sayText("I am king Ferdinand of Spain. I ruled from 1479 to 1516. We will give you money for your expedition  ", 35000, false)
        scaling.scaleByPercent(Queen, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleByPercent(Queen, 50, ScaleDirection.Vertically, ScaleAnchor.Middle)
        pause(15000)
        info.changeScoreBy(1999995)
        tiles.setCurrentTilemap(tilemap`level3`)
        info.setScore(0)
        animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
        Thissavedmylifebro = sprites.create(img`
            9 
            `, SpriteKind.W)
        tiles.placeOnTile(Thissavedmylifebro, tiles.getTileLocation(0, 10))
        CColumbos.setImage(assets.image`boat`)
        tiles.placeOnTile(CColumbos, tiles.getTileLocation(87, 10))
        controller.moveSprite(CColumbos, 100, 0)
        Queen.setFlag(SpriteFlag.Invisible, true)
        King.setFlag(SpriteFlag.Invisible, true)
        CColumbos.follow(Thissavedmylifebro)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.W, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.W)
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020401001c000f05001202c102c2010004050028000000640028000314000602000406003c004000012206001c00010a006400f4016400000400000000000000000000000000000000025b0004000800021e2508000c000220250c001000012410001400031e242914001800012a18001c00012a1c00200002202420002400012524002800012028002c00031b20272c003000011b30003400012534003800012038003c00012c07001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012c1400180001252400280001253000340001193c004000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800360004000500010a08000900010b0c000d0001001400150001001c001d0001002400250001002c002d0001003400350001003c003d000100`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level4`)
    CColumbos.setImage(img`
        . . . . . . . f f f . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . e e e f f f 4 4 f f f e e e . 
        . e e e 4 1 4 d d 4 1 4 e e e . 
        . . f e e d d d d d d e e f . . 
        . . . f e e f f f f e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    controller.moveSprite(CColumbos, 100, 100)
    for (let index = 0; index < 4; index++) {
        randomtrees = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.randomtree)
        tiles.placeOnRandomTile(randomtrees, sprites.castle.tilePath5)
    }
    people = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f . 
        . f f f f f e e f f f f f . 
        . f f f f e e e e f f f f . 
        . f f f b f e e f b f f f . 
        . f f e 1 f e e f 1 e f f . 
        . . f f e e e e e e f f . . 
        . . e f e e e e e e f e . . 
        . e e f 1 1 1 1 1 1 f e e . 
        . e e f 1 1 1 1 1 1 f e e . 
        . e e f 6 6 6 6 6 6 f e e . 
        . . . . 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 . . . 
        . . . . e e . . e e . . . . 
        . . . . e e . . e e . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(people, tiles.getTileLocation(3, 13))
    people2 = sprites.create(img`
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . 1 . . . 
        . . . f f f f f f f f 2 f . . . 
        . . f f f f f f f f 1 f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f e e e e e e e e e e e e f . 
        . f e e f b f e e f b f e e f . 
        . . e e e 1 f e e f 1 e e e . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(people2, tiles.getTileLocation(4, 13))
    people2.sayText("Hello! We are the Indigenous Taíno people")
    pause(5000)
    CColumbos.sayText("Hi! I'm Christopher columbus!")
    pause(5000)
    CColumbos.sayText("Nice to meet you!")
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CColumbos,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CColumbos,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CColumbos,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
let people2: Sprite = null
let people: Sprite = null
let randomtrees: Sprite = null
let Thissavedmylifebro: Sprite = null
let Queen: Sprite = null
let King: Sprite = null
let hfhrfth: Sprite = null
let CColumbos: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
CColumbos = sprites.create(img`
    . . . . . . . f f f . . . . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f f . . 
    . . . f f f f f f f f f f f . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . e e e f f f 4 4 f f f e e e . 
    . e e e 4 1 4 d d 4 1 4 e e e . 
    . . f e e d d d d d d e e f . . 
    . . . f e e f f f f e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(CColumbos)
controller.moveSprite(CColumbos)
CColumbos.setPosition(65, 100)
CColumbos.setBounceOnWall(true)
for (let index = 0; index < 7; index++) {
    hfhrfth = sprites.create(img`
        ........................................
        ........................................
        .......................6............6...
        ......................676..........676..
        .....................6776e........6776..
        ........bbccee......67776effffffe67776..
        .......bdddbceeeeeeee6668ceeeccfff6768ee
        ......bdbbbdbceeeeeeee668eeeeeeeeee668ec
        .....bdbbdbbdceeeeeeee67776eeeeeeee67776
        .....bdbdbdbdbceeeeeee6777eeeeeeeee6776e
        ....bdbdbdbdbdceeeeeeee76eeeeeeeeeee76ee
        ....bdbdbdbdbdceeeeeeee68eeeeeeeeeee78ee
        ....bdbdbdbdbdceeeeeeee68eeeeeeeeeee78ee
        ....bdbdbdbdbdfeeeeeeee76eeeeeeeeeee76ee
        .....bdbdbdbdbfeeeeeee6777eeeeeeeee6777e
        .....bdbbdbbdfeeeeeeee66776eeeeeeee66776
        ......bdbbbdbfeeeeeec66eeeeeeeeeee66eeee
        .......bdddbfeeeeecff778eeeeeeccff77eeee
        ........bbcceeeccfc.67768........67768..
        .....................6776.........6776..
        ......................676..........676..
        .......................6............6...
        ........................................
        ........................................
        `, SpriteKind.tree)
    tiles.placeOnRandomTile(hfhrfth, sprites.castle.tileGrass3)
}
CColumbos.sayText("Hi Nice to Meet You", 2000, false)
pause(3000)
CColumbos.sayText("I'm Christopher Columbus", 5000, false)
pause(3000)
music.play(music.createSong(hex`0064000408020106001c00010a006400f4016400000400000000000000000000000000000000023b0000000400012504000800012408000c0002202510001400011d1c0020000322252920002400012524002800012528002c00031e24253c004000011e`), music.PlaybackMode.LoopingInBackground)
CColumbos.sayText("Collect 5 pieces of wood")
pause(3000)
CColumbos.sayText("Once you get that, follow the gravel path to the castle", 5000, false)
pause(5000)
