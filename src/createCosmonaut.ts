import * as lib from "./type";

function createCosmonaut(n: string, m: lib.Mission, c: lib.Country): lib.Cosmonaut {
    let cosmonaute: lib.Cosmonaut = { name: n, mission: m, country: c}
    return cosmonaute;
}