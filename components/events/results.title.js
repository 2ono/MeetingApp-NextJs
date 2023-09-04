import Button from "../ui/button";
import classes from './results-title.module.css'

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>{humanReadableDate} 검색 결과</h1>
      <Button link="/events">모든 모임 보기</Button>
    </section>
  );
}

export default ResultsTitle;
