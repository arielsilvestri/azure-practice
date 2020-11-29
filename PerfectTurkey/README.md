## What Challenge was this for?
https://github.com/microsoft/Seasons-of-Serverless/blob/main/Nov-23-2020.md

## How to use this API

You can navigate here to see the code in action: https://perfect-turkey.azurewebsites.net/api/PerfectTurkey. Append a query string turkeySize with your turkey's size in numerical form. e.g. `?turkeySize=24`

## How I approached this

- To learn how to setup an Azure function, I followed this tutorial, but used TypeScript to solve the problem: https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-csharp?WT.mc_id=academic-10922-cxa

- I decided to make the return of the API call to html so I can apply some basic markup. I did not use any DOM methods to create my elements so that I could get a solution together more quickly.

- I chose to round all measurements to the nearest quarter or whole number, where appropriate.