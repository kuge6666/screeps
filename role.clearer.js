var roleClearer = {

    
    run: function(creep) {
        var storage = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
				filter: (structure) => {
					return (structure.structureType == STRUCTURE_STORAGE)
				}});
        const target = creep.room.find(FIND_DROPPED_RESOURCES);

        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) { // building && 背包为空
            creep.memory.building = false;  // 变为 非building状态
            
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) { // 非building状态 && 背包满(空余为0)
	        creep.memory.building = true;  // 变为 building状态
	        
	    }
        if(!creep.memory.building && target.length > 0){
            
                
                
                    if(creep.pickup(target[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target[0]), {reusePath: 50};
                    }
                    
           
            
        }
        else{

            
                if(creep.transfer(storage[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage[0], {reusePath: 50});
                    
                }
                if(creep.transfer(storage[0],RESOURCE_ENERGY) == ERR_NOT_ENOUGH_RESOURCES){
                    Game.Spawns['Spawn1'].recycleCreep(creep)
                }
			
			
        }
        
                
            
                
            
        




    }

}

module.exports = roleClearer;