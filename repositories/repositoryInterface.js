class RepositoryInterface {
    async all() {}
    async get(id) {}
    async create(data) {}
    async update(id, data) {}
    async delete(id) {}
  }
  
  module.exports = RepositoryInterface;