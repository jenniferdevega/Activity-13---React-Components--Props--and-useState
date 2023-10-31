# Activity 13 - React Components, Props, and useState

 Objective:

To demonstrate your understanding of React fundamentals, particularly in using components, passing props, and maintaining component state with the `useState` hook.

 Requirements:

1. Setup:
    - Ensure `Node.js` is installed.
    - Start a new Vite + React project.
    - Navigate to your new project folder.
2. Task 1: Create Components
    - Build a main `App` component that will house all other components.
    - Create three new components: `Header`, `Counter`, and `Footer`.
3. Task 2: Passing Props
    - Your `Header` component should accept a prop called `title` and display it as the main title of the page.
    - Your `Footer` component should accept a prop called `copyright` and display it at the bottom of the page.
    - In the `App` component, render both `Header` and `Footer` components and pass suitable props to them.
4. Task 3: Implement useState
    - In the `Counter` component, set up a piece of state called `count` using the `useState` hook, initializing it to 0.
    - Display the current count.
    - Add two buttons: "Increment" and "Decrement".
        - "Increment" should increase the `count` by 1.
        - "Decrement" should decrease the `count` by 1.
    - Ensure the `count` doesn't drop below 0.
    - Render the `Counter` component within the `App` component.
5. Task 4: Component Styling
    - Use inline styles, CSS classes, or styled-components to add some styling to your components. For instance, change the color of the header based on the count (e.g., turn it red if count > 5).
6. Task 5: Passing State as Props
    - Create a new component called `CountDisplay`.
    - Pass the `count` state from the `Counter` component to `CountDisplay` as a prop and display the current count in this new component.
7. Submission:
    - Push your completed code to a GitHub repository.
    - Share the repository link in our Discord channel under the #submissions section.