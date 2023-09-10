let instance;

class Constriant {

    constructor () {
        if(instance) return instance;

        instance = this;
    }

    getCreateUserConstraint = () => {
        return {
            name: {
                presence: true,
                length: {
                    minimum: 3
                }
            },
        }
    }

    getUserConstraint = () => {
        return {
            key: {
                presence: true,
                length: {
                    minimum: 1,
                }
            },
        }
    }

    getAllUserConstraint = () => {
        return {
            page: {
                presence: true,
                numericality: {
                    onlyInteger: true,
                }
            },
            size: {
                presence: true,
                numericality: {
                    onlyInteger: true,
                    greaterThan: 0
                }
            },
        }
    }

    getUpdateUserConstraint = () => {
        return {
            id: {
                presence: true,
                numericality: {
                    onlyInteger: true,
                    greaterThan: 0
                }
            },
        }
    }

    getDeleteUserConstraint = () => {
        return {
            id: {
                presence: true,
                numericality: {
                    onlyInteger: true,
                    greaterThan: 0
                }
            },
        }
    }
}

module.exports = Constriant;