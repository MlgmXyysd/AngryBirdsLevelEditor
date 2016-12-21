blocks = {
  RedBird: {
    allowRoll: true,
    collisionSound: "bird_01_collision",
    controllable: true,
    damageFactors: "DefaultDamageFactors",
    density: 6,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 1,
    launchSound: "bird_01_flying",
    material: "red",
    particles: "redBuff",
    particlesTrail: "redBirdTrail",
    radius: 0.85000002384186,
    restitution: 0.43000000715256,
    selectionSound: "bird_01_select",
    specialty: "SOUND",
    sprite: "BIRD_RED",
    spriteAction: "HUD_ICON_NOTE",
    spriteBlink: "BIRD_RED_BLINK",
    spriteCollision: "BIRD_RED_COLLISION",
    spriteFlying: "BIRD_RED_FLYING",
    spriteScore: "10K_RED",
    spriteYell: "BIRD_RED_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_1",
    type: "circle",
    unselectionSound: "bird_01_unselect",
    useLegacyCollisionPath: true 
  },
  YellowBird: {
    allowRoll: true,
    collisionSound: "bird_03_collision",
    controllable: true,
    damageFactors: "YellowBirdDamageFactors",
    density: 6,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 3,
    launchSound: "bird_03_flying",
    material: "wood",
    particles: "yellowBuff",
    particlesTrail: "yellowBirdTrail",
    radius: 0.80000001192093,
    restitution: 0.23000000417233,
    selectionSound: "bird_03_select",
    specialty: "BOOST",
    sprite: "BIRD_YELLOW",
    spriteAction: "HUD_ICON_BOOST",
    spriteBlink: "BIRD_YELLOW_BLINK",
    spriteCollision: "BIRD_YELLOW_COLLISION",
    spriteFlying: "BIRD_YELLOW_FLYING",
    spriteScore: "10K_YELLOW",
    spriteYell: "BIRD_YELLOW_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_3",
    type: "circle",
    unselectionSound: "bird_03_unselect",
    useLegacyCollisionPath: true 
  },
  SmallBlueBird: {
    allowRoll: true,
    collisionSound: "bird_02_collision",
    controllable: true,
    damageFactors: "BlueBirdDamageFactors",
    density: 4.5,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 2,
    launchSound: "bird_02_flying",
    material: "light",
    particles: "blueBuff",
    particlesTrail: "blueBirdTrail",
    radius: 0.60000002384186,
    restitution: 0.25,
    selectionSound: "bird_02_select",
    specialty: "CLUSTER_BOMB",
    sprite: "BIRD_BLUE",
    spriteAction: "HUD_ICON_SPLIT",
    spriteBlink: "BIRD_BLUE_BLINK",
    spriteCollision: "BIRD_BLUE_COLLISION",
    spriteFlying: "BIRD_BLUE",
    spriteScore: "10K_BLUE",
    spriteYell: "BIRD_BLUE_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_2",
    type: "circle",
    unselectionSound: "bird_02_unselect",
    useLegacyCollisionPath: true 
  },
  BoomerangBird: {
    allowRoll: true,
    boomerangHorizontalForce: -50,
    boomerangMaxHorizontalSpeed: 50,
    boomerangVerticalForce: -350,
    collisionSound: "bird_03_collision",
    controllable: true,
    damageFactors: "BoomerangBirdDamageFactors",
    density: 3,
    flyVerticalForce: -60,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 7,
    launchSound: "bird_06_flying",
    material: "wood",
    particles: "yellowBuff",
    particlesTrail: "yellowBirdTrail",
    radius: 1.5,
    restitution: 0.23000000417233,
    selectionSound: "boomerang_select",
    specialty: "BOOMERANG",
    sprite: "BIRD_BOOMERANG",
    spriteAction: "HUD_ICON_BOOST",
    spriteBlink: "BIRD_BOOMERANG_BLINK",
    spriteCollision: "BIRD_BOOMERANG_COLLISION",
    spriteFlying: "BIRD_BOOMERANG",
    spriteScore: "10K_BOOMERANG",
    spriteYell: "BIRD_BOOMERANG_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_6",
    type: "circle",
    unselectionSound: "bird_03_unselect" 
  },
  BasicBird2: {
    collisionSound: "bird_05_collision",
    controllable: true,
    damageFactors: "DefaultDamageFactors",
    density: 4.5,
    explosionDamage: 200,
    explosionDamageRadius: 5,
    explosionForce: 20000,
    explosionRadius: 10,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 4,
    launchSound: "bird_05_flying",
    material: "red",
    particles: "greenBuff",
    particlesTrail: "bomberBirdTrail",
    radius: 1.2999999523163,
    restitution: 0.23000000417233,
    selectionSound: "bird_05_select",
    specialty: "GRENADE",
    sprite: "BIRD_GREEN",
    spriteAction: "HUD_ICON_EGG",
    spriteBlink: "BIRD_GREEN_BLINK",
    spriteCollision: "BIRD_GREEN_COLLISION",
    spriteFlying: "BIRD_GREEN_FLYING",
    spriteScore: "10K_WHITE",
    spriteYell: "BIRD_GREEN_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_5",
    type: "circle",
    unselectionSound: "bird_05_unselect",
    useLegacyCollisionPath: true 
  },
  BlackBird: {
    collisionSound: "bird_04_collision",
    controllable: true,
    damageFactors: "BlackBirdDamageFactors",
    density: 6,
    explosionDamage: 300,
    explosionDamageRadius: 5,
    explosionForce: 40000,
    explosionRadius: 15,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 5,
    launchSound: "bird_04_flying",
    material: "rock",
    particles: "blackBuff",
    particlesTrail: "bombBirdTrail",
    radius: 1,
    restitution: 0.029999999329448,
    selectionSound: "bird_04_select",
    specialty: "BOMB",
    sprite: "BIRD_GREY",
    spriteAction: "HUD_ICON_EXPLOSION",
    spriteBlink: "BIRD_GREY_BLINK",
    spriteCollision: "BIRD_GREY_FLYING",
    spriteFlying: "BIRD_GREY_FLYING",
    spriteScore: "10K_BLACK",
    spriteYell: "BIRD_GREY_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_4",
    type: "circle",
    unselectionSound: "bird_04_unselect",
    useLegacyCollisionPath: true 
  },
  RedBigBird: {
    allowRoll: true,
    collisionSound: "bird_01_collision",
    controllable: true,
    damageFactors: "RedBigBirdDamageFactors",
    density: 10,
    friction: 0.30000001192093,
    group: "birds",
    groupIndex: 6,
    launchSound: "bird_01_flying",
    material: "red",
    particles: "redBuff",
    particlesTrail: "redBirdTrail",
    radius: 1.7999999523163,
    restitution: 0.44999998807907,
    selectionSound: "bird_01_select",
    specialty: "SOUND",
    sprite: "BIRD_BIG_BROTHER",
    spriteAction: "HUD_ICON_NOTE",
    spriteBlink: "BIRD_BIG_BROTHER_BLINK",
    spriteCollision: "BIRD_BIG_BROTHER",
    spriteFlying: "BIRD_BIG_BROTHER",
    spriteScore: "10K_RED",
    spriteYell: "BIRD_BIG_BROTHER_YELL",
    strength: 60,
    tutorialInfo: "TUTORIAL_5",
    type: "circle",
    unselectionSound: "bird_01_unselect" 
  },
  BaitSardine: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "BaitSardine",
    strength: 30,
    type: "box" 
  },
  MightyEagleBird: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "MightyEagleBird",
    strength: 30,
    type: "box" 
  },
  SmallPiglette: {
    controllable: false,
    damageSprites: {
      damage1: {
        blinkSprite: "PIGLETTE_SMALL_01_BLINK",
        max: 100,
        min: 90,
        smileSprite: "PIGLETTE_SMALL_01_SMILE",
        sprite: "PIGLETTE_SMALL_01" 
      },
      damage2: {
        blinkSprite: "PIGLETTE_SMALL_02_BLINK",
        max: 90,
        min: 50,
        smileSprite: "PIGLETTE_SMALL_02_SMILE",
        sprite: "PIGLETTE_SMALL_02" 
      },
      damage3: {
        blinkSprite: "PIGLETTE_SMALL_03_BLINK",
        max: 50,
        min: -1000,
        smileSprite: "PIGLETTE_SMALL_03_SMILE",
        sprite: "PIGLETTE_SMALL_03" 
      } 
    },
    group: "piglettes",
    groupIndex: 1,
    levelGoal: true,
    material: "piglette",
    particles: "smokeBuff",
    radius: 1.0750000476837,
    sprite: "PIGLETTE_SMALL_01",
    strength: 4,
    type: "circle" 
  },
  MediumPiglette: {
    controllable: false,
    damageSprites: {
      damage1: {
        blinkSprite: "PIGLETTE_MEDIUM_01_BLINK",
        max: 100,
        min: 90,
        smileSprite: "PIGLETTE_MEDIUM_01_SMILE",
        sprite: "PIGLETTE_MEDIUM_01" 
      },
      damage2: {
        blinkSprite: "PIGLETTE_MEDIUM_02_BLINK",
        max: 90,
        min: 50,
        smileSprite: "PIGLETTE_MEDIUM_02_SMILE",
        sprite: "PIGLETTE_MEDIUM_02" 
      },
      damage3: {
        blinkSprite: "PIGLETTE_MEDIUM_03_BLINK",
        max: 50,
        min: -1000,
        smileSprite: "PIGLETTE_MEDIUM_03_SMILE",
        sprite: "PIGLETTE_MEDIUM_03" 
      } 
    },
    defence: 1,
    density: 2,
    friction: 0.30000001192093,
    group: "piglettes",
    groupIndex: 2,
    levelGoal: true,
    material: "piglette",
    particles: "smokeBuff",
    radius: 1.8500000238419,
    sprite: "PIGLETTE_MEDIUM_01",
    strength: 10,
    type: "circle" 
  },
  LargePiglette: {
    controllable: false,
    damageSprites: {
      damage1: {
        blinkSprite: "PIGLETTE_BIG_01_BLINK",
        max: 100,
        min: 90,
        smileSprite: "PIGLETTE_BIG_01_SMILE",
        sprite: "PIGLETTE_BIG_01" 
      },
      damage2: {
        blinkSprite: "PIGLETTE_BIG_02_BLINK",
        max: 90,
        min: 50,
        smileSprite: "PIGLETTE_BIG_02_SMILE",
        sprite: "PIGLETTE_BIG_02" 
      },
      damage3: {
        blinkSprite: "PIGLETTE_BIG_03_BLINK",
        max: 50,
        min: -1000,
        smileSprite: "PIGLETTE_BIG_03_SMILE",
        sprite: "PIGLETTE_BIG_03" 
      } 
    },
    density: 1,
    friction: 0.30000001192093,
    group: "piglettes",
    groupIndex: 4,
    levelGoal: true,
    material: "piglette",
    particles: "smokeBuff",
    radius: 2.3250000476837,
    sprite: "PIGLETTE_BIG_01",
    strength: 20,
    type: "circle" 
  },
  HelmetPiglette: {
    controllable: false,
    damageSprites: {
      damage1: {
        blinkSprite: "PIGLETTE_HELMET_01_BLINK",
        max: 100,
        min: 90,
        smileSprite: "PIGLETTE_HELMET_01_SMILE",
        sprite: "PIGLETTE_HELMET_01" 
      },
      damage2: {
        blinkSprite: "PIGLETTE_HELMET_02_BLINK",
        max: 90,
        min: 50,
        smileSprite: "PIGLETTE_HELMET_02_SMILE",
        sprite: "PIGLETTE_HELMET_02" 
      },
      damage3: {
        blinkSprite: "PIGLETTE_HELMET_03_BLINK",
        max: 50,
        min: -1000,
        smileSprite: "PIGLETTE_HELMET_03_SMILE",
        sprite: "PIGLETTE_HELMET_03" 
      } 
    },
    defence: 8,
    density: 2,
    friction: 0.30000001192093,
    group: "piglettes",
    groupIndex: 3,
    levelGoal: true,
    material: "piglette",
    particles: "smokeBuff",
    radius: 1.9500000476837,
    sprite: "PIGLETTE_HELMET_01",
    strength: 15,
    type: "circle" 
  },
  GrandpaPiglette: {
    controllable: false,
    damageSprites: {
      damage1: {
        blinkSprite: "PIGLETTE_GRANDPA_01_BLINK",
        max: 100,
        min: 90,
        smileSprite: "PIGLETTE_GRANDPA_04_SMILE",
        sprite: "PIGLETTE_GRANDPA_01" 
      },
      damage2: {
        blinkSprite: "PIGLETTE_GRANDPA_02_BLINK",
        max: 90,
        min: 50,
        smileSprite: "PIGLETTE_GRANDPA_05_SMILE",
        sprite: "PIGLETTE_GRANDPA_02" 
      },
      damage3: {
        blinkSprite: "PIGLETTE_GRANDPA_03_BLINK",
        max: 50,
        min: -1000,
        smileSprite: "PIGLETTE_GRANDPA_06_SMILE",
        sprite: "PIGLETTE_GRANDPA_03" 
      } 
    },
    density: 1,
    friction: 0.30000001192093,
    group: "piglettes",
    groupIndex: 5,
    levelGoal: true,
    material: "piglette",
    particles: "smokeBuff",
    radius: 2.2000000476837,
    sprite: "PIGLETTE_GRANDPA_01",
    strength: 30,
    type: "circle" 
  },
  KingPiglette: {
    controllable: false,
    damageSprites: {
      damage1: {
        blinkSprite: "PIGLETTE_KING_01_BLINK",
        max: 100,
        min: 90,
        smileSprite: "PIGLETTE_KING_07_SMILE",
        sprite: "PIGLETTE_KING_01" 
      },
      damage2: {
        blinkSprite: "PIGLETTE_KING_02_BLINK",
        max: 90,
        min: 50,
        smileSprite: "PIGLETTE_KING_08_SMILE",
        sprite: "PIGLETTE_KING_02" 
      },
      damage3: {
        blinkSprite: "PIGLETTE_KING_03_BLINK",
        max: 50,
        min: -1000,
        smileSprite: "PIGLETTE_KING_09_SMILE",
        sprite: "PIGLETTE_KING_03" 
      } 
    },
    defence: 0,
    density: 1,
    friction: 0.30000001192093,
    group: "piglettes",
    groupIndex: 6,
    levelGoal: true,
    material: "piglette",
    particles: "smokeBuff",
    radius: 2.8250000476837,
    sprite: "PIGLETTE_KING_01",
    strength: 100,
    type: "circle" 
  },
  ExtraApple: {
    controllable: false,
    group: "extras",
    groupIndex: 17,
    material: "extras",
    sprite: "BLOCK_APPLE",
    strength: 30,
    type: "circle" 
  },
  ExtraBanana: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "BLOCK_BANANA",
    strength: 30,
    type: "box" 
  },
  ExtraStrawberry: {
    controllable: false,
    group: "extras",
    groupIndex: 18,
    material: "extras",
    sprite: "BLOCK_STRAWBERRY",
    strength: 30,
    type: "circle" 
  },
  ExtraMelon: {
    controllable: false,
    group: "extras",
    groupIndex: 15,
    material: "extras",
    sprite: "BLOCK_WATERMELON",
    strength: 40,
    type: "circle" 
  },
  ExtraDonut01: {
    controllable: false,
    group: "extras",
    groupIndex: 14,
    material: "extras",
    sprite: "BLOCK_DONUT",
    strength: 50,
    type: "circle" 
  },
  ExtraHam: {
    controllable: false,
    group: "extras",
    groupIndex: 16,
    material: "extras",
    sprite: "BLOCK_HAM",
    strength: 60,
    type: "circle" 
  },
  ExtraStolenEgg: {
    controllable: false,
    defence: 20000,
    group: "extras",
    groupIndex: 27,
    material: "extras",
    sprite: "BLOCK_STOLEN_EGG",
    strength: 2000,
    type: "circle" 
  },
  ExtraTreasureChest: {
    controllable: false,
    group: "extras",
    groupIndex: 20,
    material: "extras",
    sprite: "BLOCK_TREASURE_CHEST",
    strength: 20,
    type: "box" 
  },
  BlockCarpet: {
    group: "extras",
    groupIndex: 38,
    material: "extras",
    sprite: "BLOCK_CARPET",
    type: "box" 
  },
  DecorationBone01: {
    group: "decorations",
    groupIndex: 6,
    material: "decoration",
    sprite: "DECORATION_BONE01",
    type: "box" 
  },
  DecorationBone02: {
    group: "decorations",
    groupIndex: 7,
    material: "decoration",
    sprite: "DECORATION_BONE02",
    type: "box" 
  },
  DecorationBone03: {
    group: "decorations",
    groupIndex: 8,
    material: "decoration",
    sprite: "DECORATION_BONE03",
    type: "box" 
  },
  DecorationBone04: {
    group: "decorations",
    groupIndex: 9,
    material: "decoration",
    sprite: "DECORATION_BONE04",
    type: "box" 
  },
  DecorationBoneSet01: {
    group: "decorations",
    groupIndex: 10,
    material: "decoration",
    sprite: "DECORATION_BONESET01",
    type: "box" 
  },
  DecorationBoneSet02: {
    group: "decorations",
    groupIndex: 11,
    material: "decoration",
    sprite: "DECORATION_BONESET02",
    type: "box" 
  },
  DecorationEstrade01: {
    group: "decorations",
    groupIndex: 12,
    material: "decoration",
    sprite: "ESTRADE_FLAG",
    type: "box" 
  },
  DecorationEstrade02: {
    group: "decorations",
    groupIndex: 13,
    material: "decoration",
    sprite: "ESTRADE_THEATER",
    type: "box" 
  },
  DecorationSkull01: {
    group: "decorations",
    groupIndex: 4,
    material: "decoration",
    sprite: "DECORATION_SKULL01",
    type: "box" 
  },
  DecorationSkull02: {
    group: "decorations",
    groupIndex: 5,
    material: "decoration",
    sprite: "DECORATION_SKULL02",
    type: "box" 
  },
  DecorationSpotsTheme01_02: {
    group: "decorations",
    groupIndex: 2,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME1_02",
    theme: "theme1",
    type: "box" 
  },
  DecorationSpotsTheme01_03: {
    group: "decorations",
    groupIndex: 3,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME1_03",
    theme: "theme1",
    type: "box" 
  },
  DecorationSpotsTheme02_01: {
    group: "decorations",
    groupIndex: 1,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME2_01",
    theme: "theme2",
    type: "box" 
  },
  DecorationSpotsTheme02_02: {
    group: "decorations",
    groupIndex: 2,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME2_02",
    theme: "theme2",
    type: "box" 
  },
  DecorationSpotsTheme02_03: {
    group: "decorations",
    groupIndex: 3,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME2_03",
    theme: "theme2",
    type: "box" 
  },
  DecorationSpotsTheme03_01: {
    group: "decorations",
    groupIndex: 1,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME3_01",
    theme: "theme3",
    type: "box" 
  },
  DecorationSpotsTheme03_02: {
    group: "decorations",
    groupIndex: 2,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME3_02",
    theme: "theme3",
    type: "box" 
  },
  DecorationSpotsTheme03_03: {
    group: "decorations",
    groupIndex: 3,
    material: "decoration",
    sprite: "DECORATION_SPOTS_THEME3_03",
    theme: "theme3",
    type: "box" 
  },
  Estrade01: {
    group: "platforms",
    groupIndex: 2,
    material: "immovable",
    sprite: "ESTRADE_01",
    type: "box" 
  },
  Estrade02: {
    group: "platforms",
    groupIndex: 3,
    material: "immovable",
    sprite: "ESTRADE_02",
    type: "box" 
  },
  Estrade03: {
    group: "platforms",
    groupIndex: 4,
    material: "immovable",
    sprite: "ESTRADE_03",
    type: "box" 
  },
  Estrade04: {
    group: "platforms",
    groupIndex: 5,
    material: "immovable",
    sprite: "ESTRADE_04",
    type: "box" 
  },
  ExtraBlockDice: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 84, sprite: "BLOCK_EXTRA_DICE_6" },
      damage2: { max: 84, min: 68, sprite: "BLOCK_EXTRA_DICE_5" },
      damage3: { max: 68, min: 52, sprite: "BLOCK_EXTRA_DICE_4" },
      damage4: { max: 52, min: 36, sprite: "BLOCK_EXTRA_DICE_3" },
      damage5: { max: 36, min: 20, sprite: "BLOCK_EXTRA_DICE_2" },
      damage6: { max: 20, min: -1000, sprite: "BLOCK_EXTRA_DICE_1" } 
    },
    defence: 1,
    group: "extras",
    groupIndex: 5,
    material: "extras",
    sprite: "BLOCK_EXTRA_DICE_6",
    strength: 30,
    type: "box" 
  },
  ExtraBlockFlag01: {
    controllable: false,
    group: "extras",
    groupIndex: 2,
    material: "extras",
    sprite: "BLOCK_EXTRA_FLAG_01",
    type: "box" 
  },
  ExtraBlockFlag02: {
    controllable: false,
    group: "extras",
    groupIndex: 3,
    material: "extras",
    sprite: "BLOCK_EXTRA_FLAG_02",
    type: "box" 
  },
  ExtraBlockSmiley: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 50, sprite: "BLOCK_SMILEY_1" },
      damage3: { max: 50, min: -1000, sprite: "BLOCK_SMILEY_3" } 
    },
    group: "extras",
    groupIndex: 23,
    material: "extras",
    sprite: "BLOCK_SMILEY_1",
    strength: 25,
    type: "circle" 
  },
  ExtraBlockStairs: {
    controllable: false,
    group: "extras",
    groupIndex: 6,
    material: "extras",
    sprite: "ESTRADE_STAIRS",
    type: "box" 
  },
  ExtraBlockTNT: {
    controllable: false,
    defence: 1,
    explosionDamage: 150,
    explosionDamageRadius: 5,
    explosionForce: 30000,
    explosionRadius: 10,
    group: "extras",
    groupIndex: 4,
    material: "extras",
    particles: "explosionBuff",
    specialty: "BOMB",
    sprite: "BLOCK_EXTRA_TNT",
    strength: 10,
    type: "box" 
  },
  ExtraHelmetBig: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraHelmetBig",
    strength: 30,
    type: "box" 
  },
  ExtraHelmetBoss: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraHelmetBoss",
    strength: 30,
    type: "box" 
  },
  ExtraHelmetSmall: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraHelmetSmall",
    strength: 30,
    type: "box" 
  },
  ExtraHelmetSmall: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraHelmetSmall",
    strength: 30,
    type: "box" 
  },
  ExtraPumpkin1: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraPumpkin1",
    strength: 30,
    type: "box" 
  },
  ExtraPumpkin2: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraPumpkin2",
    strength: 30,
    type: "box" 
  },
  ExtraPumpkin3: {
    controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
    sprite: "ExtraPumpkin3",
    strength: 30,
    type: "box" 
  },
  StaticBalloon01: {
    destroyedScoreInc: 100,
    group: "clouds",
    groupIndex: 1,
    material: "clouds",
    sprite: "BLOCK_PIG_BALLOON_1",
    type: "box" 
  },
  StaticBalloon02: {
    destroyedScoreInc: 100,
    group: "clouds",
    groupIndex: 2,
    material: "clouds",
    sprite: "BLOCK_PIG_BALLOON_2",
    type: "box" 
  },
  StaticBalloon03: {
    destroyedScoreInc: 100,
    group: "clouds",
    groupIndex: 3,
    material: "clouds",
    sprite: "BLOCK_BALLOON_1",
    type: "box" 
  },
  StaticBalloon04: {
    destroyedScoreInc: 100,
    group: "clouds",
    groupIndex: 4,
    material: "clouds",
    sprite: "BLOCK_BALLOON_2",
    type: "box" 
  },
  StaticBalloon05: {
    destroyedScoreInc: 100,
    group: "clouds",
    groupIndex: 5,
    material: "clouds",
    sprite: "BLOCK_BALLOON_3",
    type: "box" 
  },
  ExtraBlockToilet: {
    controllable: false,
    group: "extras",
    groupIndex: 1,
    material: "extras",
    sprite: "BLOCK_EXTRA_TOILET",
    type: "box" 
  },
  ExtraBlueBird: {
    defence: 2000,
    density: 8,
    friction: 0.30000001192093,
    group: "extras",
    groupIndex: 31,
    material: "extras",
    radius: 0.60000002384186,
    restitution: 0.25,
    sprite: "BIRD_BLUE",
    strength: 3000,
    type: "circle" 
  },
  ExtraBoomerangBird: {
    defence: 2000,
    density: 8,
    friction: 0.30000001192093,
    group: "extras",
    groupIndex: 37,
    material: "extras",
    radius: 1.1000000238419,
    restitution: 0.25,
    sprite: "BIRD_BOOMERANG_STILL",
    strength: 3000,
    type: "circle" 
  },
  ExtraDiamond: {
    controllable: false,
    group: "extras",
    groupIndex: 25,
    material: "extras",
    sprite: "BLOCK_DIAMOND",
    strength: 25,
    type: "circle" 
  },
  ExtraGoldenEgg: {
    controllable: false,
    defence: 1,
    group: "extras",
    groupIndex: 33,
    material: "extras",
    sprite: "BLOCK_GOLDEN_EGG",
    strength: 5,
    type: "circle" 
  },
  ExtraHolyGrail: {
    controllable: false,
    group: "extras",
    groupIndex: 24,
    material: "extras",
    sprite: "BLOCK_HOLYGRAIL",
    strength: 25,
    type: "box" 
  },
  ExtraPillar: {
    controllable: false,
    defence: 40,
    density: 10,
    group: "extras",
    groupIndex: 21,
    material: "extras",
    sprite: "BLOCK_PILLAR",
    strength: 120,
    type: "box" 
  },
  ExtraPoleRed: {
    collision: false,
    controllable: false,
    defence: 1000000,
    group: "extras",
    groupIndex: 10,
    material: "immovable",
    sprite: "POLE_RED",
    strength: 10,
    type: "box" 
  },
  ExtraPoleYellow: {
    collision: false,
    controllable: false,
    defence: 1000000,
    group: "extras",
    groupIndex: 9,
    material: "immovable",
    sprite: "POLE_YELLOW",
    strength: 10,
    type: "box" 
  },
  ExtraRopeThick01: {
    controllable: false,
    defence: 1,
    group: "extras",
    groupIndex: 34,
    material: "extras",
    sprite: "BLOCK_ROPE_THICK_1",
    strength: 5,
    type: "box" 
  },
  ExtraRopeThin01: {
    controllable: false,
    defence: 1,
    group: "extras",
    groupIndex: 35,
    material: "extras",
    sprite: "BLOCK_ROPE_THIN_1",
    strength: 5,
    type: "box" 
  },
  ExtraRopeThin02: {
    controllable: false,
    defence: 1,
    group: "extras",
    groupIndex: 36,
    material: "extras",
    sprite: "BLOCK_ROPE_THIN_2",
    strength: 5,
    type: "box" 
  },
  ExtraBeachBall: {
    controllable: false,
    group: "extras",
    groupIndex: 22,
    material: "extras",
    sprite: "BLOCK_BEACHBALL",
    strength: 15,
    type: "circle" 
  },
  ExtraRubberBall: {
    controllable: false,
    defence: 50,
    group: "extras",
    groupIndex: 29,
    material: "rubber",
    restitution: 1.1000000238419,
    sprite: "BLOCK_BEACHBALL",
    strength: 1000,
    type: "circle" 
  },
  ExtraRubberDuck: {
    controllable: false,
    group: "extras",
    groupIndex: 26,
    material: "extras",
    sprite: "BLOCK_RUBBERDUCK",
    strength: 25,
    type: "circle" 
  },
  ExtraTire01: {
    controllable: false,
    group: "extras",
    groupIndex: 11,
    material: "extras",
    sprite: "BLOCK_TIRE_01",
    strength: 200,
    type: "circle" 
  },
  ExtraTire02: {
    controllable: false,
    group: "extras",
    groupIndex: 12,
    material: "extras",
    sprite: "BLOCK_TIRE_02",
    strength: 200,
    type: "circle" 
  },
  ExtraTire03: {
    controllable: false,
    group: "extras",
    groupIndex: 13,
    material: "extras",
    sprite: "BLOCK_TIRE_03",
    strength: 200,
    type: "circle" 
  },
  ExtraStrongBall: {
    controllable: false,
    defence: 2000,
    group: "extras",
    groupIndex: 28,
    material: "rock",
    sprite: "BLOCK_STEEL_BALL",
    strength: 5000,
    type: "circle" 
  },
  ExtraTrampoline: {
    defence: 100,
    group: "extras",
    groupIndex: 30,
    material: "rubber",
    restitution: 5.5,
    sprite: "BLOCK_SUPER_BALL",
    strength: 1000,
    type: "circle" 
  },
  ExtraTrampoline2: {
    defence: 100,
    group: "extras",
    groupIndex: 32,
    material: "immovableRubber",
    restitution: 1.1000000238419,
    sprite: "BLOCK_TRAMPOLINE_01",
    strength: 1000,
    type: "box" 
  },
  ShootingPlatform01: {
    group: "platforms",
    groupIndex: 1,
    material: "immovable",
    sprite: "SHOOTING_PLATFORM",
    type: "box" 
  },
  SpecialBlockStart: {
    collision: false,
    controllable: false,
    defence: 1000000,
    group: "extras",
    groupIndex: 8,
    material: "extras",
    sprite: "SWING_BASKET_01",
    strength: 10,
    type: "box" 
  },
  SpecialBlockSwing: {
    controllable: false,
    group: "extras",
    groupIndex: 7,
    material: "immovable",
    sprite: "SWING_HOLDER_01",
    type: "box" 
  },
  Ground: {
    group: "",
    groupIndex: 1,
    material: "immovable",
    sprite: "",
    texture: "",
    theme: "",
    type: "box" 
  },
  LightBlock1: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_1" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_1" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_1" } 
    },
    group: "lightBlocks",
    groupIndex: 1,
    material: "light",
    sprite: "BLOCK_LIGHT_1_1",
    strength: 13,
    type: "box" 
  },
  WoodBlock1: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_1" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_1" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_1" } 
    },
    group: "woodBlocks",
    groupIndex: 1,
    material: "wood",
    sprite: "BLOCK_WOOD_1_1",
    strength: 20,
    type: "box" 
  },
  StoneBlock1: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_1" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_1" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_1" } 
    },
    group: "rockBlocks",
    groupIndex: 1,
    material: "rock",
    sprite: "BLOCK_ROCK_1_1",
    strength: 30,
    type: "box" 
  },
  LightBlock10: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_10X1_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_10X1_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_10X1_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_10X1_4" } 
    },
    group: "lightBlocks",
    groupIndex: 10,
    material: "light",
    sprite: "BLOCK_LIGHT_10X1_1",
    strength: 65,
    type: "box" 
  },
  WoodBlock10: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_10X1_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_10X1_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_10X1_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_10X1_4" } 
    },
    group: "woodBlocks",
    groupIndex: 10,
    material: "wood",
    sprite: "BLOCK_WOOD_10X1_1",
    strength: 100,
    type: "box" 
  },
  StoneBlock10: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_10X1_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_10X1_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_10X1_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_10X1_4" } 
    },
    group: "rockBlocks",
    groupIndex: 10,
    material: "rock",
    sprite: "BLOCK_ROCK_10X1_1",
    strength: 140,
    type: "box" 
  },
  LightBlock11: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_TRIANGLE_L_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_TRIANGLE_L_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_TRIANGLE_L_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_TRIANGLE_L_4" } 
    },
    group: "lightBlocks",
    groupIndex: 11,
    material: "light",
    sprite: "BLOCK_LIGHT_TRIANGLE_L_1",
    strength: 53,
    type: "polygon",
    vertices: { 0:{ x: 0, y: 0 }, 1:{ x: 1, y: 1 }, 2:{ x: 0, y: 1 } } 
  },
  WoodBlock11: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_TRIANGLE_L_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_TRIANGLE_L_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_TRIANGLE_L_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_TRIANGLE_L_4" } 
    },
    group: "woodBlocks",
    groupIndex: 11,
    material: "wood",
    sprite: "BLOCK_WOOD_TRIANGLE_L_1",
    strength: 80,
    type: "polygon",
    vertices: { 0:{ x: 0, y: 0 }, 1:{ x: 1, y: 1 }, 2:{ x: 0, y: 1 } } 
  },
  StoneBlock11: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_TRIANGLE_L_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_TRIANGLE_L_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_TRIANGLE_L_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_TRIANGLE_L_4" } 
    },
    group: "rockBlocks",
    groupIndex: 11,
    material: "rock",
    sprite: "BLOCK_ROCK_TRIANGLE_L_1",
    strength: 140,
    type: "polygon",
    vertices: { 0:{ x: 0, y: 0 }, 1:{ x: 1, y: 1 }, 2:{ x: 0, y: 1 } } 
  },
  LightBlock12: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_TRIANGLE_M_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_TRIANGLE_M_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_TRIANGLE_M_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_TRIANGLE_M_4" } 
    },
    group: "lightBlocks",
    groupIndex: 12,
    material: "light",
    sprite: "BLOCK_LIGHT_TRIANGLE_M_1",
    strength: 48,
    type: "polygon",
    vertices: { 0:{ x: 0.5, y: 0 }, 1:{ x: 1, y: 1 }, 2:{ x: 0, y: 1 } } 
  },
  WoodBlock12: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_TRIANGLE_M_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_TRIANGLE_M_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_TRIANGLE_M_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_TRIANGLE_M_4" } 
    },
    group: "woodBlocks",
    groupIndex: 12,
    material: "wood",
    sprite: "BLOCK_WOOD_TRIANGLE_M_1",
    strength: 70,
    type: "polygon",
    vertices: { 0:{ x: 0.5, y: 0 }, 1:{ x: 1, y: 1 }, 2:{ x: 0, y: 1 } } 
  },
  StoneBlock12: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_TRIANGLE_M_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_TRIANGLE_M_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_TRIANGLE_M_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_TRIANGLE_M_4" } 
    },
    group: "rockBlocks",
    groupIndex: 12,
    material: "rock",
    sprite: "BLOCK_ROCK_TRIANGLE_M_1",
    strength: 140,
    type: "polygon",
    vertices: { 0:{ x: 0.5, y: 0 }, 1:{ x: 1, y: 1 }, 2:{ x: 0, y: 1 } } 
  },
  LightBlock2: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_2" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_2" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_2" } 
    },
    group: "lightBlocks",
    groupIndex: 2,
    material: "light",
    sprite: "BLOCK_LIGHT_1_2",
    strength: 26,
    type: "box" 
  },
  WoodBlock2: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_2" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_2" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_2" } 
    },
    group: "woodBlocks",
    groupIndex: 2,
    material: "wood",
    sprite: "BLOCK_WOOD_1_2",
    strength: 40,
    type: "box" 
  },
  StoneBlock2: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_2" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_2" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_2" } 
    },
    group: "rockBlocks",
    groupIndex: 2,
    material: "rock",
    sprite: "BLOCK_ROCK_1_2",
    strength: 60,
    type: "box" 
  },
  LightBlock3: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_3" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_3" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_3" } 
    },
    group: "lightBlocks",
    groupIndex: 3,
    material: "light",
    sprite: "BLOCK_LIGHT_1_3",
    strength: 40,
    type: "box" 
  },
  WoodBlock3: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_3" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_3" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_3" } 
    },
    group: "woodBlocks",
    groupIndex: 3,
    material: "wood",
    sprite: "BLOCK_WOOD_1_3",
    strength: 60,
    type: "box" 
  },
  StoneBlock3: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_3" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_3" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_3" } 
    },
    group: "rockBlocks",
    groupIndex: 3,
    material: "rock",
    sprite: "BLOCK_ROCK_1_3",
    strength: 100,
    type: "box" 
  },
  LightBlock4: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_4" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_4" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_4" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_4" } 
    },
    group: "lightBlocks",
    groupIndex: 4,
    material: "light",
    sprite: "BLOCK_LIGHT_1_4",
    strength: 33,
    type: "box" 
  },
  WoodBlock4: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_4" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_4" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_4" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_4" } 
    },
    group: "woodBlocks",
    groupIndex: 4,
    material: "wood",
    sprite: "BLOCK_WOOD_1_4",
    strength: 50,
    type: "box" 
  },
  StoneBlock4: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_4" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_4" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_4" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_4" } 
    },
    group: "rockBlocks",
    groupIndex: 4,
    material: "rock",
    sprite: "BLOCK_ROCK_1_4",
    strength: 80,
    type: "box" 
  },
  LightBlock5: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_5" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_5" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_5" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_5" } 
    },
    group: "lightBlocks",
    groupIndex: 5,
    material: "light",
    sprite: "BLOCK_LIGHT_1_5",
    strength: 53,
    type: "box" 
  },
  WoodBlock5: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_5" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_5" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_5" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_5" } 
    },
    group: "woodBlocks",
    groupIndex: 5,
    material: "wood",
    sprite: "BLOCK_WOOD_1_5",
    strength: 80,
    type: "box" 
  },
  StoneBlock5: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_5" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_5" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_5" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_5" } 
    },
    group: "rockBlocks",
    groupIndex: 5,
    material: "rock",
    sprite: "BLOCK_ROCK_1_5",
    strength: 140,
    type: "box" 
  },
  LightBlock6: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_6" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_6" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_6" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_6" } 
    },
    group: "lightBlocks",
    groupIndex: 6,
    material: "light",
    sprite: "BLOCK_LIGHT_1_6",
    strength: 47,
    type: "box" 
  },
  WoodBlock6: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_6" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_6" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_6" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_6" } 
    },
    group: "woodBlocks",
    groupIndex: 6,
    material: "wood",
    sprite: "BLOCK_WOOD_1_6",
    strength: 70,
    type: "box" 
  },
  StoneBlock6: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_6" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_6" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_6" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_6" } 
    },
    group: "rockBlocks",
    groupIndex: 6,
    material: "rock",
    sprite: "BLOCK_ROCK_1_6",
    strength: 120,
    type: "box" 
  },
  LightBlock7: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_7" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_7" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_7" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_7" } 
    },
    group: "lightBlocks",
    groupIndex: 7,
    material: "light",
    sprite: "BLOCK_LIGHT_1_7",
    strength: 125,
    type: "circle" 
  },
  WoodBlock7: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_7" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_7" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_7" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_7" } 
    },
    group: "woodBlocks",
    groupIndex: 7,
    material: "wood",
    sprite: "BLOCK_WOOD_1_7",
    strength: 200,
    type: "circle" 
  },
  StoneBlock7: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_7" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_7" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_7" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_7" } 
    },
    group: "rockBlocks",
    groupIndex: 7,
    material: "rock",
    sprite: "BLOCK_ROCK_1_7",
    strength: 600,
    type: "circle" 
  },
  LightBlock8: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_1_8" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_2_8" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_3_8" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4_8" } 
    },
    group: "lightBlocks",
    groupIndex: 8,
    material: "light",
    sprite: "BLOCK_LIGHT_1_8",
    strength: 100,
    type: "circle" 
  },
  WoodBlock8: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_1_8" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_2_8" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_3_8" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4_8" } 
    },
    group: "woodBlocks",
    groupIndex: 8,
    material: "wood",
    sprite: "BLOCK_WOOD_1_8",
    strength: 150,
    type: "circle" 
  },
  StoneBlock8: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_1_8" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_2_8" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_3_8" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4_8" } 
    },
    group: "rockBlocks",
    groupIndex: 8,
    material: "rock",
    sprite: "BLOCK_ROCK_1_8",
    strength: 300,
    type: "circle" 
  },
  LightBlock9: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_LIGHT_4X4_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_LIGHT_4X4_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_LIGHT_4X4_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_LIGHT_4X4_4" } 
    },
    group: "lightBlocks",
    groupIndex: 9,
    material: "light",
    sprite: "BLOCK_LIGHT_4X4_1",
    strength: 70,
    type: "box" 
  },
  WoodBlock9: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_WOOD_4X4_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_WOOD_4X4_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_WOOD_4X4_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_WOOD_4X4_4" } 
    },
    group: "woodBlocks",
    groupIndex: 9,
    material: "wood",
    sprite: "BLOCK_WOOD_4X4_1",
    strength: 120,
    type: "box" 
  },
  StoneBlock9: {
    controllable: false,
    damageSprites: {
      damage1: { max: 100, min: 75, sprite: "BLOCK_ROCK_4X4_1" },
      damage2: { max: 75, min: 50, sprite: "BLOCK_ROCK_4X4_2" },
      damage3: { max: 50, min: 25, sprite: "BLOCK_ROCK_4X4_3" },
      damage4: { max: 25, min: -1000, sprite: "BLOCK_ROCK_4X4_4" } 
    },
    group: "rockBlocks",
    groupIndex: 9,
    material: "rock",
    sprite: "BLOCK_ROCK_4X4_1",
    strength: 160,
    type: "box" 
  },
  StaticBlockTheme01_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_1",
    theme: "theme1",
    type: "box" 
  },
  StaticBlockTheme01_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_1",
    theme: "theme1",
    type: "box" 
  },
  StaticBlockTheme01_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_1",
    theme: "theme1",
    type: "box" 
  },
  StaticBlockTheme01_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_1",
    theme: "theme1",
    type: "box" 
  },
  StaticBlockTheme01_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_1",
    theme: "theme1",
    type: "box" 
  },
  StaticBlockTheme01_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_1",
    theme: "theme1",
    type: "box" 
  },
  StaticBlockTheme02_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_2",
    theme: "theme2",
    type: "box" 
  },
  StaticBlockTheme02_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_2",
    theme: "theme2",
    type: "box" 
  },
  StaticBlockTheme02_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_2",
    theme: "theme2",
    type: "box" 
  },
  StaticBlockTheme02_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_2",
    theme: "theme2",
    type: "box" 
  },
  StaticBlockTheme02_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_2",
    theme: "theme2",
    type: "box" 
  },
  StaticBlockTheme02_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_2",
    theme: "theme2",
    type: "box" 
  },
  StaticBlockTheme03_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_3",
    theme: "theme3",
    type: "box" 
  },
  StaticBlockTheme03_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_3",
    theme: "theme3",
    type: "box" 
  },
  StaticBlockTheme03_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_3",
    theme: "theme3",
    type: "box" 
  },
  StaticBlockTheme03_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_3",
    theme: "theme3",
    type: "box" 
  },
  StaticBlockTheme03_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_3",
    theme: "theme3",
    type: "box" 
  },
  StaticBlockTheme03_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_3",
    theme: "theme3",
    type: "box" 
  },
  StaticBlockTheme04_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_4",
    theme: "theme4",
    type: "box" 
  },
  StaticBlockTheme04_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_4",
    theme: "theme4",
    type: "box" 
  },
  StaticBlockTheme04_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_4",
    theme: "theme4",
    type: "box" 
  },
  StaticBlockTheme04_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_4",
    theme: "theme4",
    type: "box" 
  },
  StaticBlockTheme04_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_4",
    theme: "theme4",
    type: "box" 
  },
  StaticBlockTheme04_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_4",
    theme: "theme4",
    type: "box" 
  },
  StaticBlockTheme05_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_5",
    theme: "theme5",
    type: "box" 
  },
  StaticBlockTheme05_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_5",
    theme: "theme5",
    type: "box" 
  },
  StaticBlockTheme05_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_5",
    theme: "theme5",
    type: "box" 
  },
  StaticBlockTheme05_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_5",
    theme: "theme5",
    type: "box" 
  },
  StaticBlockTheme05_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_5",
    theme: "theme5",
    type: "box" 
  },
  StaticBlockTheme05_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_5",
    theme: "theme5",
    type: "box" 
  },
  StaticBlockTheme06_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_6",
    theme: "theme6",
    type: "box" 
  },
  StaticBlockTheme06_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_6",
    theme: "theme6",
    type: "box" 
  },
  StaticBlockTheme06_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_6",
    theme: "theme6",
    type: "box" 
  },
  StaticBlockTheme06_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_6",
    theme: "theme6",
    type: "box" 
  },
  StaticBlockTheme06_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_6",
    theme: "theme6",
    type: "box" 
  },
  StaticBlockTheme06_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_6",
    theme: "theme6",
    type: "box" 
  },
  StaticBlockTheme07_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_7",
    theme: "theme7",
    type: "box" 
  },
  StaticBlockTheme07_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_7",
    theme: "theme7",
    type: "box" 
  },
  StaticBlockTheme07_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_7",
    theme: "theme7",
    type: "box" 
  },
  StaticBlockTheme07_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_7",
    theme: "theme7",
    type: "box" 
  },
  StaticBlockTheme07_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_7",
    theme: "theme7",
    type: "box" 
  },
  StaticBlockTheme07_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_7",
    theme: "theme7",
    type: "box" 
  },
  StaticBlockTheme08_01: {
    group: "staticBlocks",
    groupIndex: 1,
    material: "immovable",
    sprite: "GROUND_BLOCK_01",
    texture: "INGAME_THEME_GROUND_8",
    theme: "theme8",
    type: "box" 
  },
  StaticBlockTheme08_02: {
    group: "staticBlocks",
    groupIndex: 2,
    material: "immovable",
    sprite: "GROUND_BLOCK_02",
    texture: "INGAME_THEME_GROUND_8",
    theme: "theme8",
    type: "box" 
  },
  StaticBlockTheme08_03: {
    group: "staticBlocks",
    groupIndex: 3,
    material: "immovable",
    sprite: "GROUND_BLOCK_03",
    texture: "INGAME_THEME_GROUND_8",
    theme: "theme8",
    type: "box" 
  },
  StaticBlockTheme08_04: {
    group: "staticBlocks",
    groupIndex: 4,
    material: "immovable",
    sprite: "GROUND_BLOCK_04",
    texture: "INGAME_THEME_GROUND_8",
    theme: "theme8",
    type: "box" 
  },
  StaticBlockTheme08_05: {
    group: "staticBlocks",
    groupIndex: 5,
    material: "immovable",
    sprite: "GROUND_BLOCK_05",
    texture: "INGAME_THEME_GROUND_8",
    theme: "theme8",
    type: "box" 
  },
  StaticBlockTheme08_06: {
    group: "staticBlocks",
    groupIndex: 6,
    material: "immovable",
    sprite: "GROUND_BLOCK_06",
    texture: "INGAME_THEME_GROUND_8",
    theme: "theme8",
    type: "box" 
  },
  EggGranade: {
    controllable: true,
    damageFactors: "DefaultDamageFactors",
    density: 3,
    explosionDamage: 400,
    explosionDamageRadius: 8,
    explosionForce: 10000,
    explosionRadius: 10,
    friction: 0.30000001192093,
    material: "red",
    particles: "explosionBuff",
    restitution: 0.23000000417233,
    specialty: "BOMB",
    sprite: "DROPPABLE_EGG",
    strength: 60,
    type: "circle",
    useLegacyCollisionPath: true 
  },
  StaticCloud01: {
    group: "clouds",
    groupIndex: 6,
    material: "immovable",
    sprite: "BLOCK_BANANA",
    type: "box" 
  },
  StaticCloud02: {
    group: "clouds",
    groupIndex: 7,
    material: "immovable",
    sprite: "BLOCK_BANANA",
    type: "box" 
  },
  StaticCloud03: {
    group: "clouds",
    groupIndex: 8,
    material: "immovable",
    sprite: "BLOCK_BANANA",
    type: "box" 
  },
  StaticCloud04: {
    group: "clouds",
    groupIndex: 9,
    material: "immovable",
    sprite: "BLOCK_BANANA",
    type: "box" 
  },
  StaticFragileBlock01: {
    destroyedScoreInc: 50,
    group: "staticFragile",
    groupIndex: 1,
    material: "immovableFragile",
    sprite: "GROUND_BLOCK_01",
    type: "box" 
  },
  StaticFragileBlock02: {
    destroyedScoreInc: 50,
    group: "staticFragile",
    groupIndex: 2,
    material: "immovableFragile",
    sprite: "GROUND_BLOCK_02",
    type: "box" 
  },
  StaticFragileBlock03: {
    destroyedScoreInc: 50,
    group: "staticFragile",
    groupIndex: 3,
    material: "immovableFragile",
    sprite: "GROUND_BLOCK_03",
    type: "box" 
  },
  StaticFragileBlock04: {
    destroyedScoreInc: 50,
    group: "staticFragile",
    groupIndex: 4,
    material: "immovableFragile",
    sprite: "GROUND_BLOCK_04",
    type: "box" 
  },
  StaticFragileBlock05: {
    destroyedScoreInc: 50,
    group: "staticFragile",
    groupIndex: 5,
    material: "immovableFragile",
    sprite: "GROUND_BLOCK_05",
    type: "box" 
  },
  StaticFragileBlock06: {
    destroyedScoreInc: 50,
    group: "staticFragile",
    groupIndex: 6,
    material: "immovableFragile",
    sprite: "GROUND_BLOCK_06",
    type: "box" 
  },
DecorationSpotsTheme01_01: {
controllable: false,
    group: "extras",
    groupIndex: 19,
    material: "extras",
sprite: "DecorationSpotsTheme01_01",
strength: 30,
    type: "box" 
  }
}