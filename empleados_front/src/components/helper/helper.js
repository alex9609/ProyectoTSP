import { isUndefined } from "util";
import axios from "axios";
import Cookies from "universal-cookie";
import app from "../../app.json";

const { APIHOST } = app;
const cookies = new Cookies();

export function calculaExtraccionSesion() {
  const now = new Date().getTime();
  const newDate = now + 60 * 30 * 1000;
  return new Date(newDate);
}

export function getSession() {
  return isUndefined(cookies.get("_s")) ? false : cookies.get("_s");
}

export const finalizarSesion = () => {
  cookies.remove("_s", { path: "/" });
  window.location.href = "/";
};

function renovarSesion() {
  const sesion = getSession();

  if (!sesion) window.location.href = "/";

  cookies.set("_s", sesion, {
    path: "/",
    expires: calculaExtraccionSesion(),
  });
  return sesion;
}

export const request = {
  get: function (services) {
    let token = renovarSesion();
    return axios.get(`${APIHOST}${services}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
