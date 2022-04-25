import React from "react";
import XMLParser from 'react-xml-parser';
import { localKey , remoteKey } from "../Settings";

const dbURL = 'http://localhost:8088';
const plexURL = 'http://localhost:32400';
const movieLibId = 1;

export const getAllMovies = () => {
    return fetch(`${plexURL}/library/sections/${movieLibId}/all?X-Plex-Token=${localKey}`).then((res) => res.text()).then((res) => {
        const xml = new XMLParser().parseFromString(res);
        return xml;
    });
}