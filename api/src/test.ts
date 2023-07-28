import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/reverse", (req: Request, res: Response) => {
  const inputString = req.body.inputString;
  const reversedString = inputString.split("").reverse().join("");
  const response = { inputString: inputString, reversedString: reversedString };
  res.json(response);
});

app.post("/count-vowels", (req: Request, res: Response) => {
  const inputString = req.body.inputString;
  const vowels = "AEIOUaeiou";
  let counter = 0;
  for (const alpha of inputString) {
    if (vowels.includes(alpha)) {
      counter += 1;
    }
  }
  const response = { inputString: inputString, vowelCount: counter };
  res.json(response);
});

app.post("/fizzbuzz", (req: Request, res: Response) => {
  const number = req.body.number;
  let returnString = "";
  let counter = 1;
  while (counter <= number) {
    const three = counter % 3 === 0;
    const five = counter % 5 === 0;
    if (counter !== 1) {
      returnString += ", ";
    }
    if (three && five) {
      returnString += "fizzbuzz";
    } else if (three) {
      returnString += "fizz";
    } else if (five) {
      returnString += "buzz";
    } else {
      returnString += `${counter}`;
    }
    counter += 1;
  }
  const response = { number: number, returnString: returnString };
  res.json(response);
});

app.listen(port, () => {
  console.log("running");
});
