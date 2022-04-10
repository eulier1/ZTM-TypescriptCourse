import fs from "fs";
import csvParser from 'csv-parse';
import streamPromises from 'stream/promises';

const { finished } = streamPromises;
const { Parser } = csvParser;

const parser = new Parser({
  comment: "#",
  columns: true,
})

// const doesn't reassign the results, but we can
// update the content by pushing values
const habitablePlanets = []

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  )
}

const rs = fs.createReadStream("kepler.csv")
  .pipe(
    parser
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data)
    }
  })
  .on("error", (err) => {
    console.log(err)
  })
  .on("end", () => {
    console.log(`${habitablePlanets.length} habitable planets`)
  })

const run =  async (finished) => {
  await finished(rs);
  console.log('Stream is done reading.');
}

run(finished).catch(console.error);
rs.resume(); 