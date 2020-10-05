camera.position.x = -33.600;
camera.position.y = 32.807;
camera.position.z = 33.725;
camera.rotation.x = -32.80;
camera.rotation.y = -37.40;
camera.rotation.z = -22.00;

///////////////////////////////////////////////////////////////////////////////////////////////////
//For Light Sources
///////////////////////////////////////////////////////////////////////////////////////////////////

//Environmental Light / Ambience
let ambience = new THREE.ambience(0xffffff, 1);
ambience.position.set(0, 5.0, 0);
scene.add(ambience);

//Directional light 
let directionalLight = new THREE.Pointlight(0xfdfd96, 1);
directionalLight.position.x = -61.701;
directionalLight.position.y = 29.753;
directionalLight.position.z = 10.080;
directionalLight.castShadow = true; 
directionalLight.target = thirdLeg;
scene.add(directionalLight);

//Light
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512; 
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500
scene.add(light);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Floor
///////////////////////////////////////////////////////////////////////////////////////////////////

//first floor
let firstFloorGeo = new THREE.BoxGeometry(30, 1, 30);
let firstFloorMat = new THREE.MeshToonMaterial({color: 0x404040});
let firstFloor = new THREE.Mesh(firstFloorGeo, firstFloorMat);
firstFloor.position.x = 0.00;
firstFloor.position.y = 0.5;
firstFloor.position.z = 0;
firstFloor.rotation.x = 0.0;
firstFloor.rotation.y = 0.0;
firstFloor.rotation.z = 0.0;
scene.add(firstFloor);

//second floor
let secondFloorGeo = new THREE.BoxGeometry(13, 1, 29);
let secondFloorMat = new THREE.MeshToonMaterial({color: 0x404040});
let secondFloor = new THREE.Mesh(secondFloorGeo, secondFloorMat);
secondFloor.position.x = 7.833;
secondFloor.position.y = 10.932;
secondFloor.position.z = 0;
secondFloor.rotation.x = 0.0;
secondFloor.rotation.y = 0.0;
secondFloor.rotation.z = 0.0;
scene.add(secondFloor);

///////////////////////////////////////////////////////////////////////////////////////////////////
//Grey Wall
///////////////////////////////////////////////////////////////////////////////////////////////////

//first grey wall
let firstGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let firstGreyWallMat = new THREE.MeshToonMaterial({color: 0x708090});
let firstGreyWall = new THREE.Mesh(firstGreyWallGeo, firstGreyWallMat);
firstGreyWall.position.x = -2.014;
firstGreyWall.position.y = 2.5;
firstGreyWall.position.z = 2.00;
scene.add(firstGreyWall);

//second grey wall
let secondGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let seconGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let secondGreyWall = new THREE.Mesh(secondGreyWallGeo, seconGreyWallMat);
secondGreyWall.position.x = -2.014;
secondGreyWall.position.y = 2.5;
secondGreyWall.position.z = 2.00;
scene.add(secondGreyWall);

//third grey wall
let thirdGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let thirdGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let thirdGreyWall = new THREE.Mesh(thirdGreyWallGeo, thirdGreyWallMat);
thirdGreyWall.position.x = -2.014;
thirdGreyWall.position.y = 2.5;
thirdGreyWall.position.z = 2.00;
scene.add(thirdGreyWall);

//fourth grey wall
let fourthGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fourthGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fourthGreyWall = new THREE.Mesh(fourthGreyWallGeo, fourthGreyWallMat);
fourthGreyWall.position.x = -2.014;
fourthGreyWall.position.y = 2.5;
fourthGreyWall.position.z = 2.00;
scene.add(fourthGreyWall);

//fifth grey wall
let fifthGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fifthGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fifthGreyWall = new THREE.Mesh(fifthGreyWallGeo, fifthGreyWallMat);
fifthGreyWall.position.x = -2.014;
fifthGreyWall.position.y = 2.5;
fifthGreyWall.position.z = 2.00;
scene.add(fifthGreyWall);

//sixth grey wall
let sixthGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let sixthGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let sixthGreyWall = new THREE.Mesh(sixthGreyWallGeo, sixthGreyWallMat);
sixthGreyWall.position.x = -2.014;
sixthGreyWall.position.y = 2.5;
sixthGreyWall.position.z = 2.00;
scene.add(sixthGreyWall);

//seventh grey wall
let seventhGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let seventhGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let seventhGreyWall = new THREE.Mesh(seventhGreyWallGeo, seventhGreyWallMat);
seventhGreyWall.position.x = -2.014;
seventhGreyWall.position.y = 2.5;
seventhGreyWall.position.z = 2.00;
scene.add(seventhGreyWall);

//eighth grey wall
let eighthGreyWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let eighthGreyWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let eighthGreyWall = new THREE.Mesh(eighthGreyWallGeo, eighthGreyWallMat);
eighthGreyWall.position.x = -2.014;
eighthGreyWall.position.y = 2.5;
eighthGreyWall.position.z = 2.00;
scene.add(eighthGreyWall);


///////////////////////////////////////////////////////////////////////////////////////////////////
//Brown Wall
///////////////////////////////////////////////////////////////////////////////////////////////////

//first brown wall
let firstBrownWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let firstBrownWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let firstBrownWall = new THREE.Mesh(firstBrownWallGeo, firstBrownWallMat);
firstBrownWall.position.x = -2.014;
firstBrownWall.position.y = 2.5;
firstBrownWall.position.z = 2.00;
scene.add(firstBrownWall);

//second brown wall
let secondBrownWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let secondBrownWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let secondBrownWall = new THREE.Mesh(secondBrownWallGeo, secondBrownWallMat);
secondBrownWall.position.x = -2.014;
secondBrownWall.position.y = 2.5;
secondBrownWall.position.z = 2.00;
scene.add(secondBrownWall);


///////////////////////////////////////////////////////////////////////////////////////////////////
//Glass Wall
///////////////////////////////////////////////////////////////////////////////////////////////////

//first glass wall
let firstGlassWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let firstGlassWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let firstGlassWall = new THREE.Mesh(firstGlassWallGeo, firstGlassWallGeo);
firstGlassWall.position.x = -2.014;
firstGlassWall.position.y = 2.5;
firstGlassWall.position.z = 2.00;
scene.add(firstGlassWall);

//second glass wall
let secondGlassWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let secondGlassWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let secondGlassWall = new THREE.Mesh(secondGlassWallGeo, secondGlassWallMat);
secondGlassWall.position.x = -2.014;
secondGlassWall.position.y = 2.5;
secondGlassWall.position.z = 2.00;
scene.add(secondGlassWall);

//third glass wall
let thirdGlassWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let thirdGlassWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let thirdGlassWall = new THREE.Mesh(thirdGlassWallGeo, thirdGlassWallMat);
thirdGlassWall.position.x = -2.014;
thirdGlassWall.position.y = 2.5;
thirdGlassWall.position.z = 2.00;
scene.add(thirdGlassWall);

//fourth glass wall
let fourthGlassWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fourthGlassWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fourthGlassWall = new THREE.Mesh(fourthGlassWallGeo, fourthGlassWallMat);
fourthGlassWall.position.x = -2.014;
fourthGlassWall.position.y = 2.5;
fourthGlassWall.position.z = 2.00;
scene.add(fourthGlassWall);

//fifth glass wall
let fifthGlassWallGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fifthGlassWallMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fifthGlassWall = new THREE.Mesh(fifthGlassWallGeo, fifthGlassWallMat);
fifthGlassWall.position.x = -2.014;
fifthGlassWall.position.y = 2.5;
fifthGlassWall.position.z = 2.00;
scene.add(fifthGlassWall);


///////////////////////////////////////////////////////////////////////////////////////////////////
//Doors
///////////////////////////////////////////////////////////////////////////////////////////////////

//first door
let firstDoorGeo = new THREE.BoxGeometry(0.01, 5, 8);
let firstDoorMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let firstDoor = new THREE.Mesh(firstDoorGeo, firstDoorMat);
firstDoor.position.x = -2.014;
firstDoor.position.y = 2.5;
firstDoor.position.z = 2.00;
scene.add(firstDoor);

//second door
let secondDoorGeo = new THREE.BoxGeometry(0.01, 5, 8);
let secondDoorMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let secondDoor = new THREE.Mesh(secondDoorGeo, secondDoorMat);
secondDoor.position.x = -2.014;
secondDoor.position.y = 2.5;
secondDoor.position.z = 2.00;
scene.add(secondDoor);


///////////////////////////////////////////////////////////////////////////////////////////////////
//Stairs
///////////////////////////////////////////////////////////////////////////////////////////////////

//first stair
let firstStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let firstStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let firstStair = new THREE.Mesh(firstStairGeo, firstStairMat);
firstStair.position.x = -2.014;
firstStair.position.y = 2.5;
firstStair.position.z = 2.00;
scene.add(firstStair);

//second stair
let secondStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let secondStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let secondStair = new THREE.Mesh(secondStairGeo, secondStairMat);
secondStair.position.x = -2.014;
secondStair.position.y = 2.5;
secondStair.position.z = 2.00;
scene.add(secondStair);

//third stair
let thirdStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let thirdStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let thirdStair = new THREE.Mesh(thirdStairGeo, thirdStairMat);
thirdStair.position.x = -2.014;
thirdStair.position.y = 2.5;
thirdStair.position.z = 2.00;
scene.add(thirdStair);

//fourth stair
let fourthStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fourthStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fourthStair = new THREE.Mesh(fourthStairGeo, fourthStairMat);
fourthStair.position.x = -2.014;
fourthStair.position.y = 2.5;
fourthStair.position.z = 2.00;
scene.add(fourthStair);

//fifth stair
let fifthStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fifthStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fifthStair = new THREE.Mesh(fifthStairGeo, fifthStairMat);
fifthStair.position.x = -2.014;
fifthStair.position.y = 2.5;
fifthStair.position.z = 2.00;
scene.add(fifthStair);

//sixth stair
let sixthStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let sixthStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let sixthStair = new THREE.Mesh(sixthStairGeo, sixthStairMat);
sixthStair.position.x = -2.014;
sixthStair.position.y = 2.5;
sixthStair.position.z = 2.00;
scene.add(sixthStair);

//seventh stair
let seventhStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let seventhStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let seventhStair = new THREE.Mesh(seventhStairGeo, seventhStairMat);
seventhStair.position.x = -2.014;
seventhStair.position.y = 2.5;
seventhStair.position.z = 2.00;
scene.add(seventhStair);

//eighth stair
let eighthStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let eighthStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let eighthStair = new THREE.Mesh(eighthStairGeo, eighthStairMat);
eighthStair.position.x = -2.014;
eighthStair.position.y = 2.5;
eighthStair.position.z = 2.00;
scene.add(eighthStair);

//ninth stair
let ninthStairGeo = new THREE.BoxGeometry(0.01, 5, 8);
let ninthStairMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let ninthStair = new THREE.Mesh(firstStairGeo, firstStairMat);
ninthStair.position.x = -2.014;
ninthStair.position.y = 2.5;
ninthStair.position.z = 2.00;
scene.add(ninthStair);


///////////////////////////////////////////////////////////////////////////////////////////////////
//Planks for Roof
///////////////////////////////////////////////////////////////////////////////////////////////////

//first plank
let firstPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let firstPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let firstPlank = new THREE.Mesh(firstPlankGeo, firstPlankMat);
firstPlank.position.x = -2.014;
firstPlank.position.y = 2.5;
firstPlank.position.z = 2.00;
scene.add(firstPlank);

//second plank
let secondPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let secondPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let secondPlank = new THREE.Mesh(secondPlankGeo, secondPlankMat);
secondPlank.position.x = -2.014;
secondPlank.position.y = 2.5;
secondPlank.position.z = 2.00;
scene.add(secondPlank);

//third plank
let thirdPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let thirdPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let thirdPlank = new THREE.Mesh(thirdPlankGeo, thirdPlankMat);
thirdPlank.position.x = -2.014;
thirdPlank.position.y = 2.5;
thirdPlank.position.z = 2.00;
scene.add(thirdPlank);

//fourth plank
let fourthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fourthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fourthPlank = new THREE.Mesh(fourthPlankGeo, fourthPlankMat);
fourthPlank.position.x = -2.014;
fourthPlank.position.y = 2.5;
fourthPlank.position.z = 2.00;
scene.add(fourthPlank);

//fifth plank
let fifthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fifthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fifthPlank = new THREE.Mesh(fifthPlankGeo, fifthPlankMat);
fifthPlank.position.x = -2.014;
fifthPlank.position.y = 2.5;
fifthPlank.position.z = 2.00;
scene.add(fifthPlank);

//sixth plank
let sixthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let sixthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let sixthPlank = new THREE.Mesh(sixthPlankGeo, sixthPlankMat);
sixthPlank.position.x = -2.014;
sixthPlank.position.y = 2.5;
sixthPlank.position.z = 2.00;
scene.add(sixthPlank);

//seventh plank
let seventhPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let seventhPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let seventhPlank = new THREE.Mesh(seventhPlankGeo, seventhPlankMat);
seventhPlank.position.x = -2.014;
seventhPlank.position.y = 2.5;
seventhPlank.position.z = 2.00;
scene.add(seventhPlank);

//eighth plank
let eighthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let eighthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let eighthPlank = new THREE.Mesh(eighthPlankGeo, eighthPlankMat);
eighthPlank.position.x = -2.014;
eighthPlank.position.y = 2.5;
eighthPlank.position.z = 2.00;
scene.add(eighthPlank);

//ninth plank
let ninthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let ninthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let ninthPlank = new THREE.Mesh(ninthPlankGeo, ninthPlankMat);
ninthPlank.position.x = -2.014;
ninthPlank.position.y = 2.5;
ninthPlank.position.z = 2.00;
scene.add(ninthPlank);

//tenth plank
let tenthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let tenthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let tenthPlank = new THREE.Mesh(tenthPlankGeo, tenthPlankMat);
tenthPlank.position.x = -2.014;
tenthPlank.position.y = 2.5;
tenthPlank.position.z = 2.00;
scene.add(tenthPlank);

//eleventh plank
let eleventhPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let eleventhPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let eleventhPlank = new THREE.Mesh(eleventhPlankGeo, eleventhPlankMat);
eleventhPlank.position.x = -2.014;
eleventhPlank.position.y = 2.5;
eleventhPlank.position.z = 2.00;
scene.add(eleventhPlank);

//twelfth plank
let twelfthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let twelfthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let twelfthPlank = new THREE.Mesh(twelfthPlankGeo, twelfthPlankMat);
twelfthPlank.position.x = -2.014;
twelfthPlank.position.y = 2.5;
twelfthPlank.position.z = 2.00;
scene.add(twelfthPlank);

//thirteenth plank
let thirteenthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let thirteenthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let thirteenthPlank = new THREE.Mesh(thirteenthPlankGeo, thirteenthPlankMat);
thirteenthPlank.position.x = -2.014;
thirteenthPlank.position.y = 2.5;
thirteenthPlank.position.z = 2.00;
scene.add(thirteenthPlank);

//fourteenth plank
let fourteenthPlankGeo = new THREE.BoxGeometry(0.01, 5, 8);
let fourteenthPlankMat = new THREE.MeshToonMaterial({color: 0x001f3d});
let fourteenthPlank = new THREE.Mesh(fourteenthPlankGeo, fourteenthPlankMat);
fourteenthPlank.position.x = -2.014;
fourteenthPlank.position.y = 2.5;
fourteenthPlank.position.z = 2.00;
scene.add(fourteenthPlank);

///////////////////////////////////////////////////////////////////////////////////////////////////
//For Light Sources
///////////////////////////////////////////////////////////////////////////////////////////////////
