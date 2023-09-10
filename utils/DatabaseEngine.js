"use strict";
const config = require("../config/main.settings")
const { Sequelize } = require('sequelize');
const Helper = require("./Helper");


let instance;

class DatabaseEngine {

    #connectionManager;
    
    #helper;

    constructor() {

        if (instance) return instance;

        this.#helper = new Helper()

        this.#connectionManager = new Sequelize(config.database.development.database, config.database.development.username, config.database.development.password, {
            host: config.database.development.host,
            dialect: config.database.development.dialect,
            logging: false
        });

        instance = this;
    }

    connect = async (cb) => {
        try {
            await this.#connectionManager.authenticate();
            await this.#synchronize();
            cb();
        } catch (e) {
            this.#helper.logger(e);
        }
    }

    #synchronize = async () => {
        try {

            const db = {};

            db.user = require("../entities/User");

            this.#connectionManager.db = db;

            await this.#connectionManager.sync({alter: true});

        } catch (e) {
            this.#helper.logger(e);
        }
    }

    getConnectionManager = () => this.#connectionManager;
}

module.exports = DatabaseEngine;