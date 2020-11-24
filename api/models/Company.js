module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        city: {
            type: 'string',
        },
        address: {
            type: 'string',
        },
        user: {
            model: 'User',
            columnName: 'userId',
            required: true
        },

        //Association
        jobs: {
            collection: 'Job',
            via: 'company'
        },
    }

}