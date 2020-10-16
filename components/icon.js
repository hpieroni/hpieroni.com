import React, { Component } from "react";
import Github from "../public/icons/github.svg";
import Gmail from "../public/icons/gmail.svg";
import Instagram from "../public/icons/instagram.svg";
import Linkedin from "../public/icons/linkedin.svg";
import Twitter from "../public/icons/twitter.svg";

export const iconsMap = {
  github: Github,
  gmail: Gmail,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Icon({ name, ...passedProps }) {
  return iconsMap[name]
    ? React.createElement(iconsMap[name], passedProps)
    : null;
}
