var roleCharger = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var cleaners = _.filter(Game.creeps, (creep) => creep.memory.role == 'cleaner');
        

        if(creep.pos != (27,30)){
            creep.moveTo(27,30)
        }
        
        if(cleaners.length < 1)(
            creep.memory.role = 'cleaner'
        )
        else{
            var targets = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
            filter: (structure) => {
                return (
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_LINK) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
    });
    targets.sort((a,b)=>{
        
        if(a.structureType === STRUCTURE_SPAWN)return -1;
        if(b.structureType === STRUCTURE_SPAWN)return 1;
        if(a.structureType === STRUCTURE_TOWER)return -1;
        if(b.structureType === STRUCTURE_TOWER)return 1;
        if(a.structureType === STRUCTURE_LINK)return -1;
        if(b.structureType === STRUCTURE_LINK)return 1;

        //STORAGE 是最后的选择，所以不需要在这里特别处理return 8;
    });
    if(creep.memory.work && creep.store[RESOURCE_ENERGY] == 0) { // building && 背包为空
        creep.memory.work = false;  // 变为 非building状态
        
    }
    if(!creep.memory.work && creep.store.getFreeCapacity() == 0) { // 非building状态 && 背包满(空余为0)
        creep.memory.work = true;  // 变为 building状态
        
        
    }

    var store = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
        filter: (structure) => {
            return (
                    structure.structureType == STRUCTURE_STORAGE) 
                
        }
});

    if(creep.memory.work) { // 背包满，干活
        
        
    
         // 需要维护的建筑数目 > 0
            creep.transfer(targets[0], RESOURCE_ENERGY) 
            
                
            
        
        
        
    }
    else {
        if(store[0].store.getUsedCapacity(RESOURCE_ENERGY) > 20000){
            var storage = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_STORAGE)
            }});
        
        creep.withdraw(storage[0],RESOURCE_ENERGY)
            
        }
        
            
        
    }
        }
		


	}
};

module.exports = roleCharger;

