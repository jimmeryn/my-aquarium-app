import { Param } from "models";

const _ = require("lodash");

const filterParams = (params: Param[]) =>
  params.filter((param) => param.name !== "refill");

const filterRefills = (params: Param[]) =>
  params.filter((param) => param.name === "refill");

const getParamsByDate = (params: Param[], latestDate: number) =>
  params.filter((param) => new Date(param.date).getTime() === latestDate);

const getLatestDateFromParams = (params: Param[]) =>
  new Date(
    Math.max(...params.map((e) => new Date(e.date).getTime()))
  ).getTime();

const getParamsByLatestDate = (params: Param[]) =>
  getParamsByDate(params, getLatestDateFromParams(params));

const getLastRefillValue = (refills: Param[]) =>
  refills.length === 0 ? undefined : refills[0].value;

export const getLatestParams = _.flowRight([
  getParamsByLatestDate,
  filterParams,
]);

export const getLatestRefillValue = _.flowRight([
  getLastRefillValue,
  getParamsByLatestDate,
  filterRefills,
]);
