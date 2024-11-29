import { HoverEffect } from "./ui/card-hover-effect";

export function AssessmentCard() {
  return (
    <div className="w-full px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "IELTS Traning",
    description:
      "Apart from providing top-tier guidance and assistance as visa consultants, we also help our clients in getting a great score at IELTS Exam. Our dedicated team of tutors train the students to score the required bands.",
    link: "/services/ielts-training",
  },
  {
    title: "Profile Assessment",
    description:
      "Our industry professionals assess your profile by taking a retrospective approach. Only after an intensive study of your profile, we tell you your honest chances of going abroad and getting the visa approved.",
    link: "/services/profile-assessment",
  },
  {
    title: "Visa Consultation",
    description:
      "We provide consultancy in study & job prospects, enlighten you about other ways to immigrate, walk you through the process and documentation and make the immigration process as smooth as possible for you.",
    link: "/services/visa-consultation",
  },
  {
    title: "Visa Documentation",
    description:
      "Because of the decade long experience in the immigration industry, we know each and every bit of documentation required for all visas, by heart. We can optimally guide you through the requisites for any given visa.",
    link: "/services/visa-documentation",
  },
  {
    title: "Immegration",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/services/immegration",
  },
  {
    title: "Study Visa",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/services/study-visa",
  },
];
