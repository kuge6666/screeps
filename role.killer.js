var roleKiller = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        const targetRoomName = 'E14S44'
        if (creep.room.name !== targetRoomName) {  
            creep.moveTo(new RoomPosition(25, 25, targetRoomName), { visualizePathStyle: { stroke: '#ffaa00' } });  
            return;  
            }  
        else{
            //creep.moveTo(new RoomPosition(42, 24, targetRoomName), { visualizePathStyle: { stroke: '#ffaa00' } });
        }
        

        const targetCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        const targetSpawnd = creep.pos.findClosestByRange(FIND_HOSTILE_SPAWNS);
        const targetController = creep.room.controller

       
        if(1==1 ){
            
                if(creep.attack(targetCreep) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetCreep, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
                
            
        }
        if(creep.memory.workset == 'carry'){
            if(creep.store.getFreeCapacity() > 0){
                const sources = creep.room.find(FIND_SOURCES);  
        if (sources.length > 0) {  
            if (creep.harvest(sources[creep.memory.sourceIndex]) === ERR_NOT_IN_RANGE) {  
                creep.moveTo(sources[creep.memory.sourceIndex], { visualizePathStyle: { stroke: '#ffaa00', lineStyle: 'dashed', opacity: .5 } });  
            }  
        }  
            }
        }

	}
};

module.exports = roleKiller;
