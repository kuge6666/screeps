var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function (creep) {
        var targetRoomName = creep.memory.targetRoomName;
        var myRoomName = 'E12S45'
        //creep.say(creep.store.getUsedCapacity() +"/"+ creep.store.getCapacity())

        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {  // 升级状态&&能量不足的时候，变为采集者
            creep.memory.upgrading = false;

        }
        if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {  // 非升级状态&&能量满的时候，变为升级状态
            creep.memory.upgrading = true;

        }

        if (creep.memory.upgrading) { // 升级状态，找到控制器并升级 + 可视化


            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, { reusePath: 50 });

            }


        }
        else {  // 采集状态 + 可视化



            if (creep.room.name !== targetRoomName) {


                creep.moveTo(new RoomPosition(45, 10, targetRoomName), { reusePath: 50 });
                return;
            }
            else {
                var containers = creep.room.find(FIND_STRUCTURES, { //找出需要补充能量的建筑
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER)

                    }
                });

                if (creep.memory.containerIndex == 'link') {

                    const linkFrom = Game.rooms['E12S45'].lookForAt('structure', 33, 23)[0];
                    if (creep.withdraw(linkFrom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(linkFrom, { reusePath: 50 });

                    }
                }

                else {

                    var container = containers[creep.memory.containerIndex];
                    console.log(container)
                    var sources =creep.room.find(FIND_SOURCES);
                            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(sources[0], {reusePath: 50});
                                
                            }


                }
            }

        }
    }
};

module.exports = roleUpgrader;
