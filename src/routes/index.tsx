import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Welcome - Ibraheem Mansour</Title>
      <img className="circular-image pop-and-glitter " src="assets\img\ibraheem.png" alt="Ibraheem Mansour" />

      <h2 className="my-name">Ibraheem Mansour</h2>
      <h3>Software Engineer</h3>
      <p style="" textAlign="justify">
      Computer and communications engineering graduate (M.S.) with over 7 years of experience in full-stack development, implementing, and testing software to meet specific client requirements. With a dedication to continual self-development, I enjoy working collaboratively or independently and have an eye for detail. Currently, I am seeking a career with a progressive company that provides an opportunity to enhance my technical skills.
      </p>
      
      <div className="center-dev mt-2">
        <a href="https://www.instagram.com/ibraheemmansour1992" target="_blank" rel="noopener noreferrer">
          <img src="assets\img\instagram_logo.png" alt="Instagram" style={{width: '40px', height: '40px'}} />
        </a>
        <a href="https://www.youtube.com/@IbraheemMansour92" target="_blank" rel="noopener noreferrer">
          <img src="assets\img\youtube_logo.png" alt="YouTube" style={{width: '40px', height: '40px'}} />
        </a>
      </div>
    </main>
  );
}
