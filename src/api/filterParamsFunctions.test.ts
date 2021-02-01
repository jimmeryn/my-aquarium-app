import { getLatestParams, getLatestRefillValue } from "./filterParamsFunctions";

const latestParam = {
  id: 3,
  aquariumId: 0,
  date: "2020-04-06T00:00:00.000Z",
  name: "NO3",
  value: 150,
};
const latestRefill = {
  id: 5,
  aquariumId: 0,
  date: "2020-04-06T00:00:00.000Z",
  name: "refill",
  value: 100,
};

const testParams = [
  {
    id: 0,
    aquariumId: 0,
    date: "2019-03-17T00:00:00.000Z",
    name: "Cl2",
    value: 0,
  },
  {
    id: 1,
    aquariumId: 0,
    date: "2019-04-08T00:00:00.000Z",
    name: "Cl2",
    value: 0,
  },
  {
    id: 2,
    aquariumId: 0,
    date: "2019-04-28T00:00:00.000Z",
    name: "NO2",
    value: 0.1,
  },
  latestParam,
  {
    id: 5,
    aquariumId: 0,
    date: "2020-04-05T00:00:00.000Z",
    name: "refill",
    value: 10,
  },
  latestRefill,
];

const testEmptyParams: never[] = [];

test("getting latest params", () => {
  expect(getLatestParams(testParams)).toStrictEqual([latestParam]);
});

test("getting latest params from empty array", () => {
  expect(getLatestParams(testEmptyParams)).toStrictEqual([]);
});

test("getting latest refill value", () => {
  expect(getLatestRefillValue(testParams)).toBe(100);
});

test("getting latest refill from empty array", () => {
  expect(getLatestRefillValue(testEmptyParams)).toBe(undefined);
});
