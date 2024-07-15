/**  
 * 简单的Harvester角色  
 * 专注于从source中采集能量，并将其带回controller或storage  
 */  
var roleMineralharvester = {
    

    /** @param {Creep} creep **/
    run: function(creep) {

        
        
        
    // 如果没有能量进行移动或工作，则尝试寻找最近的source补充能量 
 
        var targetRoomName = creep.memory.targetRoomName;  
         
        var containers = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER)
            }});
        
        var container = containers[creep.memory.sourceIndex];
        
            if (creep.room.name !== targetRoomName) {  
                
                
                creep.moveTo(new RoomPosition(45, 10, targetRoomName), { visualizePathStyle: { stroke: '#ffaa00' } });  
                return;  
                }
            else{
                
                
                
                    if(container == undefined){
                        
                        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) { // building && 背包为空
                        creep.memory.building = false;  // 变为 非building状态
                        }
                        if(!creep.memory.building && creep.store.getFreeCapacity() == 0) { // 非building状态 && 背包满(空余为0)
                        creep.memory.building = true;  // 变为 building状态
                        }
                        if(creep.memory.building) {  // building状态的时候
                            var targets = creep.room.find(FIND_CONSTRUCTION_SITES); // 寻找建筑位
                              // targets.length > 0  || 建筑位 > 0
                                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}}); // 绘制路径
                                }
                            
                            
                        }
                        else {  // 非building状态的时候， 到source旁边并采集
                            
                            var sources =creep.pos.findClosestByPath(FIND_SOURCES);
                            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                                
                            }
                        }
                        





                    }
                    else{

                        var minerals =container.pos.findClosestByPath(FIND_MINERALS);
                        if(container.hitsMax - container.hits >50000){
                            if(creep.repair(container) == ERR_NOT_ENOUGH_RESOURCES){
                                creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00', lineStyle: 'dashed', opacity: .5 } });  
                                creep.harvest(minerals)
                            }
                            
                        }
                        else{
                            if (creep.pos != container.pos.toString()) { 
                            
                            creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00', lineStyle: 'dashed', opacity: .5 } });  
                        }  
                        else{
                            creep.harvest(minerals)
                        }
                        }
                        
                        
                        
                        
                    }
                    
                
            }  
                
            // 如果有能量，则寻找最近的controller或storage来卸载能量  
            
            
        
    }
    
    
};

module.exports = roleMineralharvester;


    
// 假设你在某处（如spawn中）创建Harvester时使用了这个role  
// Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester1', { memory: { role: 'harvester' } });  
  
// 然后在你的main loop中，你可能需要这样来启动每个creep的循环  
// for (const name in Game.creeps) {  
//     const role = Game.creeps[name].memory.role;  
//     if (role === 'harvester') {  
//         require('path/to/harvester').loop.call({name: name});  
//     }  
// }