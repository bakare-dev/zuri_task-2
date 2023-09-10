const validate = require("validate.js");
const Service = require("../services/UserService");
const Constraint = require("../constraints/Constriant");
const Helper = require("../utils/Helper");


let instance;

class Controller {

    #service;
    #constraint;
    #helper

    constructor () {
        if(instance) return instance;

        this.#service = new Service();
        this.#constraint = new Constraint();
        this.#helper = new Helper();

        instance = this;
    }

    getUsers = async (req, res) => {
        try {
            const validation = validate(req.query, this.#constraint.getAllUserConstraint());

            if(validation) {
                res.status(400).json(validation);
                return;
            }

            const users = await this.#service.fetchAll(req.query);

            if (!users.count) {
                this.#helper.logger(users);
                res.status(400).json({error: "internal server error"})
                return;
            }

            res.status(200).json(users)
        } catch (ex) {
            this.#helper.logger(ex);
            res.status(500).json({error: "internal server error"});
        }
    }

    getUser = async (req, res) => {
        try {
            //validate user inputs
            const validation = validate(req.params, this.#constraint.getUserConstraint());

            if(validation) {
                res.status(400).json(validation);
                return;
            }

            let user;
            user = await this.#service.findOneByCondition({
                name: req.params.key
            })

            if (user) {
                res.status(200).json(user);
                return;
            }

            user = await this.#service.findById(req.params.key);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({error: "user not found"});
            }
        } catch (ex) {
            this.#helper.logger(ex);
            res.status(500).json({error: "internal server error"});
        }
    }

    createUser = async (req, res) => {
        try {
            //validate user inputs
            const validation = validate(req.body, this.#constraint.getCreateUserConstraint());

            if(validation) {
                res.status(400).json(validation);
                return;
            }

            const nameInUse = await this.#service.findOneByCondition({
                name: req.body.name
            })

            if (nameInUse) {
                res.status(400).json({error: "name in use"});
                return;
            }

            //create user
            const user = await this.#service.create(req.body);

            if (!user.id) {
                this.#helper.logger(user);
                res.status(400).json({error: "internal server error"})
                return;
            }

            res.status(200).json({message: "user created successfully", user})
        } catch (ex) {
            this.#helper.logger(ex);
            res.status(500).json({error: "internal server error"});
        }
    }

    updateUser = async (req, res) => {
        try {
            //validate user inputs
            const validation = validate(req.params, this.#constraint.getUpdateUserConstraint());

            if(validation) {
                res.status(400).json(validation);
                return;
            }

            const id = req.params.id;

            //validate user id
            const isUserValid = await this.#service.findById(id);

            if (!isUserValid) {
                res.status(404).json({error: "user not found"});
                return;
            }

            //update user details
            const response = await this.#service.update(id, req.body);

            if (response[0] != 1) {
                this.#helper.logger(response);
                res.status(400).json({error: "internal server error"});
                return;
            }

            res.status(200).json({message: "user details updated successfully"});
        } catch (ex) {
            this.#helper.logger(ex);
            res.status(500).json({error: "internal server error"});
        }
    }

    deleteUser = async (req, res) => {
        try {
            //validate user inputs
            const validation = validate(req.params, this.#constraint.getDeleteUserConstraint());

            if(validation) {
                res.status(400).json(validation);
                return;
            }

            const id = req.params.id;

            //validate user id
            const isUserValid = await this.#service.findById(id);

            if (!isUserValid) {
                res.status(404).json({error: "user not found"});
                return;
            }

            await this.#service.delete(id);

            res.status(200).json({message: "user deleted successfully"})
        } catch (ex) {
            this.#helper.logger(ex);
            res.status(500).json({error: "internal server error"});
        }
    }
}

module.exports = Controller;