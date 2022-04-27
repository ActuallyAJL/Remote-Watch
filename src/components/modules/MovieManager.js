import React from "react";
import XMLParser from "react-xml-parser";
import { localKey, remoteKey } from "../Settings";

const dbURL = "http://localhost:8088";
const localPlex = "http://localhost:32400";
const remotePlex = "http://75.46.245.204:10913";
export const url = remotePlex;
export const key = remoteKey;
const movieLibId = 1;

export const getAllMovies = () => {
  return fetch(`${url}/library/sections/${movieLibId}/all?X-Plex-Token=${key}`)
    .then((res) => res.text())
    .then((res) => {
      const xml = new XMLParser().parseFromString(res);
      return xml;
    });
};

export const getMovieById = (movieId) => {
  return fetch(`${url}/library/metadata/${movieId}?X-Plex-Token=${key}`)
    .then((res) => res.text())
    .then((res) => {
      const xml = new XMLParser().parseFromString(res);
      return xml;
    });
};

export const getMoviePoster = (imgRoute) => {
  return fetch(`${url}${imgRoute}?X-Plex-Token=${key}`);
};