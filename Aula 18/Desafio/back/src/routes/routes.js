import express from 'express'
import requests from './requests.js'

export default function(app){
    app
    .use(express.json())
    .use('/requests', requests)
}