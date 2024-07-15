var roleMover = {
    /** @param {Creep} creep **/
    run: function (creep) {
        //Game.spawns['Spawn1'].spawnCreep([CLAIM,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'killerClaimer', {memory: {role: 'mover'}});


            
        // 定义一系列的房间和位置  
        const waypoints = [
            
            { room: 'E9S39', x: 36, y: 34 }
            


        ];

        // 当前的目标索引  
        let currentIndex = creep.memory.currentIndex || 0;
        // 当前目标  
        const currentWaypoint = waypoints[currentIndex];

        // 如果creep不在目标房间或目标坐标上，则移向该目标  
        
                if (creep.room.name !== currentWaypoint.room ||
            (currentWaypoint.x !== undefined && currentWaypoint.y !== undefined &&
                !creep.pos.isEqualTo(currentWaypoint.x, currentWaypoint.y))) {
            if (currentWaypoint.x !== undefined && currentWaypoint.y !== undefined) {
                creep.moveTo(new RoomPosition(currentWaypoint.x, currentWaypoint.y, currentWaypoint.room), {
                    visualizePathStyle: { stroke: '#ffaa00' }
                });
            } else {
                creep.moveTo(new RoomPosition(25, 25, currentWaypoint.room), {
                    visualizePathStyle: { stroke: '#ffaa00' }
                });
            }
            return; // 移动操作后退出函数  
        }

        // 如果creep已经到达E57N13房间的(7, 28)坐标  
        if (creep.room.name === 'E9S39' && creep.pos.x === 36 && creep.pos.y === 34) {
            
            creep.memory.role = 'superbuilder'
        } else {
            console.log('Creep is still moving to the next waypoint.');
        }

        creep.memory.currentIndex = currentIndex + 1;
                    
                

            
        
    }
};

module.exports = roleMover
