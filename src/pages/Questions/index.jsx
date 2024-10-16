import { Link } from "react-router-dom";
import { useSubscription } from "@apollo/client";
import { QUESTIONS_SUBSCRIPTION } from "./queries";
import Loading from "../../components/Loading";

function Questions() {
  const { data, loading } = useSubscription(QUESTIONS_SUBSCRIPTION);

  if (loading) {
    return <Loading />;
  }
  console.log(data);

  return (
    <div>
      {data.questions.map((question) => (
        <div key={question.id}>
          <Link to={`/q/${question.id}`}>{question.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Questions;
