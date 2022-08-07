import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lidias-page-not-found',
  template: `
    <section class="page_404">
      <div class="container">
        <div>
          <div class="text-centered">
            <div class="four_zero_four_bg">
              <h1>404</h1>
            </div>
            <div class="contant_box_404">
              <h3>Look like you're lost,</h3>
              <p>the page you are looking for is not avaible!</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @import 'https://fonts.googleapis.com/css2?family=Poppins&display=swap';
      .page_404 {
        padding: 40px 0;
        background: #fff;
        font-family: 'Poppins';
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .container {
        width: 1330px;
      }
      .text-centered {
        text-align: center;
      }
      .four_zero_four_bg {
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 400px;
        background-position: center;
      }

      .four_zero_four_bg h1 {
        font-size: 100px;
        font-weight: bold;
      }

      .four_zero_four_bg h3 {
        font-size: 80px;
      }

      .contant_box_404 {
        margin-top: -50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class LidiasPageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
