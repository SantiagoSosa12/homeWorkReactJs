import React from 'react';
import PropTypes from 'prop-types';


const ExampleFecth = () => {

    const dataToSend = {
        "Object": "whatsapp_business_account",
    "Entry": [
      {
        "Id": "106393322156626",
        "Changes": [
          {
            "Value": {
              "Messaging_Product": "whatsapp",
              "Metadata": {
                "Display_PhoneNumber": null,
                "Phone_Number_Id": "101935022611761"
              },
              "Contacts": [
                {
                  "Profile": {
                    "Name": "Santiago Sosa Reyes"
                  },
                  "Wa_Id": "573223942583"
                }
              ],
              "Messages": [
                {
                  "From": "573223942583",
                  "Id": "wamid.HBgLNTE5NDM2NjI5NjQVAgASGBQzQUNCODUzN0U1QkU5MkZENTFBQwA=",
                  "Timestamp": "1660362642",
                  "Type": "text",
                  "Text": {
                    "Body": "Hola, Buen día"
                  },
                  "Interactive": null
                }
              ],
              "Errors": null,
              "Statuses": null
            },
            "Field": "messages"
          }
        ]
      }
    ]
    };

    async function postData() {
        // Default options are marked with *
        const response = await fetch("http://localhost:5024/api/whatsapp", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(dataToSend), // body data type must match "Content-Type" header
        });
        console.log(response.json());
        return response.json(); // parses JSON response into native JavaScript objects
      }

    return (
        <div>
            <h1>Example axios</h1>
            <h2> **  ** </h2>
            <button onClick={postData}> Post Petition</button>
        </div>
    );
};


ExampleFecth.propTypes = {

};


export default ExampleFecth;
