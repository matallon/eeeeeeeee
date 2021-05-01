function preload(){
    background = loadImage('assets/map/filledoutmap.png');
    seaoverlay = loadImage('assets/map/sea.png');

    sea1 = loadImage('assets/map/seaanimation/layer1.png')
    sea2 = loadImage('assets/map/seaanimation/layer2.png')
    //sea3 = loadImage('assets/map/seaanimation/layer3.png')
    //sea4 = loadImage('assets/map/seaanimation/layer4.png')

    //main character walking animations 
    mcStoppedLeft = loadImage('assets2/people/mcStoppedLeft.png');
    mcWalk1Left = loadImage('assets2/people/mcWalk1Left.png');
    mcWalk2Left = loadImage('assets2/people/mcWalk2Left.png');
    mcWalk3Left = loadImage('assets2/people/mcWalk3Left.png');

    mcStoppedRight = loadImage('assets2/people/mcStoppedRight.png');
    mcWalk1Right = loadImage('assets2/people/mcWalk1Right.png');
    mcWalk2Right = loadImage('assets2/people/mcWalk2Right.png');
    mcWalk3Right = loadImage('assets2/people/mcWalk3Right.png');

    //main character hi
    mcHiLeft = loadImage("assets2/people/mcHiLeft.png");
    mcHiRight = loadImage("assets2/people/mcHiRight.png");

    //houses 
    //house1 = loadImage('assets/houses/house1simple.png');
    house2 = loadImage('assets/houses/house2simple.png');
    house3 = loadImage('assets/houses/house3simple.png');
    house1roof = loadImage('assets/houses/house1simpleroof.png')
    
    //tents
    tent1 = loadImage('assets2/tents/tent1.png');
    tent1TopStrings = loadImage('assets2/tents/tent1BottomStrings.png');
    tent1BottomStrings = loadImage('assets2/tents/tent1TopStrings.png');
    //tent2 = loadImage('assets2/tents/tent2.png');
    tent2BottomStrings = loadImage('assets2/tents/tent2BottomStrings.png');
    tent2TopStrings = loadImage('assets2/tents/tent2TopStrings.png');
    tent2top = loadImage('assets2/tents/tent2Top.png');
    
    //dead trees
    dtshortest = loadImage('assets/deadtrees/short.png');
    //dtshort1 = loadImage('assets/deadtrees/shorter1.png');
    dtshort2 = loadImage('assets/deadtrees/shorter2.png');
    //dtshort3 = loadImage('assets/deadtrees/shorter3.png');
    dtshort4 = loadImage('assets/deadtrees/shorter4.png');
    dttall1 = loadImage('assets/deadtrees/taller1.png');
    dttall2 = loadImage('assets/deadtrees/taller2.png');
    dttall3 = loadImage('assets/deadtrees/taller3.png');
    
    //cacti 
    cacti1 = loadImage('assets/cacti/circlecacti1.png');
    cacti2 = loadImage('assets/cacti/circlecacti2.png');
    succulent = loadImage('assets/cacti/succulent.png');
    //cacti3 = loadImage('assets/cacti/tallcacti.png');
    
    //desert stones
    dstone1 = loadImage('assets/desertstones/big.png');
    //dstone2 = loadImage('assets/desertstones/middle.png');
    //dstone3 = loadImage('assets/desertstones/middle2.png');
    //dstones4 = loadImage('assets/desertstones/small.png');
    
    //campfires
    campani1 = loadImage('assets/fires/campanimation/camp1.png');
    campani2 = loadImage('assets/fires/campanimation/camp2.png');
    campani3 = loadImage('assets/fires/campanimation/camp3.png');

    //torch 
    torchani1 = loadImage('assets/fires/torchani/1.png');
    torchani2 = loadImage('assets/fires/torchani/2.png');
    torchani3 = loadImage('assets/fires/torchani/3.png');

    //moisture farms
    V1mf1 = loadImage('assets/moisturefarms/version1/m1.png')
    V1mf2 = loadImage('assets/moisturefarms/version1/m2.png')
    V1mf3 = loadImage('assets/moisturefarms/version1/m3.png')

    V2mf1 = loadImage('assets/moisturefarms/version2/m1.png');
    V2mf2 = loadImage('assets/moisturefarms/version2/m2.png');
    V2mf3 = loadImage('assets/moisturefarms/version2/m3.png');

    //miscellaneous
    barrel = loadImage('assets2/outsideobject/barrel.png');
    horizontalfence = loadImage('assets2/outsideobject/horizontalfence.png');
    horizontalfencewmf = loadImage('assets2/outsideobject/horizontalfencewtoplayer.png');
    verticalfence = loadImage('assets2/outsideobject/verticalfence.png');
    verticalfenceflipped = loadImage('assets2/outsideobject/verticalfenceflipped.png');
    spawnfence = loadImage('assets2/outsideobject/spawnfence.png');
    pier = loadImage('assets2/outsideobject/pier.png');

    //fur trees
    tree1 = loadImage('assets/furtrees/1.png');
    tree2 = loadImage('assets/furtrees/2.png');
    tree3 = loadImage('assets/furtrees/3.png');
    tree4 = loadImage('assets/furtrees/4.png');
    tree5 = loadImage('assets/furtrees/5.png');

    //small plants 
    flower1 = loadImage('assets2/smallplants/flower1.png');
    //flower2 = loadImage('assets2/smallplants/flower2.png');
    //flowerbush1 = loadImage('assets2/smallplants/flowerbush1.png');
    flowerpot = loadImage('assets2/smallplants/flowerpot.png');
    //grassplant = loadImage('assets2/smallplants/grassplant.png');
    log1 = loadImage('assets2/smallplants/log.png');
    //log1Twig = loadImage('assets2/smallplants/logTwig.png');
    log2flipped = loadImage('assets2/smallplants/log2flipped.png');
    log2flippedTOP = loadImage('assets2/smallplants/log2flippedTOP.png');
    smalltree = loadImage('assets2/smallplants/smalltree.png');
    deadStick = loadImage('assets2/smallplants/stick.png');
    treetrunk = loadImage('assets2/smallplants/treetrunk.png');
    smalltreeflipped = loadImage('assets2/smallplants/smalltreeflipped.png');

    //stones
    grave1 =  loadImage('assets2/stones/grave1.png');
    grave2 =  loadImage('assets2/stones/grave2.png');
    grave3 = loadImage('assets2/stones/tinygrave.png')
    normal1 = loadImage('assets2/stones/stone1.png');
    stonecircle = loadImage('assets2/stones/stonecircle.png');

    //old tech
    pylonwstring = loadImage('assets2/oldtech/pylonwstring.png')
    pylonjuststring = loadImage('assets2/oldtech/pylonjuststring.png')
    pylon = loadImage('assets2/oldtech/pylon.png');
    brokenpylon = loadImage('assets2/oldtech/brokenpylon.png');
}
