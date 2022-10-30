import "./styles.css";
import text from "../readme.md";
import { Converter } from "showdown";

document.getElementById("app").innerHTML = new Converter().makeHtml(text);
