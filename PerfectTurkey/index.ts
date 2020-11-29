import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import cookTurkey from "./cookTurkey"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const turkeySize = (req.query.turkeySize || (req.body && req.body.turkeySize));
    const responseMessage = turkeySize
        ? `<h1>Turkey Recipe and Cook Times</h1><p>${cookTurkey(turkeySize)}</p>`
        : "Please provide a turkey size by adding the following query string to your request:'?turkeySize=<integer>'"

    context.res = {
        body: responseMessage,
        headers: {
            "Content-Type": "text/html"
        }
    };

};

export default httpTrigger;