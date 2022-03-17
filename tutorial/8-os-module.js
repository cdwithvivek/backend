// built in modules
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)

// up time of system
const time = os.uptime();
console.log(`System uptime is: ${time}s`);

// current os
const currentOS = {
    name : os.type(),
    release : os.release(),
    freeMem: os.freemem()
};
console.log(currentOS);