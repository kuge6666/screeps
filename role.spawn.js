var roleSpawn = {

    
    run: function(spawn) {
        spawn = Game.Spawn['Spawn1']

        for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            //console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    var mineralharvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'mineralharvester');
    var chargers = _.filter(Game.creeps, (creep) => creep.memory.role == 'charger');
    var transfers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer'&& creep.memory.targetRoomName == 'E12S45'&& creep.memory.work == 1);
    var transfers0 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer'&& creep.memory.targetRoomName == 'E12S45'&& creep.memory.work == 0);
    var transfers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer'&& creep.memory.targetRoomName == 'E11S45'&& creep.memory.work == 1);
    var transfers3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer'&& creep.memory.targetRoomName == 'E11S45'&& creep.memory.work == 0);
    var killers = _.filter(Game.creeps, (creep) => creep.memory.role == 'killer');
    
    var cleaners = _.filter(Game.creeps, (creep) => creep.memory.role == 'cleaner');
    var harvesters1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.sourceIndex == 1 && creep.memory.targetRoomName == 'E12S45');
    var harvesters0 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.sourceIndex == 0 && creep.memory.targetRoomName == 'E12S45');

    var harvesters3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.sourceIndex == 1 && creep.memory.targetRoomName == 'E11S45');
    var harvesters4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.sourceIndex == 0 && creep.memory.targetRoomName == 'E11S45');

    var upgraders1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.containerIndex == 'link'&& creep.memory.targetRoomName == 'E12S45');
    var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.containerIndex == 0&& creep.memory.targetRoomName == 'E11S45');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    var clearers = _.filter(Game.creeps, (creep) => creep.memory.role == 'clearer');
    
    var defenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender');
    var movers = _.filter(Game.creeps, (creep) => creep.memory.role == 'mover');
    //console.log('Harvesters: ' + harvesters.length);
    //var controller_level = spawn.room.controller.level; // 查看控制器等级
    //console.log('controller:' + spawn.room.controller.level)
    
    if(movers.length <0) { 
        var newName = '长途旅行号' +Game.time;
        
        spawn.spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'mover'}});  
    }
    if(chargers.length <0) { 
        var newName = '充能员' + Game.time;
        
        spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,MOVE], newName, 
            {memory: {role: 'charger'}});  
    }
    

    //if(cleaners.length <1) { 
    //    var newName = '充能员' + Game.time;
    //    
    //    spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,MOVE], newName, 
    //        {memory: {role: 'cleaner'}});  
    //}

    if(killers.length <0){
        var newName = 'Killer';
        
        spawn.spawnCreep([ATTACK,MOVE,MOVE,MOVE,MOVE,CLAIM,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'killer'}}); 
    }
    if(clearers.length <1){
        var newName = '清洁工';
        
        spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,MOVE], newName, 
            {memory: {role: 'clearer'}}); //看到好好写
    }

    if(transfers1.length < 1) { 
        var newName = 'transfer' + Game.time;
        
        spawn.spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], newName, 
            {memory: {role: 'transfer',work : 1,targetRoomName : 'E12S45'}});  
    }
    if(transfers0.length < 1) { 
        var newName = 'transfer' + Game.time;
        
        spawn.spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], newName, 
            {memory: {role: 'transfer',work : 0,targetRoomName : 'E12S45'}});  
    }
    if(transfers2.length < 1) { 
        var newName = 'transfer' + Game.time;
        
        spawn.spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], newName, 
            {memory: {role: 'transfer',work : 1,targetRoomName : 'E11S45'}});  
    }
    if(transfers3.length < 1) { 
        var newName = 'transfer' + Game.time;
        
        spawn.spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], newName, 
            {memory: {role: 'transfer',work : 0,targetRoomName : 'E11S45'}});  
    }
    //if(mineralharvesters.length < 1) { 
    //    var newName = 'Harvester' + Game.time;
    //    
    //    spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE], newName, 
    //        {memory: {role: 'mineralharvester', sourceIndex: 3,targetRoomName : 'E12S45'}});  
    //}
    
    
    if(harvesters1.length < 1) { 
        var newName = 'Harvester' + Game.time;
        
        spawn.spawnCreep([WORK,MOVE,WORK], newName, 
            {memory: {role: 'harvester', sourceIndex: 1,targetRoomName : 'E12S45'}});  
    }
    if(harvesters0.length < 1) { 
        var newName = 'Harvester' + Game.time;
        
        spawn.spawnCreep([WORK,MOVE,WORK,WORK,MOVE,WORK,WORK,MOVE,WORK,MOVE], newName, 
            {memory: {role: 'harvester', sourceIndex: 0,targetRoomName : 'E12S45'}});  
    }
    if(harvesters3.length < 1) { 
        var newName = 'Harvester' + Game.time;
        
        spawn.spawnCreep([WORK,MOVE,WORK,WORK,MOVE,WORK,WORK,MOVE,WORK,MOVE,CARRY], newName, 
            {memory: {role: 'harvester', sourceIndex: 1,targetRoomName : 'E11S45'}});  
    }
    if(harvesters4.length < 1) { 
        var newName = 'Harvester' + Game.time;
        
        spawn.spawnCreep([WORK,MOVE,WORK,WORK,MOVE,WORK,WORK,MOVE,WORK,MOVE,CARRY], newName, 
            {memory: {role: 'harvester', sourceIndex: 0,targetRoomName : 'E11S45'}});  
    }
    
    
    
    

    

    
    if(upgraders1.length < 1) { 
        var newName = 'Upgrader' + Game.time;
        
        spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader',containerIndex:'link',targetRoomName : 'E12S45'}});  
    }
    if(upgraders2.length < 1) { 
        var newName = 'Upgrader' + Game.time;
        
        spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader',containerIndex:0,targetRoomName : 'E11S45'}});  
    }
    
    var constructionTargets = spawn.room.find(FIND_CONSTRUCTION_SITES);
    

    if(builders.length < 1 && constructionTargets.length > 0 ){
        var nameBuilder = 'Builder' + Game.time;
        
        spawn.spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], nameBuilder, 
            {memory:{role: 'builder'}});
    }
    //const target = spawn.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //if(defenders.length <0){
    //    if(target) {
//
    //            var newName = 'Defender' + Game.time;
    //                
     //           spawn.spawnCreep([ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
     //               {memory:{role: 'defender'}});
     //       
      //  }
    //}
        
    // 孵化过程可视化
    if(spawn.spawning) { 
        var spawningCreep = Game.creeps[spawn.spawning.name];
        spawn.room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            spawn.pos.x + 1, 
            spawn.pos.y, 
            {align: 'left', opacity: 0.8});
    }

		

	    
	}
};

module.exports = roleSpawn;

    
    
        
    