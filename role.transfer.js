var roleTransfer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var targetRoomName = creep.memory.targetRoomName;  
        var myRoomName = 'E12S45'
        var containers = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER)
            }});
            container = containers[creep.memory.work]
        
                if(creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                    if (creep.room.name !== targetRoomName) {  
                
                
                        creep.moveTo(new RoomPosition(45, 10, targetRoomName), {reusePath: 50});  
                        return;  
                        }
                    else{
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        
                        creep.moveTo(container, {reusePath: 50});
                    }
                    
                    
                    }
                    
                    
                }
                else{
                    if (creep.room.name !== myRoomName) {  
                
                
                        creep.moveTo(new RoomPosition(45, 10, myRoomName), {reusePath: 50});  
                        return;  
                        }
                    else{
                        var targets = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
                        filter: (structure) => {
                            return (
                                    structure.structureType == STRUCTURE_STORAGE) &&
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                        }
                });
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0],  {reusePath: 50});
                    }
                    }
                    
                }
                
                

	}
};

module.exports = roleTransfer;
