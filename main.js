var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleDefender = require('role.defender');
var roleClearer = require('role.clearer');
var roleCleaner = require('role.cleaner');
var roleKiller = require('role.killer');
var roleTower = require('role.tower');
var roleTransfer = require('role.transfer');
var roleCharger = require('role.charger')
var roleLink = require('role.link')
var roleMineralharvester = require('role.mineralharvester')
var roleMover = require('role.mover')
var roleSpawn = require('role.spawn')
var rolesuperBuilder = require('role.superBuilder')

////const room = Game.rooms[Game.spawns['Spawn1'].room.name];
//const towers = room.find(FIND_MY_STRUCTURES).filter(structure => structure.structureType === STRUCTURE_TOWER);

module.exports.loop = function () {

    //if(Game.cpu.bucket == 10000) {
    //    Game.cpu.generatePixel();
    //}


    tower1 = Game.getObjectById('668e184046deeb0da97e0646')
    tower2 = Game.getObjectById('668df7e6c6deef2f8cce9564')
    roleTower.run(tower1)
    roleTower.run(tower2)
    var spawn = Game.spawns['Spawn1']
    roleSpawn.run(spawn);

    link =Game.getObjectById('668d38ca745cc73578000a14')
        roleLink.run(link)
    











    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'clearer') {
            roleClearer.run(creep);
        }

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'defender') {
            roleDefender.run(creep);
        }


        if (creep.memory.role == 'cleaner') {
            roleCleaner.run(creep);
        }

        if (creep.memory.role == 'killer') {
            roleKiller.run(creep);
        }

        if (creep.memory.role == 'transfer') {
            roleTransfer.run(creep);
        }
        if (creep.memory.role == 'charger') {
            roleCharger.run(creep);
        }
        //if(creep.memory.role == 'mover') {
        //    roleMover.run(creep);
        //}
        if (creep.memory.role == 'superBuilder') {
            rolesuperBuilder.run(creep);
        }
        //if(creep.memory.role == 'mineralharvester') {
        //    roleMineralharvester.run(creep);
        //}





    }


}
