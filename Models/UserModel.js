const db = require("../Database/database");
const bcrypt = require("bcrypt");

class User {

    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password
    }

    static async login(username, password) {
        try{

        }
        catch(error){
            console.log(error);
        }
    }

    static async register(props) {
        try {
            let errorMessage;
            let occurredError = false;
            let emailData;

            let { results } = db.query("SELECT * FROM users WHERE username = ?", [props.username]);
            console.log('1', results);
            
            // await db.query("SELECT * FROM users WHERE username = ?", [props.username], (error, results, fields) => {
            //     if (error) {
            //         console.error("Error occurred while executing the query:", error);
            //         errorMessage = "Error occurred while executing the query:";
            //         occurredError = true;
            //     } else {
            //        emailData = results;
            //        console.log('2', results);
            //     }
            // });

            // console.log('3', emailData);

            if(occurredError) {
                throw new Error(errorMessage);
            }

           

        } catch (error) {
            console.log(error);
            throw error;
        }
    }



}

module.exports = User;