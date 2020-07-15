const data = [
  {
    id: 1,
    type: "heavy",
    country: "USA",
    name: "T29",
    ammunition: ["AP", "APCR", "HE"],
    img:
      "http://wiki.gcdn.co/images/thumb/9/96/T29_render_1.jpg/800px-T29_render_1.jpg",
  },
  {
    id: 2,
    type: "heavy",
    country: "USA",
    name: "T57 Heavy Tank",
    ammunition: ["AP", "HEAT", "HE"],
    img:
      "http://wiki.gcdn.co/images/thumb/9/95/T57_Heavy_Tank_render_1.jpg/800px-T57_Heavy_Tank_render_1.jpg",
  },
  {
    id: 3,
    type: "medium",
    country: "USA",
    name: "M48A5 Patton",
    ammunition: ["APCR", "HEAT", "HE"],
    img: "http://wiki.gcdn.co/images/a/a7/AnnoA120_M48A5.png",
  },
  {
    id: 4,
    type: "medium",
    country: "USSR",
    name: "Object 140",
    ammunition: ["APCR", "HEAT", "HE"],
    img: "http://wiki.gcdn.co/images/e/e6/AnnoR97_Object_140.png",
  },
  {
    id: 5,
    type: "medium",
    country: "UK",
    name: "Cromwell",
    ammunition: ["AP", "APCR", "HE"],
    img: "http://wiki.gcdn.co/images/5/54/Cromwell_render_1.jpg",
  },
  {
    id: 6,
    type: "light",
    country: "USSR",
    name: "T-54 ltwt.",
    ammunition: ["AP", "APCR", "HE"],
    img: "http://wiki.gcdn.co/images/1/1e/AnnoR109_T54S.png",
  },
  {
    id: 7,
    type: "light",
    country: "USA",
    name: "T49",
    ammunition: ["APCR", "HEAT", "HE"],
    img:
      "http://wiki.gcdn.co/images/thumb/9/9f/T49_render_1.jpg/800px-T49_render_1.jpg",
  },
  {
    id: 8,
    type: "heavy",
    country: "USSR",
    name: "IS-7",
    ammunition: ["AP", "APCR", "HE"],
    img: "http://wiki.gcdn.co/images/6/64/AnnoR45_IS-7.png",
  },
  {
    id: 9,
    type: "heavy",
    country: "UK",
    name: "Super Conqueror",
    ammunition: ["AP", "APCR", "HE"],
    img: "http://wiki.gcdn.co/images/6/66/AnnoGB91_Super_Conqueror.png",
  },
  {
    id: 10,
    type: "medium",
    country: "USSR",
    name: "Object 907",
    ammunition: ["APCR", "HEAT", "HE"],
    img: "http://wiki.gcdn.co/images/0/08/AnnoR95_Object_907.png",
  },
];

function fetchTanks(cb) {
  if (!cb) {
    throw "You have no callback defined";
  }
  setTimeout(function () {
    if (Math.floor(Math.random() * 20) === 2) {
      cb("Fetch data error");
    } else {
      cb(null, data);
    }
  }, 1000);
}

export const testApi = {
  fetchData: fetchTanks,
};
