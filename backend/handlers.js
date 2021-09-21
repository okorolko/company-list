const companyRepository = require("./companyRepository");

exports.getCompanies = function (ctx) {
  const tags = ctx.query.tags?.split(",");

  const result = companyRepository.listCompanies({
    tags,
    search: ctx.query.search,
  });

  ctx.body = result;
};
