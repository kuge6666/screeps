var roleLink = {

    /** @param {Creep} creep **/
    run: function(structure) {
        const linkFrom = Game.rooms['E12S45'].lookForAt('structure', 33, 23)[0];

        
        
            structure.transferEnergy(linkFrom);
		

	    
	}
};

module.exports = roleLink;

