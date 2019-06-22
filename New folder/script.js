const fetch = require("node-fetch");
const readline = require("readline");
const tournament_key = "RGAPI-9235e664-6e10-468e-a499-34a50275627a";

const get_match_id = async tournament_code => {
  let match_id = await fetch(
    `https://na1.api.riotgames.com/lol/match/v4/matches/by-tournament-code/${tournament_code}/ids?api_key=${tournament_key}`
  ).then(res => res.json());
  return match_id;
};

const get_match = (id, tournament_code) => {
  console.log("Go to this url in chrome:");
  console.log(
    `https://na1.api.riotgames.com/lol/match/v4/matches/${id}/by-tournament-code/${tournament_code}?api_key=${tournament_key}`
  );
  console.log(`JSON tool: http://jsonviewer.stack.hu/`);
};

const func = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Tournament code: ", async code => {
    let match_id = await get_match_id(code);
    get_match(match_id[0], code);
    rl.close();
  });
};

func();
