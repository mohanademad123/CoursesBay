import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CartService } from 'src/app/carts/services/cart.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 coursesitem: any[] = [
    {
      id: 1,
      image: "assets/image/product_course_7.jpg",
      title: "The Complete JavaScript Course 2023: From Zero to Expert!",
      description: "Master JavaScript with projects, challenges, and theory. This course covers everything from the basics to advanced topics, making it perfect for anyone looking to excel in JavaScript.",
      price: 50.5,
      oldPrice: 76,
      language: "JavaScript"
    },
    {
      id: 2,
      image: "assets/image/product_course_6.jpeg",
      title: "Complete Python Bootcamp: Go from Zero to Hero in Python 3",
      description: "Learn Python from scratch and advance to professional-level skills. This course covers basics to advanced applications and game development in Python.",
      price: 35.99,
      oldPrice: 99.99,
      language: "Python"
    },
    {
      id: 3,
      image: "assets/image/product_course_5.jpeg",
      title: "The Complete Web Development Course: Build 15 Projects",
      description: "Learn web development technologies including HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, MySQL, and WordPress. Build real-world projects and kickstart your web development career.",
      price: 62.5,
      oldPrice: 120,
      language: "Web Development"
    },
    {
      id: 4,
      image: "assets/image/product_course_8.jpeg",
      title: "The Ultimate Java Mastery Series: From Beginner to Expert",
      description: "Become proficient in Java programming. This course covers everything from basic syntax to advanced data structures, algorithms, and real-world application development.",
      price: 79.99,
      oldPrice: 149.99,
      language: "Java"
    },
    {
      id: 5,
      image: "assets/image/product_course_4.jpeg",
      title: "C++ Programming: From Beginner to Advanced",
      description: "Learn C++ programming from the ground up. This comprehensive course covers basic to advanced topics and prepares you to build real-world applications in C++.",
      price: 45.5,
      oldPrice: 90,
      language: "C++"
    },
    {
      id: 6,
      image: "assets/image/product_course_6.jpeg",
      title: "The Complete Data Science Bootcamp: Python and R",
      description: "Become a data scientist by mastering Python and R programming. This course covers data analysis, machine learning, and more to start your career in data science.",
      price: 89.99,
      oldPrice: 129.99,
      language: "Python, R"
    },
    {
      id: 7,
      image: "assets/image/product_course_3.jpeg",
      title: "The Complete Android App Development Course: Build 5 Apps",
      description: "Learn to develop Android apps using Java and Kotlin. This course guides you through Android Studio, app development, and publishing on the Google Play Store.",
      price: 55,
      oldPrice: 85,
      language: "Java, Kotlin"
    },
    {
      id: 8,
      image: "assets/image/product_course_10.jpeg",
      title: "Mastering React: Build Dynamic Web Apps with React",
      description: "Learn to build dynamic web applications using React. This course covers React components, state management, hooks, and more, making you proficient in React development.",
      price: 42.5,
      oldPrice: 79,
      language: "React"
    },
    {
      id: 9,
      image: "assets/image/product_course_8.jpeg",
      title: "The Complete iOS App Development Course: Build 10 Apps",
      description: "Develop iOS apps using Swift. Learn iOS development, app design, Core Data, ARKit, and publish your apps on the App Store through this comprehensive course.",
      price: 65.99,
      oldPrice: 109.99,
      language: "Swift"
    },
    {
      id: 10,
      image: "assets/image/product_course_2.jpeg",
      title: "Python for Data Analysis and Visualization",
      description: "Master data analysis and visualization techniques using Python. This course covers pandas, NumPy, Matplotlib, Seaborn, and more for effective data handling and visualization.",
      price: 39.99,
      oldPrice: 59.99,
      language: "Python"
    }
];


  private URL:string = environment.apiUrl;
constructor(private http: HttpClient, private service: CartService) { }

getAlldata(): any[] {
  return this.coursesitem;
}

getprdId(id: number) {
  return this.coursesitem.find((item) => item.id == id);
}

postdata(item: any) {
  return this.http.post(`${this.URL}/CartsData`, item).pipe(
    tap(() => {
      this.service.updateCartLength();
    })
  );
}

postCourse(item: any) {
  return this.http.post(`${this.URL}/CourseData`, item);
}

UpdataCourse(item: any, id: number):Observable<any> {
  return this.http.put<any>(`${this.URL}/CourseData/${id}`, item);
}

getAllCourse():Observable<void> {
  return this.http.get<void>(`${this.URL}/CourseData`);
}

getAllCourseId(id: number):Observable<void> {
  return this.http.get<void>(`${this.URL}/CourseData/${id}`);
}

deleteCourse(id: number):Observable<void> {
  return this.http.delete<void>(`${this.URL}/CourseData/${id}`);
}

getDataFromStoage():Observable<void> {
  return this.http.get<void>(`${this.URL}/CartsData`);
}
}
