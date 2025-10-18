import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const blogContent: Record<number, { title: string; category: string; date: string; content: string }> = {
  1: {
    title: "Giới thiệu ngôn ngữ lập trình Java",
    category: "Java",
    date: "2025-01-15",
    content: `
Java là một ngôn ngữ lập trình hướng đối tượng được phát triển bởi Sun Microsystems vào năm 1995. 
Ngôn ngữ này được thiết kế với mục tiêu "Write Once, Run Anywhere" (WORA), có nghĩa là code Java 
có thể chạy trên bất kỳ nền tảng nào mà không cần sửa đổi.

## Đặc Điểm Nổi Bật của Java

1. **Đa nền tảng**: Java chạy trên JVM (Java Virtual Machine), cho phép chạy trên Windows, Mac, Linux, v.v.
2. **Hướng đối tượng**: Java hỗ trợ đầy đủ các khái niệm OOP như class, inheritance, polymorphism.
3. **Bảo mật**: Java có cơ chế bảo mật mạnh mẽ, phù hợp cho các ứng dụng enterprise.
4. **Hiệu suất cao**: Java được biên dịch thành bytecode, cho phép thực thi nhanh.
5. **Thư viện phong phú**: Java có một thư viện chuẩn rất lớn và mạnh mẽ.

## Cài Đặt JDK

Để bắt đầu lập trình Java, bạn cần cài đặt JDK (Java Development Kit):

1. Tải JDK từ trang chính thức của Oracle
2. Cài đặt JDK trên máy tính của bạn
3. Thiết lập biến môi trường JAVA_HOME
4. Kiểm tra cài đặt bằng lệnh: java -version

## Chương Trình Java Đầu Tiên

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

Đây là chương trình Java đơn giản nhất. Nó sẽ in ra "Hello, World!" trên màn hình.
    `,
  },
  2: {
    title: "Cấu trúc chương trình Java và kiểu dữ liệu cơ bản",
    category: "Java",
    date: "2025-01-16",
    content: `
## Cấu Trúc Chương Trình Java

Mỗi chương trình Java bắt đầu với một lớp (class) và một phương thức main():

\`\`\`java
public class MyProgram {
    public static void main(String[] args) {
        // Code của bạn ở đây
    }
}
\`\`\`

- **public**: Từ khóa truy cập, cho phép truy cập từ bất kỳ đâu
- **class**: Khai báo một lớp
- **static**: Phương thức có thể gọi mà không cần tạo instance
- **void**: Phương thức không trả về giá trị
- **main**: Điểm bắt đầu của chương trình

## Kiểu Dữ Liệu Cơ Bản

Java có 8 kiểu dữ liệu nguyên thủy:

1. **byte**: 8-bit integer (-128 đến 127)
2. **short**: 16-bit integer (-32,768 đến 32,767)
3. **int**: 32-bit integer (mặc định cho số nguyên)
4. **long**: 64-bit integer
5. **float**: 32-bit floating point
6. **double**: 64-bit floating point (mặc định cho số thực)
7. **boolean**: true hoặc false
8. **char**: Một ký tự Unicode

## Ví Dụ Khai Báo Biến

\`\`\`java
int age = 20;
double height = 1.75;
String name = "Phạm Phú Sơn";
boolean isStudent = true;
char grade = 'A';
\`\`\`

## Quy Tắc Đặt Tên Biến

- Bắt đầu bằng chữ cái, dấu gạch dưới (_) hoặc ký hiệu đô la ($)
- Không được bắt đầu bằng số
- Phân biệt chữ hoa và chữ thường
- Không được chứa khoảng trắng
- Không được sử dụng từ khóa Java
    `,
  },
  3: {
    title: "Cấu trúc điều khiển trong Java",
    category: "Java",
    date: "2025-01-17",
    content: `
## Câu Lệnh If-Else

\`\`\`java
int age = 18;
if (age >= 18) {
    System.out.println("Bạn đã trưởng thành");
} else {
    System.out.println("Bạn chưa trưởng thành");
}
\`\`\`

## Câu Lệnh Switch

\`\`\`java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Thứ Hai");
        break;
    case 2:
        System.out.println("Thứ Ba");
        break;
    case 3:
        System.out.println("Thứ Tư");
        break;
    default:
        System.out.println("Ngày không hợp lệ");
}
\`\`\`

## Vòng Lặp For

\`\`\`java
for (int i = 1; i <= 5; i++) {
    System.out.println("Lần lặp: " + i);
}
\`\`\`

## Vòng Lặp While

\`\`\`java
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}
\`\`\`

## Vòng Lặp Do-While

\`\`\`java
int i = 0;
do {
    System.out.println("i = " + i);
    i++;
} while (i < 5);
\`\`\`

Vòng lặp do-while sẽ thực thi ít nhất một lần, ngay cả khi điều kiện là false.
    `,
  },
  4: {
    title: "Lập trình hướng đối tượng trong Java",
    category: "Java",
    date: "2025-01-18",
    content: `
## Khái Niệm OOP

Lập trình hướng đối tượng (OOP) là một phương pháp lập trình dựa trên các đối tượng và lớp.

## Class và Object

\`\`\`java
public class Student {
    // Thuộc tính
    String name;
    int age;
    double gpa;
    
    // Phương thức
    void study() {
        System.out.println(name + " đang học");
    }
}

// Tạo object
Student student1 = new Student();
student1.name = "Phạm Phú Sơn";
student1.age = 20;
student1.study();
\`\`\`

## Encapsulation (Đóng Gói)

\`\`\`java
public class BankAccount {
    private double balance;
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
\`\`\`

## Inheritance (Kế Thừa)

\`\`\`java
public class Animal {
    void eat() {
        System.out.println("Động vật đang ăn");
    }
}

public class Dog extends Animal {
    void bark() {
        System.out.println("Chó sủa");
    }
}
\`\`\`

## Polymorphism (Đa Hình)

\`\`\`java
public class Shape {
    void draw() {
        System.out.println("Vẽ hình");
    }
}

public class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Vẽ hình tròn");
    }
}
\`\`\`
    `,
  },
  5: {
    title: "Xử lý ngoại lệ và làm việc với file trong Java",
    category: "Java",
    date: "2025-01-19",
    content: `
## Xử Lý Ngoại Lệ (Exception Handling)

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Lỗi: " + e.getMessage());
} finally {
    System.out.println("Khối finally luôn được thực thi");
}
\`\`\`

## Đọc File

\`\`\`java
import java.io.FileReader;
import java.io.BufferedReader;

try {
    FileReader fr = new FileReader("file.txt");
    BufferedReader br = new BufferedReader(fr);
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
    br.close();
} catch (Exception e) {
    e.printStackTrace();
}
\`\`\`

## Ghi File

\`\`\`java
import java.io.FileWriter;

try {
    FileWriter fw = new FileWriter("output.txt");
    fw.write("Xin chào, đây là nội dung file");
    fw.close();
    System.out.println("Ghi file thành công");
} catch (Exception e) {
    e.printStackTrace();
}
\`\`\`

## Các Loại Exception Phổ Biến

- **NullPointerException**: Truy cập object null
- **ArrayIndexOutOfBoundsException**: Chỉ số mảng ngoài phạm vi
- **ArithmeticException**: Lỗi toán học (chia cho 0)
- **FileNotFoundException**: File không tìm thấy
- **IOException**: Lỗi input/output
    `,
  },
  6: {
    title: "Giới thiệu về JavaScript và cách nhúng vào trang web",
    category: "JavaScript",
    date: "2025-01-20",
    content: `
## JavaScript là gì?

JavaScript là một ngôn ngữ lập trình được thiết kế để chạy trên trình duyệt web. 
Nó cho phép bạn tạo các trang web tương tác và động.

## Vai Trò của JavaScript

1. **Tương tác người dùng**: Xử lý sự kiện như click, hover, submit form
2. **Xác thực dữ liệu**: Kiểm tra dữ liệu trước khi gửi đến server
3. **Hiệu ứng động**: Tạo animation và hiệu ứng trực quan
4. **Quản lý DOM**: Thay đổi nội dung HTML động

## Cách Nhúng JavaScript vào HTML

### 1. Inline Script
\`\`\`html
<button onclick="alert('Hello!')">Click me</button>
\`\`\`

### 2. Internal Script
\`\`\`html
<script>
    console.log("Hello, JavaScript!");
</script>
\`\`\`

### 3. External Script
\`\`\`html
<script src="script.js"></script>
\`\`\`

## Ví Dụ Đơn Giản

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>
    <h1>Xin chào JavaScript</h1>
    <script>
        console.log("Trang web đã tải");
    </script>
</body>
</html>
\`\`\`
    `,
  },
  7: {
    title: "Biến, kiểu dữ liệu và toán tử trong JavaScript",
    category: "JavaScript",
    date: "2025-01-21",
    content: `
## Khai Báo Biến

### var (cũ)
\`\`\`javascript
var name = "Phạm Phú Sơn";
\`\`\`

### let (khuyến nghị)
\`\`\`javascript
let age = 20;
\`\`\`

### const (hằng số)
\`\`\`javascript
const PI = 3.14159;
\`\`\`

## Kiểu Dữ Liệu

\`\`\`javascript
// String
let text = "Hello";

// Number
let number = 42;
let decimal = 3.14;

// Boolean
let isTrue = true;

// Array
let fruits = ["Apple", "Banana", "Orange"];

// Object
let person = {
    name: "Sơn",
    age: 20,
    city: "TP.HCM"
};

// null và undefined
let empty = null;
let notDefined;
\`\`\`

## Toán Tử

### Toán Tử Số Học
\`\`\`javascript
let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1
\`\`\`

### Toán Tử So Sánh
\`\`\`javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 3);     // true
console.log(5 > 3);      // true
\`\`\`

### Toán Tử Logic
\`\`\`javascript
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false
\`\`\`
    `,
  },
  8: {
    title: "Cấu trúc điều khiển và hàm trong JavaScript",
    category: "JavaScript",
    date: "2025-01-22",
    content: `
## Câu Lệnh If-Else

\`\`\`javascript
let age = 18;
if (age >= 18) {
    console.log("Bạn đã trưởng thành");
} else {
    console.log("Bạn chưa trưởng thành");
}
\`\`\`

## Vòng Lặp For

\`\`\`javascript
for (let i = 0; i < 5; i++) {
    console.log("i = " + i);
}
\`\`\`

## Vòng Lặp While

\`\`\`javascript
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}
\`\`\`

## Hàm (Function)

\`\`\`javascript
// Khai báo hàm
function greet(name) {
    return "Xin chào, " + name;
}

// Gọi hàm
console.log(greet("Sơn"));
\`\`\`

## Arrow Function

\`\`\`javascript
const add = (a, b) => a + b;
console.log(add(5, 3));  // 8
\`\`\`

## Phạm Vi Biến (Scope)

\`\`\`javascript
let globalVar = "Global";

function myFunction() {
    let localVar = "Local";
    console.log(globalVar);  // "Global"
    console.log(localVar);   // "Local"
}

console.log(globalVar);  // "Global"
console.log(localVar);   // Error: localVar is not defined
\`\`\`
    `,
  },
  9: {
    title: "Tương tác với DOM và sự kiện trong JavaScript",
    category: "JavaScript",
    date: "2025-01-23",
    content: `
## Truy Cập DOM

### getElementById
\`\`\`javascript
let element = document.getElementById("myId");
\`\`\`

### querySelector
\`\`\`javascript
let element = document.querySelector(".myClass");
let elements = document.querySelectorAll("p");
\`\`\`

## Thay Đổi Nội Dung

\`\`\`javascript
// Thay đổi text
document.getElementById("title").textContent = "Tiêu đề mới";

// Thay đổi HTML
document.getElementById("content").innerHTML = "<p>Nội dung mới</p>";

// Thay đổi thuộc tính
document.getElementById("link").href = "https://example.com";
\`\`\`

## Thêm Sự Kiện

### onclick
\`\`\`html
<button onclick="handleClick()">Click me</button>
<script>
    function handleClick() {
        alert("Button clicked!");
    }
</script>
\`\`\`

### addEventListener
\`\`\`javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
\`\`\`

## Các Sự Kiện Phổ Biến

- **click**: Khi người dùng click
- **mouseover**: Khi di chuột vào
- **mouseout**: Khi di chuột ra
- **keydown**: Khi nhấn phím
- **submit**: Khi submit form
- **change**: Khi giá trị thay đổi

## Ví Dụ Hoàn Chỉnh

\`\`\`html
<input type="text" id="nameInput" placeholder="Nhập tên">
<button id="submitBtn">Gửi</button>
<p id="result"></p>

<script>
    document.getElementById("submitBtn").addEventListener("click", function() {
        let name = document.getElementById("nameInput").value;
        document.getElementById("result").textContent = "Xin chào, " + name;
    });
</script>
\`\`\`
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((id) => ({
    id: id,
  }))
}

export const revalidate = 3600

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogContent[postId]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Bài viết không tìm thấy</h1>
            <Link href="/blog" className="text-accent hover:underline">
              Quay lại danh sách bài viết
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 px-4">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-accent hover:underline mb-6 inline-block">
            ← Quay lại
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-accent text-accent-foreground rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("vi-VN")}</span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
          </header>

          <div className="prose prose-invert max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 text-foreground leading-relaxed">
              {post.content.split("\n").map((paragraph, idx) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-primary mt-6 mb-3">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("```")) {
                  return null
                }
                if (paragraph.trim() === "") {
                  return <br key={idx} />
                }
                return (
                  <p key={idx} className="mb-3">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
