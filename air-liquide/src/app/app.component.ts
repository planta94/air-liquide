import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent {
  title = 'air-liquide';
  public inputString: string;
  public reversed: string;
  public vowel: string;
  public fizzbuzz: string;

  constructor() {
    this.inputString = '';
    this.reversed = '';
    this.vowel = '';
    this.fizzbuzz = '';
  }

  updateInputValue(event: any) {
    this.inputString = event.target.value;
  }

  async reverseString() {
    const response = await this.apiCall(
      JSON.stringify({ inputString: this.inputString }),
      'reverse'
    );
    console.log(response);
    this.reversed = `Reversed String: ${response.reversedString}`;
  }

  async countVowels() {
    const response = await this.apiCall(
      JSON.stringify({ inputString: this.inputString }),
      'count-vowels'
    );
    console.log(response);
    this.vowel = `Vowels Count: ${response.vowelCount}`;
  }

  async fizzBuzz() {
    if (!this.inputString.includes('.')) {
      const number = parseInt(this.inputString);
      if (!Number.isNaN(number)) {
        const response = await this.apiCall(
          JSON.stringify({ number: number }),
          'fizzbuzz'
        );
        console.log(response);
        this.fizzbuzz = `${response.returnString}`;
      } else {
        this.fizzbuzz = 'Please provide a valid integer';
      }
    } else {
      this.fizzbuzz = 'Please provide a valid integer';
    }
  }

  async apiCall(body: string, endpoint: string) {
    console.log('calling');
    const apiUrl = `http://localhost:3000/${endpoint}`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Please try again.');
      }
    } catch (e) {
      console.log(`Error fetching data: ${e}`);
      return 'Error: Unable to fetch.';
    }
  }
}
