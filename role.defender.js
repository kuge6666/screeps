var roleDefender = {

    /** @param {Creep} creep **/
    run: function(creep) {
        creep.say("你打我啊~")
        const hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS);
        
        if(hostileCreeps.length > 0) {
            var target = creep.pos.findClosestByPath(hostileCreeps) 
            if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
	    
	}
};

module.exports = roleDefender;

