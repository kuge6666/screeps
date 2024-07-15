var rolesuperBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
		//creep.say(creep.store.getUsedCapacity() +"/"+ creep.store.getCapacity() )

		

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) { // building && 背包为空
            creep.memory.building = false;  // 变为 非building状态
            creep.say("收集资源啦~")
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) { // 非building状态 && 背包满(空余为0)
	        creep.memory.building = true;  // 变为 building状态
	        creep.say("开工啦~")
	    }

	    if(creep.memory.building) {  // building状态的时候
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES); // 寻找建筑位
            if(targets.length) {  // targets.length > 0  || 建筑位 > 0
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]); // 绘制路径
                }
            }
			else{
				Game.Spawns['Spawn2'].recycleCreep(creep)
			}
	    }
	    else {  // 非building状态的时候， 到source旁边并采集
	        
			var sources =creep.pos.findClosestByPath(FIND_SOURCES);
                            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(sources, {
									visualizePathStyle: { stroke: '#ffaa00' }
								});
                                
                            }
	    }

	}
};

module.exports = rolesuperBuilder;

