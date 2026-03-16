import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
// task2:
// 1.What is the purpose of the src/app/ folder?
// يحتوي عى كل main components 
// 2.What does app.component.ts contain?
//يعني اول صفحة تطلع اول ما نشغل السرفر , هذا هو الكومبوننت الرئيسي للتطبيق 
// 3.What is the role of app.module.ts?
// ملف app.module.ts هو الموديول الرئيسي الذي يقوم بتسجيل وربط المكونات في Angular
// 4.Where would you add global CSS styles?
// يمكن إضافة CSS عام للمشروع داخل الملف src/styles.css
// 5.What does angular.json control?
// angular.json يحتوي على التنسيق الرئيسي للمشروع مثل styles css , script js
