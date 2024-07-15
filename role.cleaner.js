var roleCleaner = {

    /** @param {Creep} creep **/
    run: function(creep) {
		
        var extension = creep.pos.findClosestByPath(FIND_STRUCTURES, { //找出需要补充能量的建筑
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION)&&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });

        var targets = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || 
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_STORAGE) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            targets.sort((a,b)=>{
                //优先级顺序:EXTENSION，TOWER，SPAWN， STORAGE
                if(a.structureType === STRUCTURE_EXTENSION)return -1;
                if(b.structureType === STRUCTURE_EXTENSION)return 1;
                if(a.structureType === STRUCTURE_SPAWN)return -1;
                if(b.structureType === STRUCTURE_SPAWN)return 1;
                
                if(a.structureType === STRUCTURE_TOWER)return -1;
                if(b.structureType === STRUCTURE_TOWER)return 1;
    
    
    
                //STORAGE 是最后的选择，所以不需要在这里特别处理return 8;
            });
            if(creep.memory.work && creep.store[RESOURCE_ENERGY] == 0) { // building && 背包为空
                creep.memory.work = false;  // 变为 非building状态
                
            }
            if(!creep.memory.work && creep.store.getFreeCapacity() == 0) { // 非building状态 && 背包满(空余为0)
                creep.memory.work = true;  // 变为 building状态
                
                
            }

            
            if(creep.memory.work) { // 背包满，干活
                
                
            
                if(targets.length > 0) { // 需要维护的建筑数目 > 0
                    if(creep.transfer(extension, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(extension, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                
                }
                
            }
            else {
                
                var storage = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE)
                    }});
                
                if(creep.withdraw(storage[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                    
                }
            }
        
        //const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
        //if(target) {
        //    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
        ///        creep.moveTo(target);
        //    }
            
            
        //}    
    

	}
};

module.exports = roleCleaner;

