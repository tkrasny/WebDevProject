import * as Env from "../../../environments";
import Parse from "parse";
import algoliasearch from "algoliasearch";

export const IndexData = () => {

    const pageNames = []

    const client = algoliasearch(
        Env.ALGO_APP_ID,
        Env.ALGO_ADMIN_KEY
    );

    // Create a new query for Pages
    const Page = Parse.Object.extend("Pages");
    const query = new Parse.Query(Page);
    query.find().then((objects) => {
        objects.forEach((page) => {
                const pageName = page.get("webpagename");
                const pageID = page.id;
                pageNames.push( {
                    "pagename": pageName,
                    "objectID": pageID})
            }
        )
        const index = client.initIndex('webdevproject');

        index.saveObjects(pageNames).catch( (err) => {
            alert(JSON.stringify(err))
        });

    });
};