$(function() {
  let data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ];

  function loadItems(array) {
    $.each(array, function (i, obj) {
      $("main").append(
        `<div class="card">
          <div class="card__profile">
            <img class="card__profile__img" src=${obj.logo} alt="logo">

            <div class="card__profile__info">
              <div class="card__profile__info__title">
                <small class="card__profile__info--company">${obj.company}</small>
              </div>

              <div class="card__profile__info__job">
                <strong class="card__profile__info--position">${obj.position}</strong>
              </div>

              <div class="card__profile__info__msg">
                <span class="card__profile__info--postedAt">${obj.postedAt}</span>
                <span class="card__profile__info--dot"></span>
                <span class="card__profile__info--contract">${obj.contract}</span>
                <span class="card__profile__info--dot"></span>
                <span class="card__profile__info--location">${obj.location}</span>
              </div>
            </div>
          </div>

          <hr class="card__hr">

          <div class="card__competences">
            <div class="card__competences--role">${obj.role}</div>
            <div class="card__competences--level">${obj.level}</div>
          </div>
        </div>`
      );

      let newText = "";
      let featuredText = "";

      obj.new ? newText = "New!": newText = "";
      obj.featured ? featuredText = "featured": featuredText = "";

      (obj.new) ?
        $(".card").eq(i).find(".card__profile__info__title").append(
          `<span class="card__profile__info--new">${newText}</span>`
        ): null;

      (obj.featured) ?
        $(".card").eq(i).css({
          "border-left": "5px solid hsl(180, 29%, 50%)",
        }) &&
        $(".card").eq(i).find(".card__profile__info__title").append(
          `<span class="card__profile__info--featured">${featuredText}</span>`
        ): null;

      $.each(obj.languages, function(index, y) {    
        $(".card").eq(i).find(".card__competences").append(
          `<div class="card__competences--languages">${y}</div>`)
      });

      $.each(obj.tools, function(index, y) {
        $(".card").eq(i).find(".card__competences").append(
          `<div class="card__competences--tools">${y}</div>`)
      });
    });
  };

  loadItems(data);

  // filtering section

  let filters = [];
  let filtered = [];
  let filterSubjects = [];

  function filterObjects (array, filterArray) {
    $.each(array, function(index, obj) {
      const {role, level, languages: [lan1, lan2, lan3], tools: [tool1, tool2]} = obj;
      filterSubjects = [role, level, lan1, lan2, lan3, tool1, tool2].filter(a => a != undefined);
      obj = {...obj, filters: filterSubjects};
  
      [obj].forEach(item => {
        filterArray.every(v => item.filters.includes(v)) ? filtered.push(item): null;
      });
    });
  };

  $("body").on("click", ".card__competences--languages, .card__competences--tools, .card__competences--role, .card__competences--level", function(e) {
    
    let text = $(e.target).text();
    filters.push(text);
    filters = filters.filter((v, i, a) => a.indexOf(v) === i);

    $(".filter__selected").append(
      `<span class="filter__selected__box">
        <span class="filter__selected--text">${text}</span>
        <img class="filter__selected--remove" src="./images/icon-remove.svg" alt="icon-remove">
      </span>`);

    $(".filter").css({
      display: "flex",
    });

    $("main").empty();

    filterObjects (data, filters);
    loadItems(filtered);
    filtered = [];

    e.preventDefault();
  });

  // removing filters

  $("body").on("click", ".filter__selected--remove", function(e) {

    $(e.target).parent().remove();
    
    let elementIndex = filters.indexOf($(e.target).prev().text());
    if (elementIndex > -1) {
      filters.splice(elementIndex, 1);
    }

    let text = $(e.target).prev().text();
    filters = filters.filter(x => x != text);

    $("main").empty();

    filterObjects (data, filters);
    loadItems(filtered);
    filtered = [];

    let lengthOfFilters = $(".filter__selected").children().length;
    
    if (lengthOfFilters === 0) {
      $(".filter").css("display", "none");
    }
  });

  // clear all filters

  $("body").on("click", ".filter__clear", function(e) {
    location.reload();
  });
});