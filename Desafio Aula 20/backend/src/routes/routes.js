import express from "express"
import objetos from "./endpoint/objetos.js"

export default function(app) {
    app
    .use(express.json())
    .use("/objetos", objetos)
}