const store = [
  {
    id: 1,
    name: "Brinker International, Inc.",
    tags: ["Plumbing"],
    city: "NYC",
    logo: "http://placekitten.com/g/80/80"
  },
  {
    id: 2,
    name: "Cablevision Systems Corp",
    tags: ["Plumbing"],
    city: "LA",
    logo: "http://placekitten.com/g/80/80"
  },
  {
    id: 3,
    name: "Harris Corp.",
    tags: ["Plumbing", "Excavation"],
    city: "NYC",
    logo: "http://placekitten.com/g/80/80"
  },
  {
    id: 4,
    name: "Energizer Holdings Inc.",
    tags: ["Electrical", "Excavation"],
    city: "LA",
    logo: "http://placekitten.com/g/80/80"
  },
  {
    id: 5,
    name: "Foamex International Inc",
    tags: ["Electrical"],
    city: "LA",
    logo: "http://placekitten.com/g/80/80"
  },
];

exports.listCompanies = function ({ tags, search }) {
  return store.filter((company) => {
    if (search && !company.name.match(search)) {
      return false;
    }

    if (
      tags &&
      !tags.every((tag) =>
        company.tags.find((companyTag) => companyTag === tag)
      )
    ) {
      return false;
    }

    return true;
  });
};
