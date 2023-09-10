"use strict"
const fs = require("fs").promises;
const path = require("path")

let instance;

class Helper {

    #logFolderPath;

    constructor(){

        if(instance) return instance;

        this.#logFolderPath = path.join(__dirname, '../logs');

        instance = this;
    }

    paginate = (page, size) => {


        const pageInt = Number.parseInt(page);
        const sizeInt = Number.parseInt(size);


        let localPage = 0;
        let localSize = 50;

        if (!Number.isNaN(pageInt) && pageInt > 0) {
            localPage = pageInt;
        }

        if (!Number.isNaN(sizeInt) && sizeInt > 0 && sizeInt <= 50) {
            localSize = sizeInt
        }


        const offset = localPage * localSize;
        const limit = localSize;
      
        return {
          offset,
          limit,
        };
    }

    logger = async (error) => {
        console.log(error)
        const timestamp = new Date().toISOString();
        const date = new Date().getDate() + "-" + (new Date().getMonth()+1) + "-" + new Date().getFullYear()
        const logMessage = `[${timestamp}] ${error.message || JSON.stringify(error)}\n`; 

        try {
            await fs.mkdir(this.#logFolderPath, { recursive: true });

            const logFilePath = path.join(this.#logFolderPath, `${date}-log.txt`);
            await fs.appendFile(logFilePath, logMessage, 'utf8');
        } catch (err) {
            console.error('Error writing to error.txt:', err);
        }
    }
}


module.exports = Helper;