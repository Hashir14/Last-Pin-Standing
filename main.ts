 scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
    ........1111........
    ........1111........
    ........1111........
    ........1111........
    ........1111........
    ........1111........
    ........2222........
    ........1111........
    ........2222........
    ........1111........
    .......111111.......
    ......11111111......
    ......11111111......
    .....1111111111.....
    .....1111111111.....
    ....111111111111....
    ....111111111111....
    ....111111111111....
    ...11111111111111...
    ...11111111111111...
    ...11111111111111...
    ...11111111111111...
    ...11111111111111...
    ...11111111111111...
    ...11111111111111...
    ...11111111111111...
    ....111111111111....
    ....111111111111....
    ....111111111111....
    .....1111111111.....
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
let projectile = sprites.createProjectileFromSide(img`
    . . . f f f f f f f f f f f . .
        . . f f f f f f f f f f f f f .
        . f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f c c b b f f f f f f
        f f f f f f c c c b f f f f f f
        f f f f f f f f f f f f f f f f
        f f c c b b f f f f f f f f f f
        f f c c c b f f f c c b b f f f
        f f f f f f f f f c c c b f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f .
        f f f f f f f f f f f f f f f .
        . f f f f f f f f f f f f f . .
        . f f f f f f f f f f f f f . .
        . . f f f f f f f f f f f . . .
`, 50, 100)
})
game.onUpdateInterval(1000, function() {
    let projectile = sprites.createProjectileFromSide(img`
        . . . f f f f f f f f f f f . .
        . . f f f f f f f f f f f f f .
        . f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f c c b b f f f f f f
        f f f f f f c c c b f f f f f f
        f f f f f f f f f f f f f f f f
        f f c c b b f f f f f f f f f f
        f f c c c b f f f c c b b f f f
        f f f f f f f f f c c c b f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f .
        f f f f f f f f f f f f f f f .
        . f f f f f f f f f f f f f . .
        . f f f f f f f f f f f f f . .
        . . f f f f f f f f f f f . . .
    `,
    randint(-50, 50), randint(-50, 50))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function
(sprite, otherSprite)  {
    sprite.startEffect(effects.spray, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function
(sprite, otherSprite)  {
    sprite.startEffect(effects.spray, 100)
info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function() {
    let projectile = sprites.createProjectileFromSide(img`
        . . . f f f f f f f f f f f . .
        . . f f f f f f f f f f f f f .
        . f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f c c b b f f f f f f
        f f f f f f c c c b f f f f f f
        f f f f f f f f f f f f f f f f
        f f c c b b f f f f f f f f f f
        f f c c c b f f f c c b b f f f
        f f f f f f f f f c c c b f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f .
        f f f f f f f f f f f f f f f .
        . f f f f f f f f f f f f f . .
        . f f f f f f f f f f f f f . .
        . . f f f f f f f f f f f . . .
    `,
    randint(-50, 50), randint(-50, 50))
})
music.spooky.loop()