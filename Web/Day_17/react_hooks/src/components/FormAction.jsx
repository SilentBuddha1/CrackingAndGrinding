import { useFormStatus } from "react-dom";

const FormAction = () => {
  const { pending } = useFormStatus();
  console.log("pending", pending);
  const handleSubmit = async () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Form submitted successfully!");
        console.log("Form submitted successfully!");
      }, 1000);
    })
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
        alert("Error submitting form: " + error);
      });
  };
  const Form = () => {
    return(
        <center>
          <h1>Learning React Hooks</h1>
          <input  type="text" placeholder="Enter your name" />
          <br />
          <br />
          <button disabled={pending} >Submit</button>
        </center>
      )};
  return (
    <form action={handleSubmit}>
    <Form /> 
    </form>
  );
};

export default FormAction;
