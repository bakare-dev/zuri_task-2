const Helper = require("../utils/Helper");

let instance;
class Service {
  #entity;
  #helper;

  constructor(entity) {
    if (instance) return instance;

    this.#entity = entity;
    this.#helper = new Helper();

    instance = this;
  }

  create = async (data) => {
    let response;
    response = await this.#entity.create(data);
    return response;
  };

  update = async (id, data) => {
    let response = await this.#entity.update(data, { where: { id } });
    return response;
  };

  delete = async (id) => {
    let response = await this.#entity.destroy({ where: { id } });
    return response;
  };

  findById = async (id) => {
    let response = await this.#entity.findByPk(id);

    if (!response) return {};

    return response.toJSON();
  };

  findOneByCondition = async (query) => {
    let response = await this.#entity.findOne({
      where: query,
    });

    return response;
  };

  fetchAll = async (query) => {
    let response;
    response = await this.#entity.findAndCountAll({
      order: [["createdAt", "DESC"]],
      ...this.#helper.paginate(query.page, query.size),
    });

    if (query.page && query.page != "undefined") {
      response.currentPage = query.page;
    } else {
      response.currentPage = "0";
    }

    if (query.size && query.size != "undefined") {
      response.currentSize = query.size;
    } else {
      response.currentSize = "50";
    }

    return response;
  };

  fetchAllByCondition = async (query) => {
    let response;
    response = await this.#entity.findAndCountAll({
      where: query,
      order: [["createdAt", "DESC"]],
      ...this.#helper.paginate(query.page, query.size),
    });

    if (query.page && query.page != "undefined") {
      response.currentPage = query.page;
    } else {
      response.currentPage = "0";
    }

    if (query.size && query.size != "undefined") {
      response.currentSize = query.size;
    } else {
      response.currentSize = "50";
    }

    return response;
  };

  getRecordCount = async () => {
    return await this.#entity.count();
  };

  insertBulk = async (bulk) => {
    return await this.#entity.bulkCreate(bulk).catch((e) => console.log(e));
  };
}

module.exports = Service;
