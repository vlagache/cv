import { writable } from "svelte/store"
// TODO: import with @static/* alias doesnt work in github actions...
import YamlcVContent from "../static/cvContent.yml"

export const cvContent = writable(YamlcVContent)
