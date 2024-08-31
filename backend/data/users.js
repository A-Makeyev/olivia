const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin',
        email: 'admin@email.com',
        password: bcrypt.hashSync('admin', 12),
        avatar: 'avatar.png',
        role: 'admin'
    },
    {
        name: 'Anatoly Makeyev',
        email: 'anatoly.makeyev@cloudbeat.io',
        password: bcrypt.hashSync('iLoveSpaceX69', 10),
        avatar: 'spongebob.jpg'
    },
    {
        name: 'Avital Shtivelberg',
        email: 'tallishtiv@gmail.com',
        password: bcrypt.hashSync('ASH1997', 10),
        avatar: 'Screen20-1725137007760-5805d260-3d5b-4251-8117-d96b07852553.png'
    },
    {
        name: 'Anazstasia Karzo',
        email: 'an.karz@hotmail.com',
        password: bcrypt.hashSync('karzova', 10),
        avatar: 'default-avatar'
    },
    {
        name: 'Jhonny Duo',
        email: 'Jhonny@gmail.com',
        password: bcrypt.hashSync('Pa55w0rD', 10),
        avatar: 'default-avatar'
    },
]

module.exports = users