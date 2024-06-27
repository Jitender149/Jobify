import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { __dirname } from './dirname.js';
import path from 'path';

const app = express();
const port = 5000;

app.use(express.static("public")); // access static files public folder
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.render(__dirname + '/view/index.ejs');
})

app.post('/submit', async (req, res) => {
    try {
        const { keywords, location } = req.body;

        // defining the url
        const url = `https://jooble.org/api/${'0dc3b81f-83bc-4e40-8f9a-fa179e531de6'}`;

        // Data for the POST request
        const data = {
            keywords: keywords,
            location: location
        };

        // Set up the request options
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Make a POST request to the provided URL with the provided data using Axios
        const response = await axios.post(url, data, options);
       // Format the job snippets
       const formattedJobs = response.data.jobs.map(job => ({
        ...job,
        snippet: formatJobSnippet(job.snippet)
    }));

    // Update the jobs part of the response data
    const updatedResponseData = {
        ...response.data,
        jobs: formattedJobs
    };
        // Send the response from the external request back to the client
        //res.json(response.data);
        console.log(response.data);
        res.render(__dirname + '/view/solution.ejs', {jobs: updatedResponseData});
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
})



app.listen(port , ()=>{
    console.log(`Server running on port: ${port}`);
})

function formatJobSnippet(snippet) {
    // Replace non-breaking spaces with regular spaces
    snippet = snippet.replace(/&nbsp;/g, ' ');
    return snippet;
}