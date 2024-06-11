const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

app.get("/", (request, response) => {
    response.send(
        "NAME: Varas Ram Jane M: 9999384848"
        "NAME: Kish yeg wand  M: 8737777333"
        "NAME: Vishnu shankar chovadar M: 8888800044"
        "NAME: Sachin ramakat chovader M: 6666474646"
        "NAME: Panvan pavan morea M: 9084687790"
        "NAME: WISHVAS PAVN PADHAK M: 8909909090"
        )
});

app.get("/date", (request, response) => {
    let date = new Date();
    response.send(`Today's date is ${date}`);
});



const dbPath = path.join(__dirname, "goodreads.db")

let db  null;

const initializeDBAndServer = async () => {
    try {
        db = await open ({
            filename: dbPath,
            driver: sqlite3.Database,
        })
        app.listen(3000, () => {
            console.log("Server Running at http://localhost:3000/")
        });
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
}

initializeDBAndServer();

app.listen(3000);

const getChatQuery =`
SELECT
*
FROM
chat
WHERE
chat_id = ${chatId};`;

const chat = await db.get(getChatQuery);
response.send(chat);
)};