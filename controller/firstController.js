import { executeQuery } from '../db/connection.js'

export const firstController = async (req, res) => {
    const response = messagePrinter();

    //testing try to connect to a database table
    const results =  await executeQuery('select id, name,' + Date.now() + ' as time from programming_languages');
    console.log(results);

    res.json(results);
 };

function messagePrinter() {
    return {"message":"this is a test"}
}