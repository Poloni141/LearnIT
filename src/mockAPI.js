const database =  [
    {
        id: 1,
        category: "programming",
        title: "Javascript & JQuery",
        subtitle: "Interactive Front End Web Development",
        author: "Jon Duckett",
        editorial: " John Wiley & Sons Inc",
        price: 30,
        detail: "In JavaScript and jQuery: Interactive Front-End Development, best-selling author Jon Duckett delivers a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive. In the book, you’ll explore basic programming concepts that assume no prior knowledge of programming beyond an ability to create a web page using HTML & CSS. You’ll use core elements of the JavaScript language so you can learn how to write your own scripts from scratch, as well as jQuery, which will allow you to simplify the process of writing scripts (this is introduced half-way through the book once you have a solid understanding of JavaScript). You’ll also learn to recreate techniques you have seen on other web sites such as sliders, content filters, form validation, Ajax content updates, and much more. Each chapter: Breaks subjects down into bite-sized chunks with a new topic on each page. Contains clear descriptions of syntax, each one demonstrated with illustrative code samples. Uses diagrams and photography to explain complex concepts in a visual way. By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web and be able to customize them you will also be able to create your own scripts from scratch.",
        stock: 10,
        img: "https://images-na.ssl-images-amazon.com/images/I/71viHxTLKgL.jpg"
    },
    {
        id: 2,
        category: "programming",
        title: "Introduction to Computation and Programming Using Python",
        subtitle: "With Application to Understanding Data (The MIT Press)",
        author: "John V. Guttag",
        editorial: "MIT Press; Expanded, Revised edition ",
        price: 25,
        detail: "This book introduces students with little or no prior programming experience to the art of computational problem solving using Python and various Python libraries, including PyLab. It provides students with skills that will enable them to make productive use of computational techniques, including some of the tools and techniques of data science for using computation to model and interpret data. The book is based on an MIT course (which became the most popular course offered through MIT's OpenCourseWare) and was developed for use not only in a conventional classroom but in a massive open online course (or MOOC) offered by the pioneering MIT-Harvard collaboration edX. Students are introduced to Python and the basics of programming in the context of such computational concepts and techniques as exhaustive enumeration, bisection search, and efficient approximation algorithms. The book does not require knowledge of mathematics beyond high school algebra, but does assume that readers are comfortable with rigorous thinking and not intimidated by mathematical concepts. Although it covers such traditional topics as computational complexity and simple algorithms, the book focuses on a wide range of topics not found in most introductory texts, including information visualization, simulations to model randomness, computational techniques to understand data, and statistical techniques that inform (and misinform) as well as two related but relatively advanced topics: optimization problems and dynamic programming. Introduction to Computation and Programming Using Python can serve as a stepping-stone to more advanced computer science courses, or as a basic grounding in computational problem solving for students in other disciplines.",
        stock: 5,
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKjMRxDhIfTSeopRyvVVijnn_0kJqqmmoN2Fu79QOwcc_9p9uk"
    },
    {
        id: 3,
        category: "design",
        title: "A Project Guide to UX Design",
        subtitle: "For user experience designers in the field or in the making (Voices That Matter) ",
        author: "Russ Unger & Carolyn Chandler ",
        editorial: "New Riders Publishing",
        price: 19,
        detail: "If you are a young designer entering or contemplating entering the UX field this is a canonical book. If you are an organization that really needs to start grokking UX this book is also for you. Chris Bernard, User Experience Evangelist, Microsoft. User experience design is the discipline of creating a useful and usable Web site or application―one that is easily navigated and meets the needs of both the site owner and its users. But there is a lot more to successful UX design than knowing the latest Web technologies or design trends: It takes diplomacy, project management skills, and business savvy. Thats where this book comes in. Authors Russ Unger and Carolyn Chandler show you how to integrate UX principles into your project from start to finish.",
        stock: 12,
        img: "https://images-na.ssl-images-amazon.com/images/I/61fIBukyFsL.jpg"
    },
    {
        id: 4,
        category: "cybersecurity",
        title: "Cybersecurity Essentials",
        subtitle: "1st Edition",
        author: "Donald Short, Charles J. Brooks, Christopher Grow",
        editorial: "Sybex",
        price: 35,
        detail: "Cybersecurity Essentials provides a comprehensive introduction to the field, with expert coverage of essential topics required for entry-level cybersecurity certifications. An effective defense consists of four distinct challenges: securing the infrastructure, securing devices, securing local networks, and securing the perimeter. Overcoming these challenges requires a detailed understanding of the concepts and practices within each realm. This book covers each challenge individually for greater depth of information, with real-world scenarios that show what vulnerabilities look like in everyday computing scenarios. Each part concludes with a summary of key concepts, review questions, and hands-on exercises, allowing you to test your understanding while exercising your new critical skills. Cybersecurity jobs range from basic configuration to advanced systems analysis and defense assessment. This book provides the foundational information you need to understand the basics of the field, identify your place within it, and start down the security certification path.",
        stock: 3,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhnwHbCpNW4Tv4gSDnw54KMMxjKeZiDwX_ussD-R8vhAUVHcjn"
    }
]

export function getAllBooks() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(database), 1000)
    })
}

export function getBook(idParams) {
    return new Promise((resolve) => {
        let bookRequired = database.find((item) => {
            return item.id === Number(idParams)
        })
        setTimeout(() => resolve(bookRequired), 1000)
    })
}


console.log('get book' + getBook(2).then((book) => {console.log(book)}))

export function getBooksByCategory(idCategoryParams) {
    return new Promise((resolve) => {
        let arrFilter = database.filter((item) => item.category === idCategoryParams)
        setTimeout(() => resolve(arrFilter), 1000)
    })
}