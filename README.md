# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive web application where users can explore different development technologies and create their own personalized technology stack.

---

## ✨ Features

* 🔍 **Explore Technologies**

  Browse different development technologies with their name, category, description, difficulty, rating, and badge.

* 🧩 **Build Your Stack**

  Add your favorite technologies to a personalized stack and remove them whenever needed.

* 🔔 **Toast Notifications**

  Get notifications when a technology is added, already exists, removed, or when all technologies are removed.

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Vite
* Tailwind CSS
* React Toastify
* React Icons
* JSON

---

## 📂 Project Structure

```text
src/
├── component/
│   ├── TechSection/
│   │   ├── Techs.tsx
│   │   ├── TechnologyList.tsx
│   │   └── TechnologyCard.tsx
│   │
│   ├── Stack/
│   │   └── YourStack.tsx
│   │
│   ├── shared/
│   │   ├── Navber.tsx
│   │   ├── Banner.tsx
│   │   └── Footer.tsx
│   │
│   └── types/
│       └── technologyTypes.ts
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── technologies.json
```

---

## 📊 Technology Data

Technology information is stored separately in:

`public/technologies.json`

The application fetches this JSON data using the `fetch()` API and displays it dynamically.

Each technology contains:

* ID
* Name
* Category
* Description
* Icon
* Rating
* Difficulty
* Badge

---

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and helps us describe the UI.

### 2. What is the difference between props and state?

Props are data or functions passed from a parent component to a child component.

State is data managed inside a component that can change over time.

For example, technologies and event functions are passed as props, while the selected stack is stored as state.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data inside a React component.

In this project, I used it in Techs.tsx to manage the selected technologies.

```tsx
const [stack, setStack] = useState<Technology[]>([]);
```

I also used useState in App.tsx to manage technologies, loading, and error states.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.

I used it in App.tsx to fetch technology data from technologies.json when the application loads.

```tsx
useEffect(() => {
  loadData();
}, []);
```

This allows the JSON data to be loaded when the component starts.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

It helps React efficiently detect which items have been added, removed, or changed.

In this project, I used the technology id as the unique key.

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in YourStack.tsx.

When the stack is empty, an empty message is displayed:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Selected technologies
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data and functions to a child component using props.

For example:

```tsx
<TechnologyList
  technologies={technologies}
  stack={stack}
  onAddToStack={handleAddToStack}
/>
```

The child can call a function received through props.

For example:

```tsx
onAddToStack(technology);
```

This allows the child to send an action back to the parent so the parent can update its state.

---

## 📱 Responsive Design

The application is responsive and works on:

* 📱 Mobile devices
* 📱 Tablets
* 💻 Desktop devices

The technology cards use a responsive grid:

* Mobile → 1 column
* Tablet → 2 columns
* Desktop → 3 columns

The navbar also includes a mobile hamburger menu.

---

## 🔔 Toast Notifications

React Toastify is used to display notifications for different user actions.

Examples:

* Technology added successfully
* Technology already exists in the stack
* Technology removed
* All technologies removed
