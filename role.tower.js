var roleTower = {

    /** @param {Creep} creep **/
    run: function(structure) {
        console.log(structure)
		var targets = structure.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER||
                       structure.structureType == STRUCTURE_WALL||
                       structure.structureType == STRUCTURE_ROAD||
                    structure.structureType == STRUCTURE_RAMPART
                ) &&
                       structure.hits < structure.hitsMax
            }
        });
    
       targets.sort((a,b)=>{
            //优先级顺序:EXTENSION，TOWER，SPAWN， STORAGE
            if(a.structureType === STRUCTURE_CONTAINER)return -1;
            if(b.structureType === STRUCTURE_CONTAINER)return 1;
            if(a.structureType === STRUCTURE_ROAD)return -1;
            if(b.structureType === STRUCTURE_ROAD)return 1;
            if(a.structureType === STRUCTURE_WALL)return -1;
            if(b.structureType === STRUCTURE_WALL)return 1;
           
            
            if(a.structureType === STRUCTURE_RAMPART)return -1;
            if(b.structureType === STRUCTURE_RAMPART)return 1;
    
    
    
    
            //STORAGE 是最后的选择，所以不需要在这里特别处理return 8;
        });
            
            const  patient= structure.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: function(object) {
                    return object.hits < object.hitsMax;
                }
            });
            if(patient) {
                structure.heal(patient)
            }
            else{
                if(structure) {
                var closestHostile = structure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if(closestHostile) {
                    structure.attack(closestHostile);
                }
                else{
                    
                    if(targets.length) {
                        structure.repair(targets[0])
                        
                    }
                        
                }
    
                }
            }

	    
	}
};

module.exports = roleTower;

