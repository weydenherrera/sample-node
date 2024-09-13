export const secondController = async (req, res) => {
    const response = messagePrinter();
    res.json(response);
 };

 export const processController = async (req, res) => {
    const response = {"username": "weyden-azure-build20240913-withbuildnumber"}
    res.json(response);
 };

function messagePrinter() {
    return {"message":"this is a test2000"}
}