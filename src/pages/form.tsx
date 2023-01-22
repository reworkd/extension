import { type NextPage } from "next";
import Form from "../components/Form";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Form />
    </div>
  );
};

export default Home;
