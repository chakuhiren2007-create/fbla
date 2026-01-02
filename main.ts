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
    export const lostdude = SpriteKind.create()
    export const helpfulcolumbus = SpriteKind.create()
    export const Spritesfromcuba = SpriteKind.create()
    export const notlostdude = SpriteKind.create()
    export const idkwhat2put4name = SpriteKind.create()
    export const SNAKE = SpriteKind.create()
    export const w2 = SpriteKind.create()
    export const nativet = SpriteKind.create()
    export const crop = SpriteKind.create()
    export const w3 = SpriteKind.create()
    export const bandit = SpriteKind.create()
    export const thing = SpriteKind.create()
    export const w4 = SpriteKind.create()
    export const fighter1 = SpriteKind.create()
    export const fighter2 = SpriteKind.create()
    export const fighter3 = SpriteKind.create()
    export const king = SpriteKind.create()
    export const queen = SpriteKind.create()
    export const thing2 = SpriteKind.create()
    export const w5 = SpriteKind.create()
    export const fruit = SpriteKind.create()
    export const animal = SpriteKind.create()
    export const w6 = SpriteKind.create()
    export const carib = SpriteKind.create()
    export const w7 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bandit, function (sprite, otherSprite) {
    info.changeScoreBy(-10000)
    if (info.score() <= 0) {
        game.gameOver(false)
        game.setGameOverMessage(false, "DO BETTER NEXT TIME!")
        game.reset()
    }
})
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
            `, SpriteKind.king)
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
            `, SpriteKind.queen)
        tiles.placeOnTile(Queen, tiles.getTileLocation(8, 17))
        Queen.sayText("I am queen Isabella of Spain. I ruled from 1479 to 1504. We give you money for you to make your boat.", 35000, false)
        King.sayText("I am king Ferdinand of Spain. I ruled from 1479 to 1516. We will give you money for you to make your boat.", 35000, false)
        scaling.scaleByPercent(Queen, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleByPercent(Queen, 50, ScaleDirection.Vertically, ScaleAnchor.Middle)
        pause(15000)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(2000000)
        music.play(music.createSong(hex`0078000408020401001c000f05001202c102c2010004050028000000640028000314000602000406003c004000012206001c00010a006400f4016400000400000000000000000000000000000000025b0004000800021e2508000c000220250c001000012410001400031e242914001800012a18001c00012a1c00200002202420002400012524002800012028002c00031b20272c003000011b30003400012534003800012038003c00012c07001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012c1400180001252400280001253000340001193c004000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800360004000500010a08000900010b0c000d0001001400150001001c001d0001002400250001002c002d0001003400350001003c003d000100`), music.PlaybackMode.LoopingInBackground)
        pause(1000)
        tiles.setCurrentTilemap(tilemap`level3`)
        info.setScore(1500000)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.fighter3, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverMessage(false, "They got you!")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w7, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.w7)
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
    tiles.setCurrentTilemap(tilemap`level12`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit, function (sprite, otherSprite) {
    CColumbos.sayText("Wow, I have never seen this fruit before", 2000, false)
    pause(2000)
    CColumbos.sayText("I must show this to the king and queen.", 2000, false)
    sprites.destroy(pineapple)
    info.changeScoreBy(50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.w2)
    tiles.setCurrentTilemap(tilemap`level5`)
    music.play(music.createSong(hex`0078000408020401001c000f05001202c102c2010004050028000000640028000314000602000406003c004000012206001c00010a006400f4016400000400000000000000000000000000000000025b0004000800021e2508000c000220250c001000012410001400031e242914001800012a18001c00012a1c00200002202420002400012524002800012028002c00031b20272c003000011b30003400012534003800012038003c00012c07001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012c1400180001252400280001253000340001193c004000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800360004000500010a08000900010b0c000d0001001400150001001c001d0001002400250001002c002d0001003400350001003c003d000100`), music.PlaybackMode.LoopingInBackground)
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
    taino_person = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f e f f f f f . . . 
        . . f f f e f e e f e e f . . . 
        . . f f e e 1 e e 1 e e f f . . 
        . . f f e e e e e e e e f f . . 
        . . f f e e e e e e e e f f . . 
        . . f f e e e f f e e e f f . . 
        . f f f f f f e e e f f f f . . 
        . . 7 7 7 7 e e e e 7 7 7 7 . . 
        . . 7 7 7 7 7 e e e 7 7 7 7 e . 
        . e e 7 7 7 7 7 7 7 7 7 7 7 e . 
        e e e . 7 7 7 7 7 7 7 7 7 e e e 
        e e . . . 7 7 7 7 7 7 7 . . e e 
        e . . . . 7 7 7 7 7 7 . . . e e 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.nativet)
    tiles.placeOnTile(taino_person, tiles.getTileLocation(3, 13))
    controller.moveSprite(CColumbos, 100, 100)
    taino_person.sayText("Hello, I am a taino native.", 2000, false)
    pause(2000)
    CColumbos.sayText("Hi, I am Christopher Columbus. I shall name this place Juana.. ", 2000, false)
    pause(2000)
    CColumbos.sayText("I am looking for riches. ", 2000, false)
    pause(2000)
    taino_person.sayText("Lets do this, I will give you crops for a small favor.", 2000, false)
    pause(2000)
    taino_person.sayText("All you have to do is collect 30 crops of tobacco and corn. Can you do it? ", 2000, false)
    pause(2000)
    CColumbos.sayText("Bet", 2000, false)
    tileUtil.setWalls(sprites.castle.tileGrass1, false)
    tileUtil.setWalls(sprites.castle.tilePath5, false)
    tileUtil.setWalls(sprites.castle.tileGrass3, false)
    COrn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . 6 6 . 5 5 5 5 5 5 . 6 6 . . . 
        . 6 6 6 5 5 5 5 5 5 6 6 6 . . . 
        . 6 6 6 6 5 5 5 6 6 6 6 . . . . 
        . . 6 6 6 6 5 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . . 6 6 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.crop)
    tobacco = sprites.create(img`
        . . . . . . . . . 7 7 7 . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . 7 7 . . . 7 . . . . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . 7 7 . . 7 7 7 . . . . . . . . 
        . . 7 7 . 7 . 7 7 . . . . . . . 
        7 7 7 7 7 . 7 7 7 . . . 7 7 . . 
        . . 7 7 7 7 7 7 7 . 7 7 7 7 7 . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . . . . 
        7 7 7 . . . 7 7 7 7 7 7 7 7 . . 
        . . . . . . 7 . 7 . . . . 7 . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        `, SpriteKind.crop)
    tiles.placeOnRandomTile(COrn, sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(tobacco, sprites.castle.tileGrass3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crop, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.crop)
    for (let index = 0; index < 4; index++) {
        COrn = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . 6 6 . 5 5 5 5 5 5 . 6 6 . . . 
            . 6 6 6 5 5 5 5 5 5 6 6 6 . . . 
            . 6 6 6 6 5 5 5 6 6 6 6 . . . . 
            . . 6 6 6 6 5 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.crop)
        tobacco = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 . . . 6 6 6 . . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            . 6 . . . . 6 6 6 6 6 . . . . . 
            . 6 6 6 6 . 6 6 6 6 6 . 6 6 . . 
            . 6 6 6 6 6 . 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 . 6 6 e . . . 6 6 . 
            . . . . . . . e e e . . . . 6 . 
            . . . . . . . e e e . . . . . . 
            . . . . . . . e e e . . . . . . 
            `, SpriteKind.crop)
        tiles.placeOnRandomTile(COrn, sprites.castle.tileGrass3)
        tiles.placeOnRandomTile(tobacco, sprites.castle.tileGrass3)
    }
    info.changeScoreBy(1)
    if (info.score() >= 1500080) {
        sprites.destroyAllSpritesOfKind(SpriteKind.crop)
        CColumbos.sayText("Lets go back to the native and give him the crops!", 5000, false)
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
        `, SpriteKind.Spritesfromcuba)
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
        . f e e e 1 f e e f 1 e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.Spritesfromcuba)
    tiles.placeOnTile(people2, tiles.getTileLocation(4, 13))
    people2.sayText("Hello! We are the Indigenous Nahua people", 5000, false)
    pause(4000)
    CColumbos.sayText("Hi! I'm Christopher Columbus!", 5000, false)
    pause(4000)
    CColumbos.sayText("Nice to meet you!", 2000, false)
    pause(4000)
    CColumbos.sayText("Wow, can't believe I am in Asia! I am going to call this place San Salvador!", 2000, false)
    pause(4000)
    CColumbos.sayText("I'm going to search for gold!", 2000, false)
    pause(2000)
    people2.sayText("We are the native Nahua people. If you want gold, listen to us.", 2000, false)
    pause(2000)
    people2.sayText("We are missing one of our people.", 5000, false)
    pause(4000)
    people2.sayText("We will give you gold if you can find him. Deal?", 5000, false)
    pause(5000)
    CColumbos.sayText("Deal.", 5000, false)
    tileUtil.setWalls(sprites.castle.tileGrass1, false)
    lostdude = sprites.create(img`
        . . . . f f f f . . . . 
        f . f f f f f f f f . . 
        . 2 f f f f f f f f f . 
        f f 2 f f f f f f f f f 
        f f f 1 f f f f f f f f 
        f f f f f f f f f f f f 
        f e e e e e e e e e e f 
        f e e f f e e f f e 2 f 
        f e e f f e e f f 2 e f 
        . f e e e e e e 2 e f . 
        . f f e e e e e e f f . 
        e e f 1 1 1 1 1 1 f e e 
        e e f 1 1 1 1 1 1 f e e 
        e e f 6 6 6 6 6 6 f e e 
        . . . c c c c c c . . . 
        . . . c c . . c c . . . 
        `, SpriteKind.lostdude)
    tiles.placeOnRandomTile(lostdude, sprites.castle.tileGrass3)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.nativet, function (sprite, otherSprite) {
    if (info.score() >= 1500080) {
        taino_person.sayText("Thank you, I was too lazy to get those crops. For payment, I will give you half of these crops. ", 2000, false)
        info.changeScoreBy(-30)
        pause(2000)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        pause(2000)
        info.changeScoreBy(15)
        CColumbos.sayText("I can't wait to show the king and queen the goods that I found here.", 5000, false)
        pause(2000)
        CColumbos.sayText("Time to go back home.", 5000, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.nativet)
        tiles.setCurrentTilemap(tilemap`level3`)
        animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
        Thissavedmylifebro = sprites.create(img`
            9 
            `, SpriteKind.w3)
        CColumbos.setKind(SpriteKind.Player)
        CColumbos.setImage(img`
            ............fff...............
            ............fddfd.............
            ..........ffddddf.............
            .......ffffffddddfd...........
            ......ff2222ffffdff...........
            ......f2222222efddff..........
            ......f2222222eedddff.........
            .....ff2222222eeddddff........
            .....fffffff22eedddddff.......
            ......fddddfffeeddddddf.......
            .....fddddddddeedddddddf......
            ....fdddddddddeedddddddff.....
            ...ffdddddddddeeddddddddf.....
            ..ffddddddddddeeddddddddff....
            ..fdddddddddddeedddddddddff...
            ffddddddddddddeefffdddddddf...
            ffddddfffffffeeefffffffffff...
            .ffffff.....eeee............ff
            .ffffffffffffeee...........fff
            ffeeeeeeeeeeffffffffffffffffef
            feeeeeeeeeeeefeeeeeeeffffeeeef
            feeeeeeeeeeeeeeeeeeeeeeeeeeeff
            feeeeeeeeeeeeeeeeeeeeeeeeeeff.
            ffeeeeeeeeeeeeeeeeeeeeeeeeeff.
            ffeeeeeeeeeeeeeeeeeeeeeeeefff.
            ffeeeeeeeeeeeeeeeeeeeeeeefff..
            efeeeeeeeeeeeeeeeeeeeeefff....
            .ffffeeeeeeeeeeeeeeeeeffff....
            ....fffeeeeeeeeeeeeeefff......
            .......fffffffffffffff........
            `)
        tiles.placeOnTile(Thissavedmylifebro, tiles.getTileLocation(87, 10))
        tiles.placeOnTile(CColumbos, tiles.getTileLocation(0, 10))
        controller.moveSprite(CColumbos, 100, 0)
        CColumbos.follow(Thissavedmylifebro, 100)
    }
})
sprites.onOverlap(SpriteKind.lostdude, SpriteKind.Spritesfromcuba, function (sprite, otherSprite) {
    lostdude.follow(people2, 100)
    people.sayText("Thank you so much!", 2000, false)
    pause(3000)
    people.sayText("Here's your reward.", 2000, false)
    pause(2000)
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408020401001c000f05001202c102c2010004050028000000640028000314000602000406003c004000012206001c00010a006400f4016400000400000000000000000000000000000000025b0004000800021e2508000c000220250c001000012410001400031e242914001800012a18001c00012a1c00200002202420002400012524002800012028002c00031b20272c003000011b30003400012534003800012038003c00012c07001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012c1400180001252400280001253000340001193c004000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800360004000500010a08000900010b0c000d0001001400150001001c001d0001002400250001002c002d0001003400350001003c003d000100`), music.PlaybackMode.LoopingInBackground)
    info.changeScoreBy(50)
    CColumbos.sayText("Let's go explore somewhere else!", 5000, false)
    if (info.score() > 1500050) {
        info.setScore(1500050)
    }
    pause(2000)
    sprites.destroy(lostdude)
    lostdude.setFlag(SpriteFlag.Invisible, true)
    sprites.destroyAllSpritesOfKind(SpriteKind.Spritesfromcuba)
    sprites.destroyAllSpritesOfKind(SpriteKind.randomtree)
    tiles.setCurrentTilemap(tilemap`level3`)
    animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
    Thissavedmylifebro = sprites.create(img`
        9 
        `, SpriteKind.w2)
    controller.moveSprite(CColumbos, 100, 0)
    CColumbos.setKind(SpriteKind.Player)
    tiles.placeOnTile(Thissavedmylifebro, tiles.getTileLocation(0, 10))
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(99, 9))
    CColumbos.setImage(assets.image`boat`)
    CColumbos.follow(Thissavedmylifebro)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.lostdude, function (sprite, otherSprite) {
    CColumbos.sayText("Hey! Your people told me to look for you.", 2000, false)
    CColumbos.setKind(SpriteKind.helpfulcolumbus)
    pause(5000)
    CColumbos.sayText("I'll bring you back to them. Follow me!", 5000, false)
    pause(2000)
    lostdude.follow(CColumbos, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w6, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.w6)
    tiles.setCurrentTilemap(tilemap`level6`)
    controller.moveSprite(CColumbos)
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
    scapegoat.setKind(SpriteKind.thing2)
    tiles.placeOnTile(scapegoat, tiles.getTileLocation(13, 21))
    CColumbos.sayText("Yay, I am back. Click the blue dot at the entrance of the castle. ", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fighter2, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverMessage(false, "They got you!")
    game.reset()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.thing2, function (sprite, otherSprite) {
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
        `, SpriteKind.king)
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
        `, SpriteKind.queen)
    tiles.placeOnTile(King, tiles.getTileLocation(3, 17))
    tiles.placeOnTile(Queen, tiles.getTileLocation(8, 17))
    scaling.scaleByPixels(Queen, 50, ScaleDirection.Vertically, ScaleAnchor.Middle)
    scaling.scaleByPixels(Queen, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Queen.sayText("Welcome back, what treasures did you find?", 10000, false)
    pause(2000)
    CColumbos.sayText("I got these exotic birds and fruit from the island of Guadelope.", 5000, false)
    pause(2000)
    King.sayText("Is that it? No gold?", 5000, false)
    pause(2000)
    CColumbos.sayText("Sadly, the island of Dominica, was filled with dangerous natives.", 5000, false)
    pause(2000)
    Queen.sayText("That is not enough, go get more goods.", 5000, false)
    pause(2000)
    CColumbos.sayText("Ugh, fine.", 5000, false)
    pause(2000)
    sprites.destroyAllSpritesOfKind(SpriteKind.king)
    sprites.destroyAllSpritesOfKind(SpriteKind.thing2)
    sprites.destroyAllSpritesOfKind(SpriteKind.queen)
    tiles.setCurrentTilemap(tilemap`level3`)
    animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
    controller.moveSprite(CColumbos, 100, 0)
    CColumbos.setImage(assets.image`boat`)
    CColumbos.setKind(SpriteKind.Player)
    Thissavedmylifebro = sprites.create(img`
        9 
        `, SpriteKind.w7)
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(99, 10))
    CColumbos.follow(Thissavedmylifebro, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fighter1, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverMessage(false, "They got you!")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.animal, function (sprite, otherSprite) {
    CColumbos.sayText("Wow, what an interesting specimen of bird.", 2000, false)
    pause(2000)
    CColumbos.sayText("I must show this to the king and queen.", 2000, false)
    sprites.destroy(parrot)
    info.changeScoreBy(50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w4, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level10`)
    controller.moveSprite(CColumbos, 100, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.w4)
    sprites.destroyAllSpritesOfKind(SpriteKind.king)
    sprites.destroyAllSpritesOfKind(SpriteKind.queen)
    sprites.destroyAllSpritesOfKind(SpriteKind.thing)
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
    kalinagao1 = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f e e e e f f . . . . . . 
        . f f e e e e e e f f . . . . d 
        f f f f 4 e e e f f f f . . d d 
        f f f 4 4 4 e e f f f f . . d d 
        f f f 4 4 4 4 e e f f f . . e e 
        f 4 e 4 4 4 4 4 4 e 4 f . e e . 
        f 4 4 f f 4 4 f f 4 4 f . e e . 
        f e 4 d d d d d d 4 e f e e e . 
        9 9 e d d b b d d e f 9 e e . . 
        . 9 9 e 4 4 7 7 7 9 9 9 e e . . 
        e 4 f b 7 7 7 7 7 f 4 e e e . . 
        4 d f 7 7 7 7 7 1 f d e e . . . 
        4 4 9 7 7 7 7 6 6 9 4 e e . . . 
        . . . f f f f f f . . . . . . . 
        . . . f f . . f f . . . . . . . 
        `, SpriteKind.fighter1)
    kalingao2 = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f f f f f f c f f f . . . . . 
        f f f f f f c c f f f c . . . . 
        f f f c f f f f f f f c . . . . 
        c c c f f f e e f f c c . . . . 
        f f f f f e e f f c c f . d e e 
        f f f b f e e f b f f f d d e d 
        . f 4 1 f 4 4 f 1 4 f . d d e d 
        . 7 e 4 4 4 4 4 4 e 9 d d e d d 
        . 7 7 7 e e e e 9 9 9 . . e d d 
        f 7 7 7 7 7 7 7 9 9 9 f e e . . 
        e 4 f 7 7 7 7 7 7 f 4 e e . . . 
        e e f 6 7 7 6 6 6 f e e e . . . 
        . . . f f f f f f . . . . . . . 
        . . . f f . . f f . . . . . . . 
        `, SpriteKind.fighter2)
    kalinagao3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f e e e e e f . . . . . 
        . . . f f e 1 e 1 e f . . e e e 
        . . . f f e e e e e f . . e e e 
        . . . f e e e e e e e f . e e e 
        . . . f f f e e e f f f . . f . 
        . . . 7 7 7 e e e e 6 6 . f f . 
        . . e 7 7 7 7 e 6 6 6 6 e f . . 
        . . e e 7 7 7 7 6 6 e e e f . . 
        . . e e 7 7 7 7 7 e e . f f . . 
        . . . . 6 7 7 7 7 7 7 . . . . . 
        . . . . e e e e e 7 7 . . . . . 
        . . . . e e . . . e e . . . . . 
        `, SpriteKind.fighter3)
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(6, 14))
    tiles.placeOnTile(kalingao2, tiles.getTileLocation(10, 14))
    tiles.placeOnTile(kalinagao3, tiles.getTileLocation(10, 16))
    tiles.placeOnTile(kalinagao1, tiles.getTileLocation(9, 13))
    pause(2000)
    CColumbos.sayText("I have never seen this island before, i shall call it Dominica!", 5000, false)
    pause(2000)
    kalinagao1.sayText("We are the Kalinago people", 2000, false)
    pause(2000)
    kalinagao3.sayText("Who are you!", 2000, false)
    pause(2000)
    kalingao2.sayText("Intruders are not allowed!", 2000, false)
    pause(2000)
    kalinagao1.sayText("You shall pay", 2000, false)
    pause(2000)
    CColumbos.sayText("Oh no! I cannot let them catch me! ", 2000, false)
    pause(2000)
    CColumbos.sayText("Survive 20 seconds without them catching you", 2000, false)
    tileUtil.setWalls(sprites.castle.tileGrass2, false)
    pause(2000)
    kalinagao1.follow(CColumbos, 82)
    kalingao2.follow(CColumbos, 85)
    kalinagao3.follow(CColumbos, 87)
    pause(20000)
    sprites.destroyAllSpritesOfKind(SpriteKind.fighter1)
    sprites.destroyAllSpritesOfKind(SpriteKind.fighter2)
    sprites.destroyAllSpritesOfKind(SpriteKind.fighter3)
    info.changeScoreBy(50)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    CColumbos.sayText("Phew, I survived!", 5000, false)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level3`)
    animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
    controller.moveSprite(CColumbos, 100, 0)
    CColumbos.setImage(assets.image`boat`)
    CColumbos.setKind(SpriteKind.Player)
    Thissavedmylifebro = sprites.create(img`
        9 
        `, SpriteKind.w5)
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(99, 10))
    tiles.placeOnTile(Thissavedmylifebro, tiles.getTileLocation(0, 10))
    CColumbos.follow(Thissavedmylifebro, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.thing, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.bandit)
    Queen.sayText("Congratulations for returning from the trip!", 5000, false)
    pause(5000)
    King.sayText("What treasures did you happen to fall upon?", 2000, false)
    pause(5000)
    CColumbos.sayText("I managed to gather gold from the newly named island of San Salvador.", 2000, false)
    pause(5000)
    CColumbos.sayText("I also got some new crops from a Taino Native. ", 5000, false)
    pause(5000)
    King.sayText("We will send you to Asia again. in hopes of getting new treasures. ", 2000, false)
    pause(2000)
    CColumbos.sayText("Ok I will set sail at once. ", 2000, false)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level3`)
    animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
    CColumbos.setImage(assets.image`boat`)
    CColumbos.setKind(SpriteKind.Player)
    Thissavedmylifebro = sprites.create(img`
        9 
        `, SpriteKind.w4)
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(99, 10))
    tiles.placeOnTile(Thissavedmylifebro, tiles.getTileLocation(0, 10))
    CColumbos.follow(Thissavedmylifebro, 100)
    controller.moveSprite(CColumbos, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w5, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level13`)
    sprites.destroyAllSpritesOfKind(SpriteKind.w5)
    CColumbos.setKind(SpriteKind.Player)
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
    carib = sprites.create(img`
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . 1 . . . 
        . . . f f f f f f f f 2 f . . . 
        . . f f f f f f f f 1 f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f e e e e e e e e e e e e f . 
        . f e e f b f e e f b f e e f . 
        . f e e e 1 f e e f 1 e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e e f 7 7 7 7 7 7 f e e . . 
        . . e e f 7 7 7 7 7 7 f e e . . 
        . . e e f 7 7 7 7 7 7 f e e . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.carib)
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(1, 18))
    tiles.placeOnTile(carib, tiles.getTileLocation(4, 18))
    carib.sayText("Hello, I am a native Carib on the Island of Guadelope.", 5000, false)
    pause(2000)
    CColumbos.sayText("Nice to meet you, I am Christopher Columbus, an explorer. ", 2000, false)
    pause(2000)
    CColumbos.sayText("I am looking for gold.", 2000, false)
    pause(2000)
    carib.sayText("We do not have any of that around here, however, you can search for treasures around here. ", 2000, false)
    pause(2000)
    CColumbos.sayText("Ok, off I go. ", 2000, false)
    tileUtil.setWalls(sprites.castle.tilePath5, false)
    pineapple = sprites.create(img`
        . . . . 7 7 . 7 . . . 7 7 . . . 
        7 7 7 7 . 7 7 7 . . 7 7 7 . . . 
        . . 7 7 7 7 7 7 . 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 5 . . . . . 
        . . . . . 5 5 5 7 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `, SpriteKind.fruit)
    parrot = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .......77777....................
        ......77777777..................
        .....7777777777.................
        ....ff111111777.................
        ...fff11111ff17.................
        ...ffff1111ff179................
        ..ffffff11111119................
        ..ffffff111111199...............
        ..fff.ff1111111999999...........
        ..fff.56111111999999999.........
        .....556611199999999999.........
        .....5555666999999999999........
        .....55555559999999999999.......
        .....55555555999999999999.......
        .....55555555559999999999999....
        .....5555555555559999999999999..
        ......5555555555555599999999999.
        .......55555555555555555999999..
        ........555555555555555999......
        .........bb55b555555555.........
        .........bb.bb..................
        `, SpriteKind.animal)
    tiles.placeOnRandomTile(pineapple, sprites.castle.tileGrass1)
    tiles.placeOnRandomTile(parrot, sprites.castle.tileGrass1)
    if (info.score() + 100 == info.score()) {
        pause(2000)
        CColumbos.sayText("These treasures are not gold, but they are exotic", 2000, false)
        pause(2000)
        tiles.setCurrentTilemap(tilemap`level0`)
        animation.stopAnimation(animation.AnimationTypes.All, CColumbos)
        controller.moveSprite(CColumbos, 100, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.carib)
        CColumbos.setImage(assets.image`boat`)
        CColumbos.setKind(SpriteKind.Player)
        Thissavedmylifebro = sprites.create(img`
            9 
            `, SpriteKind.w6)
        tiles.placeOnTile(CColumbos, tiles.getTileLocation(99, 10))
        tiles.placeOnTile(Thissavedmylifebro, tiles.getTileLocation(0, 10))
        CColumbos.follow(Thissavedmylifebro, 100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.w3, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level6`)
    sprites.destroyAllSpritesOfKind(SpriteKind.w3)
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
    tiles.placeOnTile(CColumbos, tiles.getTileLocation(2, 7))
    controller.moveSprite(CColumbos, 100, 100)
    CColumbos.sayText("Finally I am back, that voyage took a long time ", 2000, false)
    pause(2000)
    CColumbos.sayText("Hopefully a bandit does not come to steal my goods.", 5000, false)
    pause(2000)
    bandit = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f 1 f f f f 1 f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f 1 1 1 1 f f f . 
        . f f f 1 1 1 1 f f f . 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.bandit)
    scapegoat = sprites.create(img`
        9 9 9 9 
        9 9 9 9 
        9 9 9 9 
        9 9 9 9 
        `, SpriteKind.thing)
    tiles.placeOnTile(bandit, tiles.getTileLocation(7, 7))
    tiles.placeOnTile(scapegoat, tiles.getTileLocation(13, 21))
    bandit.sayText("give me the goods!!!")
    pause(2000)
    CColumbos.sayText("Oh no, get to the castle and touch the blue dot to stop him.", 5000, false)
    pause(1000)
    bandit.follow(CColumbos, 75)
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
        `, SpriteKind.king)
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
        `, SpriteKind.queen)
    tiles.placeOnTile(King, tiles.getTileLocation(3, 17))
    tiles.placeOnTile(Queen, tiles.getTileLocation(8, 17))
    scaling.scaleByPercent(Queen, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(Queen, 50, ScaleDirection.Vertically, ScaleAnchor.Middle)
})
let bandit: Sprite = null
let carib: Sprite = null
let kalinagao3: Sprite = null
let kalingao2: Sprite = null
let kalinagao1: Sprite = null
let parrot: Sprite = null
let scapegoat: Sprite = null
let lostdude: Sprite = null
let people2: Sprite = null
let people: Sprite = null
let randomtrees: Sprite = null
let tobacco: Sprite = null
let COrn: Sprite = null
let taino_person: Sprite = null
let pineapple: Sprite = null
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
CColumbos.sayText("Collect 5 pieces of wood")
pause(3000)
CColumbos.sayText("Once you get that, follow the gravel path to the castle", 5000, false)
pause(5000)
CColumbos.sayText("We will use the wood to make a boat, but we also need money.", 5000, false)
